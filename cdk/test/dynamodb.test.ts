import * as cdk from "@aws-cdk/core";
import { expect as expectCDK, SynthUtils, haveResource } from "@aws-cdk/assert";

import Dynamodb from "../lib/dynamodb";
import * as mock from "./mock/dynamodb";

let app: cdk.App;
let stack: cdk.Stack;

beforeEach(() => {
  app = new cdk.App();
  stack = new cdk.Stack(app, "MyApp");
});

describe("Dynamodb", () => {
  it("Stack", () => {
    new Dynamodb(stack, "MyappStack", {
      tableName: "MyappStack",
    });

    expectCDK(stack).to(haveResource("AWS::DynamoDB::Table", mock.tableSchema));
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });
});
