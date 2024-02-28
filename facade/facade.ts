/**
 * We create facades to basically decrease the code dublication, and to increase the code
 * reusability. Basically we are just creating a separate class which just hold inside
 * The actions from different classes. It could be usable, when for
 * eg you have a set of actions to login, in your beforeEach hook
 * Basically the easier method to make your test file cleaner, and more consistent
 * U can create a factory class that will login using 1 method
 * And basically you would have to import only one class in the test
 *
 * new LoginFacade().loginToTheAccount()
 *
 */

import { ClassOne } from "./class1";
import { ClassTwo } from "./class2";

export class Facade {
  public coveringActions() {
    let class1 = new ClassOne();
    let class2 = new ClassTwo();

    class1.makingActions();
    class1.makingActionsTwo();
    class2.makingActionsThree();
    class2.makingActionsFour();
  }
}
