export class Calculator {
  value: number;
  history: number[];
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command: AddCommand | SubtractCommand) {
    this.value = command.execute(this.value);
    this.history.push(this.value);
    console.log("Current Value", this.value);
  }

  undoCommand(command: AddCommand | SubtractCommand) {
    this.value = command.undo(this.value);
    console.log("Current Value", this.value);
  }

  undo() {
    this.history.pop();
    this.value = this.history[this.history.length - 1];
    console.log("Current Value", this.value);
  }

  getVal() {
    console.log("Current Value", this.value);
  }
}

export class AddCommand {
  valToAdd: number;
  constructor(valToAdd: number) {
    this.valToAdd = valToAdd;
  }

  execute(currentVal: number) {
    return currentVal + this.valToAdd;
  }

  undo(currentVal: number) {
    return currentVal - this.valToAdd;
  }
}

export class SubtractCommand {
  valToSubtr: number;
  constructor(valToSubtr: number) {
    this.valToSubtr = valToSubtr;
  }

  execute(currentVal: number) {
    return currentVal - this.valToSubtr;
  }

  undo(currentVal: number) {
    return currentVal + this.valToSubtr;
  }
}
