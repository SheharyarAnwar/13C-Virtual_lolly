import { useMutation } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { CREATE_LOLLY } from "../Apollo/queries"
import Form from "../Components/Form"
import Header from "../Components/Header"
import LollyMaker from "../Components/LollyMaker"
import classes from "./index.module.css"

export interface LollyData {
  fillTop: string
  fillMiddle: string
  fillBottom: string
  recipientName: string
  message: string
  senderName: string
}
const Index = () => {
  const [lollyData, setLollyData] = useState<LollyData>()
  const [buildError, setBuilError] = useState<boolean>(false)
  const [buildLoading, setBuildLoading] = useState<boolean>(false)
  const [onFormSubmitted, setOnFormSubmitted] = useState<boolean>(false)
  const onColorChangedHandler = (
    fillTop: string,
    fillMiddle: string,
    fillBottom: string
  ) => {
    setLollyData(prev => {
      return { ...prev, fillTop, fillMiddle, fillBottom }
    })
  }
  const onFormSubmittedHandler = (
    recipientName: string,
    message: string,
    senderName: string
  ) => {
    setLollyData(prev => {
      return { ...prev, recipientName, message, senderName }
    })
    setOnFormSubmitted(true)
  }
  const [addLolly, { data, loading, error }] = useMutation(CREATE_LOLLY)
  useEffect(() => {
    if (onFormSubmitted) {
      addLolly({ variables: { ...lollyData } })
    } else return
  }, [onFormSubmitted])
  useEffect(() => {
    console.log(data)
  }, [data])
  const shareLink =
    typeof window !== "undefined" &&
    `${window.origin}/${data?.createLolly?.lollyPath}`
  return (
    <>
      <Header />
      <div className={classes.root}>
        <div className={classes.container}>
          <LollyMaker onColorChanged={onColorChangedHandler} />
          <div className={classes.formContainer}>
            {loading ? (
              <div className={classes.loader} />
            ) : (
              <Form onFormSubmit={onFormSubmittedHandler} />
            )}
          </div>
        </div>
      </div>
      {error && (
        <div className={classes.log}>
          <h4>{error?.message}</h4>
        </div>
      )}
      {!buildLoading && data && (
        <div className={classes.log}>
          <p>Link : {shareLink}</p>
          <button
            onClick={() => navigator.clipboard.writeText(shareLink)}
            style={{ marginTop: "10px" }}
          >
            Copy Link
          </button>
        </div>
      )}
    </>
  )
}

export default Index
