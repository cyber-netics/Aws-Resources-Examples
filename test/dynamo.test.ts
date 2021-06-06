const AWS = require("aws-sdk");
const { InstanceController } = require("../src/dynamodb");
const {
  tableSchema,
  userDataSchema,
  userQueryData,
  userId,
} = require("./mock/dbMock");

export default class DynamoDb extends InstanceController {
  protected db: any;
  public dbClient: any;

  constructor({ tableName }: any) {
    super();
    this.initialize();
    this.tableName = tableName;
  }

  initialize() {
    AWS.config.update({ region: "us-east-2" });
    AWS.config.update({ endpoint: "http://localhost:8000" });
    this.db = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
    this.dbClient = new AWS.DynamoDB.DocumentClient({
      apiVersion: "2012-08-10",
    });
  }

  async createTable() {
    await this.db
      .createTable({
        TableName: this.tableName,
        ...tableSchema,
      })
      .promise();
  }

  async deleteTable() {
    await this.db
      .deleteTable({
        TableName: this.tableName,
      })
      .promise();
  }
}

const dynamodb = new DynamoDb({
  tableName: "TABLE_NAME",
});

beforeAll(async () => {
  await dynamodb.createTable();
});

afterAll(async () => {
  await dynamodb.deleteTable();
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
