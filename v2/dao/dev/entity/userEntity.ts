export interface User {
  _id?: string;
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
}

export interface UserDAO {
  getAllUsers();
  getUserById(id: string);
  createUser(user: User);
  updateUserById(id: string, user: Partial<User>);
  deleteUserById(id: string);
}
