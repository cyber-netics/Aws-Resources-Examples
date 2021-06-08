import * as cdk from "@aws-cdk/core";
import { expect as expectCDK, SynthUtils, haveResource } from "@aws-cdk/assert";

import Lambda from "../lib/lambda";
import * as mock from "./mock/lambda";

let app: cdk.App;
let stack: cdk.Stack;

beforeEach(() => {
  app = new cdk.App();
  stack = new cdk.Stack(app, "MyApp");
});

describe("Lambda", () => {
  it("Triggers", () => {
    const lambda = new Lambda(stack, "MyappStack");

    expectCDK(lambda.triggers.postAuth.stack).to(
      haveResource("AWS::Lambda::Function", {
        Role: {
          "Fn::GetAtt": ["MyappStacklambdadynamoFullAccess2861FCE4", "Arn"],
        },
        Handler: "postAuth.handler",
        Runtime: "nodejs12.x",
      })
    );

    expectCDK(lambda.triggers.preSignUp.stack).to(
      haveResource("AWS::Lambda::Function", {
        Role: {
          "Fn::GetAtt": ["MyappStacklambdadynamoFullAccess2861FCE4", "Arn"],
        },
        Handler: "preSignUp.handler",
        Runtime: "nodejs12.x",
      })
    );

    expectCDK(lambda.triggers.postAuth.stack).to(
      haveResource("AWS::IAM::Role", mock.iamRoleLambda)
    );

    expectCDK(lambda.triggers.preSignUp.stack).to(
      haveResource("AWS::IAM::Role", mock.iamRoleLambda)
    );

    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });
});
