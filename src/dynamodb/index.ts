import * as AWS from "aws-sdk";
import { ItemProps, IUserData } from "./iface";

export class InstanceController {
  protected readonly db: any;
  protected readonly dbClient: any;
  public readonly tableName: string;

  public async createUser(item: ItemProps): Promise<void> {
    return await this.db
      .putItem({
        TableName: this.tableName,
        Item: item,
      })
      .promise();
  }

  public async findUser(userId: string): Promise<IUserData> {
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

export default class DynamoInstance extends InstanceController {
  protected readonly db: any;
  protected readonly dbClient: any;
  public readonly tableName: string;

  constructor({ aws, tableName }: any) {
    super();

    this.tableName = tableName;
    this.db = new AWS.DynamoDB(aws);
    this.dbClient = new AWS.DynamoDB.DocumentClient(aws);
  }
}
