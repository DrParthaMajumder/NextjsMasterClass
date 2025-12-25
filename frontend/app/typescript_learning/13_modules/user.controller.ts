// user.controller.ts

// Import functions and values from the service
import { createUser, makeAdmin, guestUser } from "./user.service";

// Import type only (no runtime code) from the model
import type { User } from "./user.model";

function printUser(user: User): void {
  console.log(`User: ${user.name} <${user.email}> (admin: ${user.isAdmin})`);
}

// Use the imported guestUser
printUser(guestUser);

// Create a new user and upgrade to admin
const u1 = createUser(1, "Partha", "partha@example.com");
printUser(u1);

const u1Admin = makeAdmin(u1);
printUser(u1Admin);
