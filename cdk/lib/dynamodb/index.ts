import * as cdk from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import { IProps, ITable, IDynamodb } from "./iface";

export default class Dynamodb implements IDynamodb {
  public readonly table: ITable;

  constructor(self: cdk.Stack, id: string, props: IProps) {
    // Dynamodb - create table & global Secondary index
    this.table = new dynamodb.Table(self, `${id}-Table`, {
      tableName: props.tableName,
      partitionKey: {
        name: "PK",
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: {
        name: "SK",
        type: dynamodb.AttributeType.STRING,
      },
    });

    this.table.addGlobalSecondaryIndex({
      indexName: "GSI1",
      partitionKey: {
        name: "SK",
        type: dynamodb.AttributeType.STRING,
      },
    });
  }
}
