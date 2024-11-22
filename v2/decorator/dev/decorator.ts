import { Components } from "./class1";
import { Elements } from "./class2";

export class Decorator {
  private components = new Components();
  private elements = new Elements();

  /** Decorator actually great to use for logging */
  renderComponent() {
    console.log("Rendering");
    console.log("10%");
    console.log("50%");
    console.log("90%");
    this.components.componentOne();
  }

  renderComponentElement() {
    console.log("Rendering");
    console.log("10%");
    console.log("50%");
    console.log("90%");
    this.components.componentOne();
    this.elements.elementGen();
  }
}
