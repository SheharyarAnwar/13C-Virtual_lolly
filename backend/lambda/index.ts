import { ContextProvider } from "@aws-cdk/core";
import { Context, AppSyncResolverEvent } from "aws-lambda";
import { LollyFieldName } from "../Interfaces";
import Lolly from "./Services/lollies";
export async function handler(
  event: AppSyncResolverEvent<any>,
  context: Context
): Promise<any> {
  const fieldName = event.info.fieldName as LollyFieldName;
  const lollyref = new Lolly(process.env.TABLE || "");
  switch (fieldName) {
    case "createLolly":
      const addLollyResults = await lollyref.createLolly(event, context);
      return addLollyResults.Attributes;
    case "lollies":
      const getLollies = await lollyref.lollies(event, context);
      return getLollies.Items;
    default:
      throw new Error("Something went wrong with supplied method");
  }
}
