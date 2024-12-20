package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Todo struct {
	Id primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Completed bool `json:"completed"`
	Body string `json:"body"`
}

var collection *mongo.Collection

func main(){

	fmt.Println("TaskMaker Server is working")

	if os.Getenv("ENV") != "production" {
		err := godotenv.Load(".env")
		if err != nil{
			log.Fatal("Error loading the .env file ",err)
	}

	}

	MONGODB_URI := os.Getenv("MONGODB_URI")
	clientOptions := options.Client().ApplyURI(MONGODB_URI)
	client,err := mongo.Connect(context.Background(), clientOptions)

	if err != nil{
		log.Fatal(err)
	}

	defer client.Disconnect(context.Background())

	err = client.Ping(context.Background(),nil)
	if err != nil{
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB")
	collection = client.Database("golang_db").Collection("todos")

	app := fiber.New()

	// app.Use(cors.New(cors.Config{
	// 	AllowOrigins: "http://localhost:5173",
	// 	AllowHeaders: "Origin, Content-Type, Accept",
	// }))

	app.Get("/api/todos",getTodo)
	app.Post("/api/todos",createTodo)
	app.Patch("/api/todos/:id",updateTodo)
	app.Delete("/api/todos/:id",deleteTodo)

	port := os.Getenv("PORT")
	if port == ""{
		port = "3000"
	}

	if os.Getenv("ENV") == "production" {
		app.Static("/","./client/dist")
	}

	log.Fatal(app.Listen("0.0.0.0:" + port))
}

func getTodo (c *fiber.Ctx) error {
	var todos []Todo

	cursor,err := collection.Find(context.Background(), bson.M{})

	if err != nil {
		return err
	}

	for cursor.Next(context.Background()){
		var todo Todo
		if err := cursor.Decode(&todo); err != nil {
			return err
		}

		todos = append(todos, todo)
	}
	return c.JSON(todos)
}

func createTodo (c *fiber.Ctx) error {
	todo := new(Todo)
	c.BodyParser(todo)

	if err := c.BodyParser(todo); err != nil {
		return err
	}

	if todo.Body == "" {
		return c.Status(400).JSON(fiber.Map{"error":"Todo body cannot be empty"})
	}

	createdTodo, err := collection.InsertOne(context.Background(), todo)
	if err != nil{
		return err;
	}
	todo.Id = createdTodo.InsertedID.(primitive.ObjectID)

	return c.Status(201).JSON(todo)
}

func updateTodo (c *fiber.Ctx) error {
	id := c.Params("id")
	objectID, err := primitive.ObjectIDFromHex(id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error":"Invalid todo ID"})
	}

	var todo bson.M
	filter := bson.M{"_id":objectID}
	err = collection.FindOne(context.Background(), filter).Decode(&todo)
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error":"Todo item not found"})
	}

	completed, ok := todo["completed"].(bool)
	if !ok{
		return c.Status(500).JSON(fiber.Map{"error":"Invalied 'completed' field type"})
	}

	update := bson.M{"$set": bson.M{"completed":!completed}}

	_, err = collection.UpdateOne(context.Background(),filter,update)
	if err != nil {
		return err
	}

	return c.Status(200).JSON(fiber.Map{"success":true})
}

func deleteTodo (c *fiber.Ctx) error {
	id := c.Params("id")
	objectID, err := primitive.ObjectIDFromHex(id)

	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error":"Invalid todo ID"})
	}

	filter := bson.M{"_id":objectID}
	_,err = collection.DeleteOne(context.Background(),filter)

	if err != nil{
		return err
	}
	
	return c.Status(200).JSON(fiber.Map{"success":true})
}