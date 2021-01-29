import React from "react"
import Lolly from "../../Assets/lolly"
import Header from "../../Components/Header"
import classes from "./index.module.css"
import { navigate } from "gatsby"
const Index = ({
  pageContext: {
    fillTop,
    fillMiddle,
    fillBottom,
    senderName,
    message,
    recipientName,
  },
}) => {
  return (
    <>
      <Header />
      <div className={classes.root}>
        <Lolly top={fillTop} middle={fillMiddle} bottom={fillBottom} />
        <div className={classes.letter}>
          <h4>Hello {recipientName},</h4>
          <p>{message}</p>
          <h4 style={{ alignSelf: "flex-end" }}>By {senderName}</h4>
          <button onClick={() => navigate("/")}>Create Your Own</button>
        </div>
      </div>
    </>
  )
}

export default Index
