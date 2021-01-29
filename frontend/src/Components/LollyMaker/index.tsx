import React, { useEffect, useState } from "react"
import Lolly from "../../Assets/lolly"
import SketchExample from "../ColorPicker"
import classes from "./index.module.css"
const defaultTop = "#D2E73B"
const defaultMiddle = "#105962"
const defaultBottom = "#65B507"

export interface LollyMakerProps {
  onColorChanged: (top: string, middle: string, bottom: string) => void
}
const Index: React.FC<LollyMakerProps> = ({ onColorChanged }) => {
  const [fillTop, setFillTop] = useState<string>(defaultTop)
  const [fillMiddle, setFillMiddle] = useState<string>(defaultMiddle)
  const [fillBottom, setFillBottom] = useState<string>(defaultBottom)
  useEffect(() => {
    onColorChanged(fillTop, fillMiddle, fillBottom)
  }, [])
  return (
    <div className={classes.root}>
      <Lolly top={fillTop} middle={fillMiddle} bottom={fillBottom} />
      <div className={classes.colorPickers}>
        <SketchExample
          color={defaultTop}
          onColorPicked={color => {
            setFillTop(color)
            onColorChanged(color, fillMiddle, fillBottom)
          }}
        />
        <SketchExample
          color={defaultMiddle}
          onColorPicked={color => {
            setFillMiddle(color)
            onColorChanged(fillTop, color, fillBottom)
          }}
        />
        <SketchExample
          color={defaultBottom}
          onColorPicked={color => {
            setFillBottom(color)
            onColorChanged(fillTop, fillMiddle, color)
          }}
        />
      </div>
    </div>
  )
}

export default Index
