import { Stack, CfnOutput } from "@aws-cdk/core";
import Triggers from "./triggers";
import Permissions from "./permissions";

interface ILambda {
  triggers: Triggers;
  lambdaPolicy: Permissions;
}

export default class Lambda implements ILambda {
  public triggers: Triggers;
  public lambdaPolicy: Permissions;

  constructor(self: Stack, id: string) {
    this.lambdaPolicy = new Permissions(self, `${id}`, {
      servicePrincipal: "lambda",
      roles: {
        dynamoFullAccess: ["CloudWatchFullAccess", "AmazonDynamoDBFullAccess"],
      },
    });

    this.triggers = new Triggers(self, `${id}-Triggers`, {
      roles: this.lambdaPolicy.roles,
    });
  }
}
