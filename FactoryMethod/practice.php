<?php
interface Login
{
	public function login(): string;
}

class DoctorLogin implements Login
{
	protected $email;
	protected $password;

	public function __construct(string $email, string $password)
	{
		$this->email = $email;
		$this->password = $password;
	}

	public function login(): string
	{
		return "DOCTOR logged in with $this->email and ( $this->password )";
	}
}

class PharmacyLogin implements Login
{
	protected $email;
	protected $password;

	public function __construct(string $email, string $password)
	{
		$this->email = $email;
		$this->password = $password;
	}

	public function login(): string
	{
		return "PHARMACY logged in with $this->email and ( $this->password )";
	}
}

abstract class LoginCreator
{
	protected $email;
	protected $password;

	abstract function prepare(): Login;

	public function doLogin()
	{
		$login = $this->prepare();
		return $login->login();
	}
}

class Doctor extends LoginCreator
{

	public function __construct(string $email, string $password)
	{
		$this->email = $email;
		$this->password = $password;
	}
	public function prepare(): Login
	{
		return new DoctorLogin($this->email, $this->password);
	}
}

class Pharmacy extends LoginCreator
{

	public function __construct(string $email, string $password)
	{
		$this->email = $email;
		$this->password = $password;
	}

	public function prepare(): Login
	{
		return new PharmacyLogin($this->email, $this->password);
	}
}


function main(LoginCreator $login)
{
	return $login->doLogin();
}

echo "Doctor do log in: \n";
echo "================== \n";
echo main(new Doctor("yogi.doctor@gmail.com", "password"));

echo "\n\n\n";

echo "Pharmacy do log in: \n";
echo "================== \n";
echo main(new Pharmacy("yogi.pharmacy@gmail.com", "password"));
