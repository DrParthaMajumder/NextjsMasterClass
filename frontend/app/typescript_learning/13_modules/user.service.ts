// user.service.ts

// Import default and named exports from the model file
import DefaultUser, { User, UserId } from "./user.model";

// A function that creates a new user
export function createUser(id: UserId, name: string, email: string): User {
  return {
    id,
    name,
    email,
    isAdmin: false,
  };
}

// A function that upgrades a user to admin
export function makeAdmin(user: User): User {
  return { ...user, isAdmin: true };
}

// Exporting the default user again (re-export)
export const guestUser: User = DefaultUser;
