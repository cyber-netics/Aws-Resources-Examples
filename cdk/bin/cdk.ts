#!/usr/bin/env node

import * as cdk from "@aws-cdk/core";
import { CdkStack } from "../lib";
import { env } from "../../util";

const app = new cdk.App();
new CdkStack(app, env.appName, {
  env: {
    region: env.region,
  },
});
