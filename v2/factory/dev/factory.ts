import { ClassOne } from "./class1";
import { ClassTwo } from "./class2";

export class ClassFactory {
  hook(getClass: "classOne" | "classTwo"): ClassOne | ClassTwo {
    switch (getClass) {
      case "classOne":
        return new ClassOne();
      case "classTwo":
        return new ClassTwo();
    }
  }
}
