// Example 5: Tuple as function return type

/*
  LoginResult is a tuple that represents the outcome of a login attempt.
  - success: true if the login succeeded, false otherwise
  - message: human-readable description of the result
*/
type LoginResult = [success: boolean, message: string];

function login(username: string, password: string): LoginResult {
  if (username === "admin" && password === "1234") {
    return [true, "Login successful"];
  }
  return [false, "Invalid credentials"];
}

const [ok, msg] = login("admin", "1234");

console.log("Success:", ok);
console.log("Message:", msg);
