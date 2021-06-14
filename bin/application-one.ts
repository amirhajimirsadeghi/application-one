#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { ApplicationOnePipelineStack } from '../lib/application-one-pipeline-stack';

const app = new App();

new ApplicationOnePipelineStack(app, 'ApplicationOnePipelineStack', {
  env: { account: '062595127895', region: 'us-west-2' },
});

app.synth();