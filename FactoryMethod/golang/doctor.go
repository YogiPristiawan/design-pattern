package main

type doctor struct {
	auth
}

func newDoctor() iAuth {
	return &doctor{
		auth{},
	}
}
