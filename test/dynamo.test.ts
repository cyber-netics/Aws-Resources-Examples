import * as AWS from "aws-sdk";
import { InstanceController } from "../src/dynamodb";
import {
  tableSchema,
  userDataSchema,
  userQueryData,
  userId,
} from "./mock/dynamo";

// Vars
const endpoint = "http://localhost:8000";
const tableName = "MyTableName";
const region = "us-east-2";

// AWS Dynamo sdk
AWS.config.update({ region });
const db = new AWS.DynamoDB({ endpoint });
const dbClient = new AWS.DynamoDB.DocumentClient({ endpoint });

// Custom Dynamo controller
const dynamodb = new InstanceController({
  db,
  dbClient,
  tableName,
});

// Custom db handlers
const createTable = async () => {
  await db
    .createTable({
      TableName: tableName,
      ...tableSchema,
    })
    .promise();
};

const deleteTable = async () => {
  await db
    .deleteTable({
      TableName: tableName,
    })
    .promise();
};

// Test
beforeAll(async () => {
  await createTable();
});

afterAll(async () => {
  await deleteTable();
});

describe("DynamoDB Tests", () => {
  it("Create User", async () => {
    const user = await dynamodb.createUser(userDataSchema);
    expect(user).toMatchObject({});
  });

  it("Find User", async () => {
    const user = await dynamodb.findUser(userId);
    expect(user).toMatchObject(userQueryData);
  });
});
