import { User } from "./entity/userEntity";
import { UserRepository } from "./repositories/userRepository";

let userRepo = new UserRepository();
const userBody = {
  id: 5,
  firstName: "John",
  lastName: "Malinsky",
  age: 53,
  email: "lala@email.com",
};

const userBody2 = {
  id: 4,
  firstName: "Randy",
  lastName: "Sale",
  age: 66,
  email: "rarara@email.com",
};

async function test() {
  console.log("1.----------Creating a user ------------");
  let createdUser: User = await userRepo.createUser(userBody);
  console.log(createdUser._id);
  let createdUserId = `${createdUser._id}`;

  console.log("2.----------Reading a user ------------");
  await userRepo.getUserById(createdUserId);

  console.log("3.----------Updating a user ------------");
  await userRepo.updateUserById(createdUserId, userBody2);
  await userRepo.getUserById(createdUserId);

  console.log("4.----------Deleting a user ------------");
  await userRepo.deleteUserById(createdUserId);
}

test();
