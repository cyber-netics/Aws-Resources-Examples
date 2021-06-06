export const tableSchema = {
  AttributeDefinitions: [
    {
      AttributeName: "PK",
      AttributeType: "S",
    },
    {
      AttributeName: "SK",
      AttributeType: "S",
    },
  ],
  KeySchema: [
    {
      AttributeName: "PK",
      KeyType: "HASH",
    },
    {
      AttributeName: "SK",
      KeyType: "RANGE",
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  StreamSpecification: {
    StreamEnabled: false,
  },
};

export const userId = "user:id:1234";
export const userDataSchema = {
  PK: {
    S: userId,
  },
  SK: {
    S: "John Doe",
  },
  FullName: {
    S: "John Doe",
  },
  Email: {
    S: "JohnDoe@gmai.com",
  },
  Created_At: {
    S: "1/1/2021",
  },
};

export const userQueryData = {
  Items: [
    {
      PK: "user:id:1234",
      SK: "John Doe",
      Email: "JohnDoe@gmai.com",
      FullName: "John Doe",
      Created_At: "1/1/2021",
    },
  ],
  Count: 1,
  ScannedCount: 1,
};
