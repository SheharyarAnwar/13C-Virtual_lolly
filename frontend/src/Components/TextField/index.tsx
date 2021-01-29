import React from "react"
import { useField } from "formik"
import classes from "./index.module.css"
export interface TextFieldProps {
  name: string
  placeholder?: string
}
const Index: React.FC<TextFieldProps> = ({ name, placeholder }) => {
  const [field, meta] = useField({ type: "text", name })
  return (
    <>
      <div className={classes.root}>
        {name === "message" ? (
          <textarea cols={38} rows={5} {...field} placeholder="Message" />
        ) : (
          <input {...field} placeholder={placeholder} />
        )}
        <h5 style={{ color: "#f77676", marginTop: "5px" }}>
          {meta.touched && meta.error ? meta.error : " "}
        </h5>
      </div>
    </>
  )
}

export default Index
