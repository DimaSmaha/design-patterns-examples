import { Page } from "@playwright/test";
import { addUserDTO, IAddUserDTO } from "../dtos/users.dto";
import { APIAssertions } from "../helpers/assertions";
import { Logger } from "../helpers/logger";

export class UsersController {
  page: Page;
  assert: APIAssertions;
  logger = new Logger();
  constructor(page: Page) {
    this.page = page;
  }

  async getListOfUsers(page: string) {
    let requestEndpoint = `/api/users?page=${page}`;
    this.logger.loggingRequest(requestEndpoint);

    let resp = await this.page.request.get(requestEndpoint);
    this.assert = new APIAssertions(resp);
    return this;
  }

  async getSingleUser(userId: string) {
    let requestEndpoint = `/api/users/${userId}`;
    this.logger.loggingRequest(requestEndpoint);

    let resp = await this.page.request.get(requestEndpoint);
    this.assert = new APIAssertions(resp);
    return this;
  }

  async createSingleUser(data?: IAddUserDTO) {
    let requestEndpoint = `/api/users`;
    let body = {
      data: data ? data : addUserDTO,
    };
    this.logger.loggingRequest(requestEndpoint);
    this.logger.loggingRequestBody(body);

    let resp = await this.page.request.post(requestEndpoint, body);
    this.assert = new APIAssertions(resp);
    return this;
  }
}
