import {
  IController,
  InputAttrMap,
  IPutItemOutput,
  IQueryOutput,
} from "./iface";

export class InstanceController {
  private db;
  private dbClient;
  public tableName: string;

  constructor({ db, dbClient, tableName }: IController) {
    this.db = db;
    this.dbClient = dbClient;
    this.tableName = tableName;
  }

  public async createUser(item: InputAttrMap): IPutItemOutput {
    return await this.db
      .putItem({
        TableName: this.tableName,
        Item: item,
      })
      .promise();
  }

  public async findUser(userId: string): IQueryOutput {
    return await this.dbClient
      .query({
        TableName: this.tableName,
        KeyConditionExpression: "PK = :pk",
        ExpressionAttributeValues: {
          ":pk": userId,
        },
      })
      .promise();
  }
}
