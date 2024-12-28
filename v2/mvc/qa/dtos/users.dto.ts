export interface IAddUserDTO {
  name: string;
  job: string;
}

export const addUserDTO = {
  name: "morpheus",
  job: "leader",
};

export const getSingleUserSchema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    data: {
      type: "object",
      properties: {
        id: {
          type: "integer",
        },
        email: {
          type: "string",
        },
        first_name: {
          type: "string",
        },
        last_name: {
          type: "string",
        },
        avatar: {
          type: "string",
        },
      },
      required: ["id", "email", "first_name", "last_name", "avatar"],
    },
    support: {
      type: "object",
      properties: {
        url: {
          type: "string",
        },
        text: {
          type: "string",
        },
      },
      required: ["url", "text"],
    },
  },
  required: ["data", "support"],
};

export const createSingleUserSchema = {
  $schema: "http://json-schema.org/draft-04/schema#",
  type: "object",
  properties: {
    name: {
      type: "string",
    },
    job: {
      type: "string",
    },
    id: {
      type: "string",
    },
    createdAt: {
      type: "string",
    },
  },
  required: ["name", "job", "id", "createdAt"],
};
