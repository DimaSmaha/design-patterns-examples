import { ClassOne } from "./class1";
import { ClassTwo } from "./class2";

export class Facade {
  public classOne = new ClassOne();
  public classTwo = new ClassTwo();

  join() {
    this.classTwo.hiFromClass();
    this.classOne.hiFromClass();
  }
}
