import { CarBuilder } from "./buider";

const newCar = new CarBuilder().setName("Lis").setDoors(4).build();

console.log(newCar);
