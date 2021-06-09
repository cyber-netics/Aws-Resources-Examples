import { Stack } from "@aws-cdk/core";
import Triggers from "./triggers";
import Permissions from "../permission";

interface ILambda {
  triggers: Triggers;
  lambdaPolicy: Permissions;
}

interface IProps {
  env: {
    [key: string]: string;
  };
}

export default class Lambda implements ILambda {
  public triggers: Triggers;
  public lambdaPolicy: Permissions;

  constructor(self: Stack, id: string, props: IProps) {
    this.lambdaPolicy = new Permissions(self, `${id}`, {
      servicePrincipal: "lambda",
      roles: {
        dynamoFullAccess: ["CloudWatchFullAccess", "AmazonDynamoDBFullAccess"],
      },
    });

    this.triggers = new Triggers(self, `${id}-Triggers`, {
      roles: this.lambdaPolicy.roles,
      env: props.env,
    });
  }
}
