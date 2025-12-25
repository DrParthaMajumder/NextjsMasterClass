// Example 4: Tuple with different types
// A tuple is a fixed-size, fixed-order array with fixed types for each position

/*
  UserInfo is a tuple that stores basic information about a user.
  - id:       numeric identifier of the user
  - name:     the user's display name
  - isActive: whether the user account is currently active
*/
type UserInfo = [id: number, name: string, isActive: boolean];

const user1: UserInfo = [1, "Partha", true];
const user2: UserInfo = [2, "Alex", false];

console.log("User1:", user1);
console.log("User2:", user2);
