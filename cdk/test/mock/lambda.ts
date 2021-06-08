export const iamRoleLambda = {
  AssumeRolePolicyDocument: {
    Statement: [
      {
        Action: "sts:AssumeRole",
        Effect: "Allow",
        Principal: { Service: "lambda.amazonaws.com" },
      },
    ],
    Version: "2012-10-17",
  },
  ManagedPolicyArns: [
    {
      "Fn::Join": [
        "",
        [
          "arn:",
          { Ref: "AWS::Partition" },
          ":iam::aws:policy/CloudWatchFullAccess",
        ],
      ],
    },
    {
      "Fn::Join": [
        "",
        [
          "arn:",
          { Ref: "AWS::Partition" },
          ":iam::aws:policy/AmazonDynamoDBFullAccess",
        ],
      ],
    },
  ],
};
