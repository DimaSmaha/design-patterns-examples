import { AddCommand, Calculator, SubtractCommand } from "./class";

let calc = new Calculator();

calc.executeCommand(new AddCommand(8));
calc.executeCommand(new SubtractCommand(3));
calc.undoCommand(new SubtractCommand(3));
console.log("-------------------------------------");

let calc1 = new Calculator();
calc1.executeCommand(new AddCommand(4));
calc1.executeCommand(new AddCommand(6));
calc1.undo();
console.log("-------------------------------------");

calc.getVal();
calc1.getVal();
