import { API_KEY, BASE_DB_URL } from "../connection/connectToDB";

export const makeRequestToDB = (
  table: string,
  method: string,
  params?: string
) => {
  let requestUrl = BASE_DB_URL + "/rest" + table;
  console.log(requestUrl);

  if (params) {
    requestUrl += params;
    console.log(requestUrl);
  }

  return fetch(requestUrl, {
    method,
    headers: {
      "x-apikey": API_KEY,
      "cache-control": "no-cache",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((body) => {
      console.log(body);
      return body;
    });
};

export const makeBodyRequestToDB = (
  table: string,
  method: string,
  body: any,
  params?: string
) => {
  let requestUrl = BASE_DB_URL + "/rest" + table;
  console.log(requestUrl);

  if (params) {
    requestUrl += params;
  }

  return fetch(requestUrl, {
    method,
    headers: {
      "x-apikey": API_KEY,
      "cache-control": "no-cache",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((body) => {
      console.log(body);
      return JSON.parse(JSON.stringify(body));
    });
};
