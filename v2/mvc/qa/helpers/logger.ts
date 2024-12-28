export class Logger {
  loggingRequest(req: string) {
    console.log("-----------------------");
    console.log("Sending Request " + req);
    console.log("-----------------------");
  }

  loggingRequestBody(body: object) {
    console.log("-----------------------");
    console.log("Sending Request Body" + JSON.stringify(body));
    console.log("-----------------------");
  }

  loggingStatusCode(statusCode: number) {
    console.log("-----------------------");
    console.log("Verifying status code");
    console.log("Recieved status code " + statusCode);
    console.log("-----------------------");
  }

  loggingResponseBody(body: string, schema?: object) {
    console.log("-----------------------");
    console.log("Verifying response body");
    console.log("Recieved body " + JSON.stringify(body));
    if (schema) {
      console.log("With schema " + JSON.stringify(schema));
    }
    console.log("-----------------------");
  }
}
