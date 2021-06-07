import * as dotenv from "dotenv";
dotenv.config({ path: "../.env" });

interface IEnv {
  appName: string;
  aws: {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
  };
}

export const env: IEnv = {
  appName: process.env.APP_NAME || "",
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
    region: process.env.AWS_DEFAULT_REGION || "",
  },
};
