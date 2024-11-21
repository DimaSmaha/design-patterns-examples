interface Car {
  name: string;
  doors: number;
  wheels?: number;
  price?: number;
}

export class CarBuilder {
  private car: Car = {
    name: "",
    doors: 0,
  };

  setName(name: string) {
    this.car.name = name;
    return this;
  }

  setDoors(doors: number) {
    this.car.doors = doors;
    return this;
  }

  build() {
    if (this.car.name !== "" || this.car.doors !== 0) {
      console.log("OBJECT BUILD SUCCESSFULLY");
      console.log(`${JSON.stringify(this.car)}`);
      return this.car;
    }
    console.log("SOME STUFF IS MISSING");
    console.log(`${JSON.stringify(this.car)}`);
  }
}
