import Store from "../../store";

export default class InputManager {

  private canvas: HTMLCanvasElement;
  private store: Store;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.store = Store.getInstance();

    canvas.addEventListener("mousedown", event => this.handleMouseEvent(event));
    canvas.addEventListener("mouseup", event => this.handleMouseEvent(event));
    canvas.addEventListener("mousemove", event => this.handleMouseEvent(event));

    window.addEventListener("keydown", event => this.handleKeyboardEvent(event));
    window.addEventListener("keyup", event => this.handleKeyboardEvent(event));
  }


  private handleMouseEvent = (e: MouseEvent) => { }

  private handleKeyboardEvent = (e: KeyboardEvent) => { }

}
