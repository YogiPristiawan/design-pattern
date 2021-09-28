package main

type user struct {
	auth
}

func newUser() iAuth {
	return &user{
		auth{},
	}
}
