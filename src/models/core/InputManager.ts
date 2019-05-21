import Store from "../../store";
import ElementDetectorFactory from "./elementDetector/ElementDetectorFactory";
import IElementDetector from "./elementDetector/IElementDetector";
import IPoint from "../../interfaces/IPoint";

export default class InputManager {

  private canvas: HTMLCanvasElement;
  private store: Store;
  private elementDetector: IElementDetector;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.store = Store.getInstance();
    this.elementDetector = ElementDetectorFactory.getElementDetector();

    // canvas.addEventListener("mousedown", event => this.handleMouseEvent(event));
    // canvas.addEventListener("mouseup", event => this.handleMouseEvent(event));
    // canvas.addEventListener("mousemove", event => this.handleMouseEvent(event));
    canvas.addEventListener("click", event => this.handleMouseEvent(event));
    
    // window.addEventListener("keydown", event => this.handleKeyboardEvent(event));
    // window.addEventListener("keyup", event => this.handleKeyboardEvent(event));
  }


  private handleMouseEvent = (e: MouseEvent) => {
    let coords: IPoint = { x: e.clientX, y: e.clientY };
    this.store.getNonSelectedElements().forEach(el => {
      if (this.elementDetector.isInsideElement(el, coords)) {
        this.store.selectElement(el);
      }
    });

    this.store.getSelectedElements().forEach(el => {
      if (!this.elementDetector.isInsideElement(el, coords)) {
        this.store.deselectElement(el);
      }
    });
  }

  private handleKeyboardEvent = (e: KeyboardEvent) => { }

}
