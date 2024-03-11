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

  copyObject(
    name?: string,
    surname?: string,
    age?: number,
    favGame?: string,
    friends?: string[]
  ) {
    name != undefined ? this.name == name : (name = this.name);
    surname != undefined ? this.surname == surname : (surname = this.surname);
    age != undefined ? this.age == age : (age = this.age);
    favGame != undefined ? this.favGame == favGame : (favGame = this.favGame);
    friends != undefined ? this.friends == friends : (friends = this.friends);

    let copiedObject = structuredClone({
      name,
      surname,
      age,
      favGame,
      friends,
    });

    return copiedObject;
  }
}
