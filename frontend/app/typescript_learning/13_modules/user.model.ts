// user.model.ts

// Named export: interface for a User model
export interface User {
  id: number;
  name: string;
  email: string;
  isAdmin: boolean;
}

// Named export: type alias for UserId
export type UserId = number;

// Default export: a simple default/guest user
const DEFAULT_USER: User = {
  id: 0,
  name: "Guest",
  email: "guest@example.com",
  isAdmin: false,
};

export default DEFAULT_USER;
