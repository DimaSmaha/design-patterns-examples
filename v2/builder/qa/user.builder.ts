/**
 * We use Builder, to create an objects
 * with some specific structure from the scratch
 *
 * Also you can use faker for the data generation in Builder
 * Or have a preset data generation, but it rather be DTO
 */
export interface User {
  userName: string;
  password: string;
  item?: string;
}

export class UserBuilder {
  user: User = {
    userName: "",
    password: "",
  };

  setUserName(userName: string) {
    this.user.userName = userName;
    return this;
  }

  setPassword(password: string) {
    this.user.password = password;
    return this;
  }

  setItem(item: string) {
    this.user.item = item;
    return this;
  }

  build() {
    if (this.user.userName !== "" || this.user.password !== "") {
      console.log("OBJECT BUILD SUCCESSFULLY");
      console.log(`${JSON.stringify(this.user)}`);
      return this.user;
    }
    console.log("SOME STUFF IS MISSING");
    console.log(`${JSON.stringify(this.user)}`);
    return this.user;
  }
}

export const goodUser: User = new UserBuilder()
  .setUserName("standard_user")
  .setPassword("secret_sauce")
  .build();
