import { Page } from "@playwright/test";
import { ButtonComponent } from "./component.component";
import { PersonDTO } from "../../dto/qa/person.dto";

const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';

export class LoginPage {
  readonly page: Page;
  readonly buttons: ButtonComponent;
  constructor(page: Page) {
    this.page = page;
    this.buttons = new ButtonComponent(page);
  }

  /**
   * used to pass some specific or generic logic to another without any inheritance
   *
   */

  async goto() {
    await this.page.goto("");
  }

  async fillUserName() {
    await this.page.locator(usernameInput).fill(PersonDTO.username);
  }

  async fillPassword() {
    await this.page.locator(passwordInput).fill(PersonDTO.password);
  }
}
