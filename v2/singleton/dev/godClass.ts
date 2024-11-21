export class GodClass {
  static number: any = null;

  constructor() {}

  static showNumber() {
    if (this.number === null) {
      this.number = Math.random();
    }
    console.log(this.number);
    return GodClass.showNumber;
  }
}
