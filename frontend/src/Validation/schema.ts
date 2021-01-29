import * as Yup from "yup"
export const yupValidationSchema = Yup.object({
  recipientName: Yup.string().required("Required"),
  message: Yup.string()
  .required("Required"),
  senderName: Yup.string().required("Required"),
})
