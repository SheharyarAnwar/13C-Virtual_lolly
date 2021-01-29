import React from "react"
import Lolly from "../Assets/lolly"
export default {
  title: "Lolly",
  component: Lolly,
  argTypes: {
    top: { control: "color" },
    middle: { control: "color" },
    bottom: { control: "color" },
  },
}

const Template = args => <Lolly {...args} />

export const Default = Template.bind({})

Default.args = {
  top: "#D2E73B",
  middle: "#105962",
  bottom: "#65B507",
}
