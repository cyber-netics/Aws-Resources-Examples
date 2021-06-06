import { Construct, Stack, StackProps } from "@aws-cdk/core";
import Dynamodb, { IDynamodb } from "./Dynamodb";

export class CdkStack extends Stack {
  public readonly dynamodb: IDynamodb;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.dynamodb = new Dynamodb(this, `${id}-Dynamodb`, {
      tableName: id,
    });
  }
}
