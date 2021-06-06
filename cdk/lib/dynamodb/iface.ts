import * as dynamodb from "@aws-cdk/aws-dynamodb";

export interface IProps {
  tableName?: string;
}

export interface ITable {
  tableName: string;
  addGlobalSecondaryIndex: (props: dynamodb.GlobalSecondaryIndexProps) => void;
}

export interface IDynamodb {
  table?: ITable;
}
