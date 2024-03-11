export class RandomNumber {
  private static randomNumber: any;
  private constructor() {}

  public static getRandomNumber() {
    if (RandomNumber.randomNumber == null) {
      RandomNumber.randomNumber = Math.random();
    }
    return RandomNumber.randomNumber;
  }
}
