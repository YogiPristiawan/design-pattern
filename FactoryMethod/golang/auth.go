package main

import "fmt"

type auth struct {
}

func (a *auth) login(request string) string {
	result := fmt.Sprintf("%s do login.", request)
	return result
}

func (a *auth) register(request string) string {
	result := fmt.Sprintf("%s do register.", request)
	return result
}
