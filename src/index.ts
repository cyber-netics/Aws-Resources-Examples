import * as AWS from "aws-sdk";
import { env } from "../util/env";
import { InstanceController } from "./dynamodb";

const tableName = env.appName;
const db = new AWS.DynamoDB(env.aws);
const dbClient = new AWS.DynamoDB.DocumentClient(env.aws);
const dynamodb = new InstanceController({ db, dbClient, tableName });

const create = async () => {
  await dynamodb.createUser({
    PK: {
      S: "user:id:123",
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
      S: "Util.timeStamp()",
    },
  });
};

const Find = async () => {
  return await dynamodb.findUser("user:id:123");
};

(async () => {
  await create();
  await Find();
})();
