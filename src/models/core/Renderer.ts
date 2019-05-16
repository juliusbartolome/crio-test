import _ from "lodash";
import Store from "../../store";

export default class Renderer {

  private store: Store;
  private canvasContext: CanvasRenderingContext2D;

  constructor(canvasContext: CanvasRenderingContext2D) {
    this.canvasContext = canvasContext;

    this.store = Store.getInstance();

    requestAnimationFrame(this.render);
  }

  private render = (time: number) => {
    if (!this.canvasContext) return;

    this.setCanvasSize();

    this.canvasContext.clearRect(0, 0, this.canvasContext.canvas.width, this.canvasContext.canvas.height);

    this.store.getElements().forEach(e => e.draw(this.canvasContext));

    requestAnimationFrame(this.render);
  }

  private setCanvasSize = () => {
    if (!this.canvasContext) return;

    const canvas = this.canvasContext.canvas;

    const rect = canvas.getBoundingClientRect();

    if (canvas.width === rect.width && canvas.height === rect.height) return;

    canvas.width = rect.width;
    canvas.height = rect.height;
  }
}
