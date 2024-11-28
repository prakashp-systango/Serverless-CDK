import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const name = event.queryStringParameters?.name || "World";
  const response = {
    statusCode: 200,
    body: `Hello, ${name}`,
  };
  return response;
};
