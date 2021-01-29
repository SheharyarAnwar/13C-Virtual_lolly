import React from "react"
import reactCSS from "reactcss"
import { SketchPicker } from "react-color"

export interface SketchProps {
  color: string
  onColorPicked: (color: string) => void
}
class SketchExample extends React.Component<SketchProps> {
  state = {
    displayColorPicker: false,
    color: this.props.color,
  }
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }
  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }
  handleChange = color => {
    this.setState({ color: color.hex })
    this.props.onColorPicked(color.hex)
  }

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "50px",
          height: "50px",
          cursor: "pointer",
          borderRadius: "50%",
          background: this.state.color,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    })

    return (
      <div>
        <div onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleChange}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

export default SketchExample
