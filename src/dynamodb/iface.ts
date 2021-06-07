import * as AWS from "aws-sdk";

export interface ItemProps {
  PK: {
    S: string;
  };
  SK: {
    S: string;
  };
  FullName: {
    S: string;
  };
  Email: {
    S: string;
  };
  Created_At: {
    S: string;
  };
}

export interface IController {
  db: AWS.DynamoDB;
  dbClient: AWS.DynamoDB.DocumentClient;
  tableName: string;
}

export type InputAttrMap = AWS.DynamoDB.PutItemInputAttributeMap;
export type IQueryOutput = Promise<AWS.DynamoDB.QueryOutput | AWS.AWSError>;
export type IPutItemOutput = Promise<AWS.DynamoDB.PutItemOutput | AWS.AWSError>;
