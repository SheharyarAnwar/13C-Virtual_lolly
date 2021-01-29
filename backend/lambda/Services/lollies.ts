import { AppSyncResolverEvent, Context } from "aws-lambda";
import { DynamoDB } from "aws-sdk";
import { AddLollyParams } from "../../Interfaces";
// import { v4 } from "uuid";
class Lollies {
  documentClient: DynamoDB.DocumentClient;
  tableName: string;
  constructor(tableName: string) {
    this.documentClient = new DynamoDB.DocumentClient();
    this.tableName = tableName;
  }
  createLolly = async (
    event: AppSyncResolverEvent<AddLollyParams>,
    context: Context
  ) => {
    const res = await this.documentClient
      .update({
        TableName: this.tableName,
        Key: { docId: context.awsRequestId },
        UpdateExpression:
          "SET fillBottom = :fillBottom, fillMiddle = :fillMiddle, fillTop = :fillTop, message= :message, recipientName= :recipientName, senderName= :senderName",
        ExpressionAttributeValues: {
          ":fillBottom": event.arguments.fillBottom,
          ":fillMiddle": event.arguments.fillMiddle,
          ":fillTop": event.arguments.fillTop,
          ":message": event.arguments.message,
          ":recipientName": event.arguments.recipientName,
          ":senderName": event.arguments.senderName,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return res;
  };
  lollies = async (event: AppSyncResolverEvent<any>, context: Context) => {
    const res = await this.documentClient
      .scan({
        TableName: this.tableName,
      })
      .promise();
    return res;
  };
}

export default Lollies;
