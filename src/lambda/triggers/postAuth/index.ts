import { Handler, Context, Callback, APIGatewayProxyEvent } from "aws-lambda";

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback
): Promise<void> => {
  console.log("---event", event);
  console.log("---context", context);

  const response = {
    statusCode: 200,
    body: { success: "ok" },
  };

  callback(null, response);
};
