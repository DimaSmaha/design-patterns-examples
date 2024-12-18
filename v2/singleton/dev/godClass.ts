export class GodClass {
  static number: any = null;
  static showNumber() {
    if (this.number === null) {
      this.number = Math.random();
    }
    console.log(this.number);
    return GodClass;
  }

  static numberTwo: any = null;
  static showNumberTwo() {
    if (this.numberTwo !== null) {
      console.log(this.numberTwo);
      return GodClass;
    }
    this.numberTwo = Math.random();
  }
}
