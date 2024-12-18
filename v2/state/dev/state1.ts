interface IOrderStates {
  currentState:
    | "defaultState"
    | "ordered"
    | "paySuccess"
    | "packaging"
    | "shipment"
    | "delievered"
    | "done"
    | "payUnsuccess";
}

export class OrderStates implements IOrderStates {
  notSupported = "Not Supported Action";
  currentState: IOrderStates["currentState"] = "defaultState";

  changeState(stateToChangeOn: IOrderStates["currentState"]) {
    this.currentState = stateToChangeOn;
  }

  makeAction() {
    /** Obviously its better to do through if statements, but its my code so :P */

    this.currentState === "defaultState"
      ? console.log("The items are at the warehouse")
      : null;

    this.currentState === "ordered"
      ? console.log("The items were ordered")
      : null;

    this.currentState === "packaging"
      ? console.log("The items are packing")
      : null;

    this.currentState === "paySuccess"
      ? console.log("The invoice for the items was successfully paid")
      : null;

    this.currentState === "payUnsuccess"
      ? console.log(this.notSupported)
      : null;
  }

  makeActionCorrect() {
    if (this.currentState === "defaultState") {
      console.log("The items are at the warehouse");
    }

    if (this.currentState === "ordered") {
      console.log("The items were ordered");
    }

    if (this.currentState === "packaging") {
      console.log("The items are packing");
    }

    if (this.currentState === "paySuccess") {
      console.log("The invoice for the items was successfully paid");
    }

    if (this.currentState === "payUnsuccess") {
      console.log(this.notSupported);
    }
  }
}
