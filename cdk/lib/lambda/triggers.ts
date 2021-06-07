import { Stack } from "@aws-cdk/core";
import { Function, Code, Runtime, IFunction } from "@aws-cdk/aws-lambda";

class Assets {
  public static preSignUp = Assets.getAsset("preSignUp");
  public static postAuth = Assets.getAsset("postAuth");

  public static getAsset(dir: string): Code {
    return Code.fromAsset(`../dist/src/lambda/${dir}`);
  }
}

export default class Lambda {
  public preSignUp: IFunction;
  public postAuth: IFunction;

  constructor(self: Stack, id: string) {
    this.preSignUp = new Function(self, `${id}-preSignUp`, {
      code: Assets.preSignUp,
      handler: "preSignUp.handler",
      runtime: Runtime.NODEJS_12_X,
    });

    this.postAuth = new Function(self, `${id}-postAuth`, {
      code: Assets.postAuth,
      handler: "index.handler",
      runtime: Runtime.NODEJS_12_X,
    });
  }
}
