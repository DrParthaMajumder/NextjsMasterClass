type test_user = {
  id: number;
  name: string;
};

function printUser(user: test_user): void {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
}

printUser({ id: 1, name: "Partha" });
