import { UserRepository } from "./repositories/userRepository";

let userRepo = new UserRepository();
const userBody = {
  id: 4,
  firstName: "Steve",
  lastName: "Jones",
  age: 21,
  email: "lala@email.com",
};

const userBody2 = {
  id: 5,
  firstName: "Ray",
  lastName: "Mister",
  age: 55,
  email: "rarara@email.com",
};

userRepo.getAllUsers();
userRepo.getUserById("677138d742383c4200000009");
userRepo.createUser(userBody);
userRepo.updateUserById("677139d742383c4200000021", userBody2);
userRepo.deleteUserById("6771397e42383c4200000018");
