import React from "react"
import ColorPicker from "../Components/ColorPicker/index"
export default {
  title: "ColorPicker",
  component: ColorPicker,
  //   argTypes: {
  //     top: { control: "color" },
  //     middle: { control: "color" },
  //     bottom: { control: "color" },
  //   },
}

const Template = args => <ColorPicker {...args} />

export const Default = Template.bind({})

Default.args = {
  color: "red",
}
