import React from "react"
import { Formik, Form } from "formik"
import { yupValidationSchema } from "./../../Validation/schema"
import TextField from "../TextField"
import classes from "./index.module.css"
interface FormProps {
  onFormSubmit: (
    recipientName: string,
    message: string,
    senderName: string
  ) => void
}
const Index: React.FC<FormProps> = ({ onFormSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{ recipientName: "", message: "", senderName: "" }}
        initialErrors={{ message: "Required" }}
        validationSchema={yupValidationSchema}
        onSubmit={values => {
          const { recipientName, message, senderName } = values
          onFormSubmit(recipientName, message, senderName)
        }}
      >
        <Form className={classes.form}>
          <TextField name="recipientName" placeholder="Recipient Name" />
          <TextField name="message" />
          <TextField name="senderName" placeholder={"Sender Name"} />
          <button type="submit">Create Lolly</button>
        </Form>
      </Formik>
    </>
  )
}

export default Index
