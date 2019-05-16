import React, { Component, createRef } from "react";
import Renderer from "../../models/core/Renderer";
import InputManager from "../../models/core/InputManager";

import "./canvas.css";

export default class Canvas extends Component {

  private canvasRef = createRef<HTMLCanvasElement>();
  private renderer?: Renderer;
  private inputManager?: InputManager;

  componentDidMount() {
    const canvas = this.canvasRef.current;
    if (canvas) {
      canvas.style.width = '100%';
      canvas.style.height = '100%';

      const canvasContext = canvas.getContext("2d");
      if (canvasContext) {
        this.renderer = new Renderer(canvasContext);
        this.inputManager = new InputManager(canvas);
      }
    }
  }

  render() {
    return (
      <div className="canvas">
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}
