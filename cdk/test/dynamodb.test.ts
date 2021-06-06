import { expect as expectCDK, SynthUtils, haveResource } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";

import Dynamodb from "../lib/dynamodb";
import * as mock from "./mock/dynamodb";

let app: cdk.App;
let stack: cdk.Stack;

beforeEach(() => {
  app = new cdk.App();
  stack = new cdk.Stack(app, "MyApp");
});

describe("Dynamodb", () => {
  test("Resources", () => {
    new Dynamodb(stack, "MyappStack", {
      tableName: "MyappStack",
    });

    expectCDK(stack).to(haveResource("AWS::DynamoDB::Table", mock.tableSchema));
    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
  });
});
