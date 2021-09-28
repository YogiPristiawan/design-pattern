package main

type iAuth interface {
	login(request string) string
	register(request string) string
}
