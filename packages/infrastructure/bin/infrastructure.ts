#!/usr/bin/env node
import 'dotenv/config';
import * as cdk from 'aws-cdk-lib';
import { InfrastructureStack } from '../lib/infrastructure-stack';

const app = new cdk.App();
new InfrastructureStack(app, 'InfrastructureStack', {
  env: {
    account: process.env.AWS_ACCESS_KEY_ID,
    region: process.env.AWS_REGION,
  },
});
