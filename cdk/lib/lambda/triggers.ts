import { Stack } from "@aws-cdk/core";
import { Role } from "@aws-cdk/aws-iam";
import { Function, Code, Runtime, IFunction } from "@aws-cdk/aws-lambda";

interface ILambdaTriggers {
  readonly preSignUp: IFunction;
  readonly postAuth: IFunction;
}

interface IProps {
  readonly roles: {
    [key: string]: Role;
  };
}

class Assets {
  static readonly preSignUp = Assets.getAsset("preSignUp");
  static readonly postAuth = Assets.getAsset("postAuth");

  static getAsset(dir: string): Code {
    return Code.fromAsset(`../dist/src/lambda/triggers/${dir}`);
  }
}

export default class LambdaTriggers implements ILambdaTriggers {
  public readonly preSignUp: IFunction;
  public readonly postAuth: IFunction;

  constructor(self: Stack, id: string, props: IProps) {
    this.preSignUp = new Function(self, `${id}-preSignUp`, {
      code: Assets.preSignUp,
      handler: "preSignUp.handler",
      runtime: Runtime.NODEJS_12_X,
      role: props.roles.dynamoFullAccess,
    });

    this.postAuth = new Function(self, `${id}-postAuth`, {
      code: Assets.postAuth,
      handler: "postAuth.handler",
      runtime: Runtime.NODEJS_12_X,
      role: props.roles.dynamoFullAccess,
    });
  }
}
