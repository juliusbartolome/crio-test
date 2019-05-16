import IRenderProps from "../interfaces/IRenderProps";

export default interface IDrawable {
  draw(context: CanvasRenderingContext2D, renderProps?: IRenderProps): void;
}
