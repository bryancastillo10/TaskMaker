package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

type Todo struct {
	Id int `json:"id"`
	Completed bool `json:"completed"`
	Body string `json:"body"`
}


const PORT string = ":3000"
func main(){
	fmt.Printf("Server is running on port%s",PORT)
	app := fiber.New()

	todos := []Todo{}

	// Get Todo Endpoint
	app.Get("/api/todos",func(c *fiber.Ctx) error{
		return c.Status(200).JSON(todos)
	})

	// Create Todo Endpoint
	app.Post("/api/todos", func(c *fiber.Ctx) error{
		todo := &Todo{}

		if err := c.BodyParser(todo); err != nil {
			return err
		}
		
		if todo.Body == "" {
			return c.Status(400).JSON(fiber.Map{"error":"To Do Body is required"})
		}

		todo.Id = len(todos) + 1
		todos = append(todos, *todo)
		return c.Status(201).JSON(todo)
	})

	// Update Todo Endpoint
	app.Patch("/api/todos/:id", func(c *fiber.Ctx) error {
		id := c.Params("id")

		for i, todo := range todos {
			if fmt.Sprint(todo.Id) == id {
				todos[i].Completed = true
				return c.Status(200).JSON(todos[i])
			}
		}

		return c.Status(404).JSON(fiber.Map{"error": "Todo not found"})
	})

	// Delete Todo Endpoint
	app.Delete("api/todos/:id", func(c *fiber.Ctx) error{
		id := c.Params("id")

		for i, todo := range todos {
			if fmt.Sprint(todo.Id) == id {
				todos = append(todos[:i], todos[i + 1:]...)
				return c.Status(200).JSON(fiber.Map{"success":true})
			}
		}

		return c.Status(404).JSON(fiber.Map{"error":"Todo not found"})
		
	})

	log.Fatal(app.Listen(PORT))
}