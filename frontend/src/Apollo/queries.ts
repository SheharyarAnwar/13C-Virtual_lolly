import { gql } from "@apollo/client"

export const GET_LOLLIES = gql`
  query {
    lollies {
      recipientName
      message
      senderName
      fillTop
      fillMiddle
      fillBottom
      lollyPath
    }
  }
`
export const CREATE_LOLLY = gql`
  mutation(
    $recipientName: String!,
    $message: String!,
    $senderName: String!,
    $fillTop: String!,
    $fillMiddle: String!,
    $fillBottom: String!
  ) {
    createLolly(
      recipientName: $recipientName,
      message: $message,
      senderName: $senderName,
      fillTop: $fillTop,
      fillMiddle: $fillMiddle,
      fillBottom: $fillBottom
    ) {
      recipientName
      message
      senderName
      fillTop
      fillMiddle
      fillBottom
      lollyPath
    }
  }
`
