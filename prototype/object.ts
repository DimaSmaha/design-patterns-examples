/**
 * Prototype is used to get a copy of base element and
 * change 1 or 2 parameters inside.
 * For eg if u have complex API body, and u need to change only
 * few parameters inside. You can just use a prototyping,
 * and change the params u actually need
 */

interface IUserData {
  name: string;
  surname: string;
  age: number;
  favGame: string;
  friends: string[];
}

export class UserData implements IUserData {
  constructor(
    name: string,
    surname: string,
    age: number,
    favGame: string,
    friends: string[]
  ) {
    (this.name = name),
      (this.surname = surname),
      (this.age = age),
      (this.favGame = favGame),
      (this.friends = friends);
  }
  name: string;
  surname: string;
  age: number;
  favGame: string;
  friends: string[];

  copyObject(data: Partial<UserData>) {
    return new UserData(
      data.name != undefined ? data.name : this.name,
      data.surname != undefined ? data.surname : this.surname,
      data.age != undefined ? data.age : this.age,
      data.favGame != undefined ? data.favGame : this.favGame,
      data.friends != undefined ? data.friends : this.friends
    );
  }
}

// copyObject(
//   name?: string,
//   surname?: string,
//   age?: number,
//   favGame?: string,
//   friends?: string[]
// ) {
//   name != undefined ? this.name == name : (name = this.name);
//   surname != undefined ? this.surname == surname : (surname = this.surname);
//   age != undefined ? this.age == age : (age = this.age);
//   favGame != undefined ? this.favGame == favGame : (favGame = this.favGame);
//   friends != undefined ? this.friends == friends : (friends = this.friends);

//   return new UserData(name, surname, age, favGame, friends);

//   // without calling an object, we can jsut create a structured clone

//   // let copiedObject = structuredClone({
//   //   name,
//   //   surname,
//   //   age,
//   //   favGame,
//   //   friends,
//   // });

//   // return copiedObject;
// }
