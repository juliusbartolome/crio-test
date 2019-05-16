import IPoint from "../../interfaces/IPoint";
import IRenderProps from "../../interfaces/IRenderProps";
import Element from "./Element";
import RenderingUtils from "../../utils/rendering";

import RENDER_PROPS from "../../constants/RenderProps";

export default class Polygon extends Element {
  points: IPoint[];

  constructor(points: IPoint[]) {
    super();
    this.points = points;
  }

  draw = (context: CanvasRenderingContext2D, renderProps: IRenderProps) => {
    RenderingUtils.renderLine(context, this.points, RENDER_PROPS.POLYGON_OUTLINE);
  }
}
