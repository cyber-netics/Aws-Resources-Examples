import { Construct, Stack, StackProps } from "@aws-cdk/core";
import Dynamodb from "../lib/dynamodb";

export class CdkStack extends Stack {
  public readonly dynamodb: Dynamodb;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.dynamodb = new Dynamodb(this, `${id}-Dynamodb`, {
      tableName: id,
    });
  }
}
