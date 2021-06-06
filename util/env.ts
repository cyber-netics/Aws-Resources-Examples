import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

interface IEnv {
  appName: string;
  region: string;
}

export const env: IEnv = {
  appName: process.env.APP_NAME || "",
  region: process.env.AWS_DEFAULT_REGION || "",
};