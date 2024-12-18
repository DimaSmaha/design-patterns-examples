import { OrderStates } from "./state1";

let order = new OrderStates();
let order2 = new OrderStates();

order.makeAction(); //Default State
order.changeState("ordered");
order.makeAction();
order.changeState("paySuccess");
order.makeAction();

order2.makeAction(); //Default State
order2.changeState("payUnsuccess");
order2.makeAction();
