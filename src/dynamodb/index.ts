import {
  IController,
  InputAttrMap,
  IPutItemOutput,
  IQueryOutput,
} from "./iface";

export class InstanceController {
  private _db;
  private _dbClient;
  public tableName: string;

  constructor({ db, dbClient, tableName }: IController) {
    this._db = db;
    this._dbClient = dbClient;
    this.tableName = tableName;
  }

  public async createUser(item: InputAttrMap): IPutItemOutput {
    return await this._db
      .putItem({
        TableName: this.tableName,
        Item: item,
      })
      .promise();
  }

  public async findUser(userId: string): IQueryOutput {
    return await this._dbClient
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
