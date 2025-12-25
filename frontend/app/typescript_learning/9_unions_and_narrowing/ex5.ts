/*
  Example 5: Custom Type Guard
  A function that checks if a type is Admin.
*/

type Admin = { role: "admin"; name: string };
type test_User = { role: "user"; name: string };

function isAdmin(test_person: Admin | test_User): test_person is Admin {
  return test_person.role === "admin";
}

function greet(test_person: Admin | test_User) {
  if (isAdmin(test_person)) {
    console.log("Hello Admin", test_person.name);
  } else {
    console.log("Hello User", test_person.name);
  }
}

greet({ role: "admin", name: "Partha" });
greet({ role: "user", name: "Ravi" });
