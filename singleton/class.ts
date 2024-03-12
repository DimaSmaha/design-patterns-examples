/**
 * We use singleton pattern in order to get only the one
 * entity of some object of state
 * Generally its used for the driver
 * When we initialize the driver in one place
 * And then we can use this drivers all over the test files
 */

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
