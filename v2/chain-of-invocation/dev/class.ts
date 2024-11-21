export class Actions {
  firstName: string;

  constructor(firstName: string) {
    this.firstName = firstName;
  }

  walk = () => {
    console.log(`IM ${this.firstName}`);
    console.log(`${this.firstName} WALKING`);
    return this;
  };

  run = () => {
    console.log(`IM ${this.firstName}`);
    console.log(`${this.firstName} RUNNING`);
    return this;
  };

  eat = () => {
    console.log(`IM ${this.firstName}`);
    console.log(`${this.firstName} EATING`);
    return this;
  };

  crouch = () => {
    console.log(`IM ${this.firstName}`);
    console.log(`${this.firstName} CROUCHING`);
  };
}
