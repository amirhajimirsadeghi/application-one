import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { ApplicationOneStack} from './application-one-stack'

/**
 * Deployable unit of web service app
 */
export class ApplicationOneQAStage extends Stage {
  public readonly urlOutput: CfnOutput;
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new ApplicationOneStack(this, 'WebService');
    
    // Expose CdkpipelinesDemoStack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}