import { Construct, Stack, StackProps } from "@aws-cdk/core";
import { env } from "../../util/env";

import Dynamodb from "./dynamodb";
import Lambda from "./lambda";

export class CdkStack extends Stack {
  public readonly dynamodb: Dynamodb;
  public readonly lambda: Lambda;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.dynamodb = new Dynamodb(this, id, {
      tableName: id,
    });

    this.lambda = new Lambda(this, id, {
      env: {
        ...env.aws,
        tableName: env.appName,
      },
    });
  }
}
