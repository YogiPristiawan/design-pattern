package main

import "fmt"

func main() {
	user, _ := authFactory("user")
	doctor, _ := authFactory("doctor")

	fmt.Printf("%s", user.login("user biasa"))
	fmt.Printf("%s", doctor.register("doctor umum"))
}
