import { APIResponse, expect } from "@playwright/test";
import { Logger } from "./logger";
import * as chai from "chai";
import { expect as expectChai } from "chai";
import chaiJsonSchema from "chai-json-schema";
chai.use(chaiJsonSchema);

//** Use singleton to handle the token all over the test */

export class APIAssertions {
  response: APIResponse;
  logger = new Logger();

  constructor(response: APIResponse) {
    this.response = response;
  }

  async statusToBe(statusCode: number) {
    let recievedStatusCode = this.response.status();
    this.logger.loggingStatusCode(statusCode);

    expect(recievedStatusCode).toBe(statusCode);
    return this;
  }

  async bodyContains(val: string) {
    let body = JSON.stringify(await this.response.json());
    this.logger.loggingResponseBody(body);

    expect(body).toContain(val);
    return this;
  }

  async bodyPropertyContains(prop: string, val: string) {
    let body = await this.response.json();
    this.logger.loggingResponseBody(body);

    expect(body[prop]).toContain(val);
    return this;
  }

  async toHaveJsonSchema(schema: object) {
    let body = await this.response.json();
    this.logger.loggingResponseBody(body, schema);

    expectChai(body).to.be.jsonSchema(schema);
    return this;
  }
}
