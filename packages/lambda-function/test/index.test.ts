import { handler } from "../src/index";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

const createEvent = (name?: string): APIGatewayProxyEvent => {
  return {
    queryStringParameters: name ? { name } : null,
  } as any;
};

test("Returns 'Hello, John' when name is provided", async () => {
  const event = createEvent("John");

  const result = await handler(event);
  expect(result.body).toBe("Hello, John");
});

test("Returns 'Hello, World' when name is not provided", async () => {
  const event = createEvent();

  const result = await handler(event);
  expect(result.body).toBe("Hello, World");
});
