package main

import "fmt"

func authFactory(request string) (iAuth, error) {
	if request == "doctor" {
		return newDoctor(), nil
	} else if request == "user" {
		return newUser(), nil
	}

	return nil, fmt.Errorf("Invalid request")
}
