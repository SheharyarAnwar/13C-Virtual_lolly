import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as appsync from "@aws-cdk/aws-appsync";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
export class BackendStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaLayer = new lambda.LayerVersion(this, "Lolly-Lambda-Layer", {
      code: lambda.Code.fromAsset("lambda-layers"),
    });

    const mainHandler = new lambda.Function(this, "Virtual-Lolly-Sherry", {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset("lambda"),
      layers: [lambdaLayer],
    });
    const graphEndPoint = new appsync.GraphqlApi(
      this,
      "GraphEndPointSheharyar",
      {
        name: "Virtual-Lolly-sheharyar",
        schema: appsync.Schema.fromAsset("schema/index.gql"),
        authorizationConfig: {
          defaultAuthorization: {
            authorizationType: appsync.AuthorizationType.API_KEY,
          },
        },
        xrayEnabled: true,
      }
    );
    const table = new dynamodb.Table(this, "TableLolliesSheharyar", {
      tableName: "lollies",
      partitionKey: { name: "docId", type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    table.grantFullAccess(mainHandler);
    mainHandler.addEnvironment("TABLE", table.tableName);
    const dataSource = graphEndPoint.addLambdaDataSource(
      "LolliesDataSourceSheharyar",
      mainHandler
    );
    dataSource.createResolver({
      fieldName: "createLolly",
      typeName: "Mutation",
    });
    dataSource.createResolver({
      fieldName: "lollies",
      typeName: "Query",
    });
  }
}
