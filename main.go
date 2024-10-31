package main

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
)

const PORT string = ":3000"
func main(){
	fmt.Printf("Server is running on port%s",PORT)
	app := fiber.New()

	app.Get("/",func(c *fiber.Ctx) error{
		return c.Status(200).JSON(fiber.Map{"msg":"Test Get Request Working"})
	})

	log.Fatal(app.Listen(PORT))
}