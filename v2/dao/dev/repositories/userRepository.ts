import { BASE_TABLE_ENDPOINT } from "../connection/connectToDB";
import { User, UserDAO } from "../entity/userEntity";
import {
  makeRequestToDB,
  makeBodyRequestToDB,
} from "../request/makeRequestToDB";

export class UserRepository implements UserDAO {
  getAllUsers() {
    return makeRequestToDB(BASE_TABLE_ENDPOINT, "GET");
  }

  getUserById(id: string) {
    return makeRequestToDB(BASE_TABLE_ENDPOINT, "GET", `/${id}`);
  }

  createUser(user: User) {
    let userBody = user;
    return makeBodyRequestToDB(BASE_TABLE_ENDPOINT, "POST", userBody);
  }

  updateUserById(id: string, user: User) {
    let userBody = user;
    return makeBodyRequestToDB(BASE_TABLE_ENDPOINT, "PUT", userBody, `/${id}`);
  }

  deleteUserById(id: string) {
    return makeRequestToDB(BASE_TABLE_ENDPOINT, "DELETE", `/${id}`);
  }
}
