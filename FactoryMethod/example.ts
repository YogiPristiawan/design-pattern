interface LoginConnector {
	login(): void;
}

class Doctor implements LoginConnector {
	private email: string;
	private password: string;

	constructor(email: string, password: string) {
		this.email = email;
		this.password = password;
	}

	public login(): void {
		console.log(`DOCTOR logged in with ${this.email} and ( ${this.password} )`);
	}
}

class Pharmacy implements LoginConnector {
	private email: string;
	private password: string;

	constructor(email: string, password: string) {
		this.email = email;
		this.password = password;
	}

	public login(): void {
		console.log(`PHARMACY logged in with ${this.email} and ${this.password}`);
	}
}

class User implements LoginConnector {
	private email: string;
	private password: string;

	constructor(email: string, password: string) {
		this.email = email;
		this.password = password
	}

	public login(): void {
		console.log(`USERS logged in with ${this.email} and ${this.password}`);
	}
}

/**
 * declare abstract class
 */
abstract class LoginCreator {
	abstract loginConnector(): LoginConnector;

	public login() {
		const loginConnector = this.loginConnector();
		return loginConnector.login();
	}
}

class DoctorLogin extends LoginCreator {
	private email: string;
	private password: string;

	constructor(email: string, password: string) {
		super();
		this.email = email;
		this.password = password;

	}
	public loginConnector() {
		return new Doctor(this.email, this.password);
	}
}

class PharmacyLogin extends LoginCreator {
	private email: string;
	private password: string;

	constructor(email: string, password: string) {
		super();
		this.email = email;
		this.password = password;
	}

	public loginConnector() {
		return new Pharmacy(this.email, this.password);
	}
}

class UserLogin extends LoginCreator {
	private email: string;
	private password: string;

	constructor(email: string, password: string) {
		super();
		this.email = email;
		this.password = password
	}

	public loginConnector() {
		return new User(this.email, this.password);
	}
}


function main(loginCreator: LoginCreator): void {
	loginCreator.login();
}

console.log("DOCTOR login");
console.log("================");
main(new DoctorLogin("yogi.doctor@gmail.com", "doctorPassword"))
console.log("\n");

console.log("DOCTOR login");
console.log("================");
main(new PharmacyLogin("yogi.pharmacy@gmail.com", "pharmacyPassword"))
console.log("\n");

console.log("DOCTOR login");
console.log("================");
main(new UserLogin("yogi.user@gmail.com", "userPassword"));
console.log("\n");