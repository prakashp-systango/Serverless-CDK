import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda function
    const helloLambda = new lambda.Function(this, 'HelloLambda', {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset('../lambda-function/dist/src'),
      handler: 'index.handler',
    });

    // API Gateway for Lambda
    const api = new apigateway.LambdaRestApi(this, 'HelloApi', {
      handler: helloLambda,
      proxy: false,
    });

    const hello = api.root.addResource('hello');
    hello.addMethod('GET');
  }
}
