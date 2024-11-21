import { someComponents } from "./class1";

export class Main {
  public components = new someComponents();

  mainFunc() {
    console.log("This is my main function");
    return this;
  }

  // looks even like small decorator for me
  mainWithComp() {
    console.log("THis is my main fn with some component");
    this.components.componentTwo();
    return this;
  }
}
