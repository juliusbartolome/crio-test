import IRenderProps from "../interfaces/IRenderProps";
import IPoint from "../interfaces/IPoint";
import IRectangle from "../interfaces/IRectangle";
import IArc from "../interfaces/IArc";

export default class RenderingUtils {
  /**
   * Render line.
   *
   * @param {CanvasRenderingContext2D} context
   * @param {IPoint[]} points
   * @param {IRenderProps} props
   */
  static renderLine(context: CanvasRenderingContext2D, points: IPoint[], props: IRenderProps): void {
    RenderingUtils.start(context, props);
    RenderingUtils.addLine(context, points);
    RenderingUtils.render(context, props);
  }

  /**
   * Render rectangle.
   *
   * @param {CanvasRenderingContext2D} context
   * @param {IRectangle} rectangle
   * @param {IRenderProps} props
   */
  static renderRectangle(context: CanvasRenderingContext2D, rectangle: IRectangle, props: IRenderProps): void {
    RenderingUtils.start(context, props);
    RenderingUtils.addRectangle(context, rectangle);
    RenderingUtils.render(context, props);
  }

  /**
   * Render arc.
   *
   * @param {CanvasRenderingContext2D} context
   * @param {IArc} arc
   * @param {IRenderProps} props
   */
  static renderArc(context: CanvasRenderingContext2D, arc: IArc, props: IRenderProps): void {
    RenderingUtils.start(context, props);
    RenderingUtils.addArc(context, arc);
    RenderingUtils.render(context, props);
  }

  /**
   * Add line.
   *
   * @param {CanvasRenderingContext2D} context
   * @param {IPoint[]} points
   */
  static addLine(context: CanvasRenderingContext2D, points: IPoint[]): void {
    if (points.length < 2) return;

    const position: IPoint = RenderingUtils.getPosition(points[0]);
    context.moveTo(position.x, position.y);

    for (let i = 1; i < points.length; ++i) {
      const point = RenderingUtils.getPosition(points[i]);
      context.lineTo(point.x, point.y);
    }
  }

  /**
   * Add rectangle.
   *
   * @param {CanvasRenderingContext2D} context
   * @param {IRectangle} rectangle
   */
  static addRectangle(context: CanvasRenderingContext2D, rectangle: IRectangle): void {
    const position: IPoint = RenderingUtils.getPosition(rectangle.position);
    // fix rendering
    const width = Math.round(rectangle.size.width);
    const height = Math.round(rectangle.size.height);

    context.rect(position.x, position.y, width, height);
  }

  /**
   * Add arc.
   *
   * @param {CanvasRenderingContext2D} context
   * @param {IArc} arc
   */
  static addArc(context: CanvasRenderingContext2D, arc: IArc): void {
    const position: IPoint = RenderingUtils.getPosition(arc.position);
    // default start/end
    // if neither start nor end are set circle will be drawn
    const start = arc.start || 0;
    const end = arc.end || 2 * Math.PI;

    context.arc(position.x, position.y, arc.radius, start, end, arc.counterclockwise);
  }

  /**
   * Setup canvas props.
   *
   * @param {CanvasRenderingContext2D} context
   * @param {IRenderProps} props
   */
  static start(context: CanvasRenderingContext2D, props: IRenderProps): void {
    // save styles for reset
    context.save();

    if (props.color) {
      context.fillStyle = props.color;
    }

    if (props.border) {
      context.strokeStyle = props.border.color;
      context.lineWidth = props.border.width;
    }

    context.beginPath();
  }

  /**
   * Render object on canvas.
   *
   * @param {CanvasRenderingContext2D} context
   * @param {IRenderProps} props
   */
  static render(context: CanvasRenderingContext2D, props: IRenderProps): void {
    if (props.close) context.closePath();

    if (props.color) context.fill();
    if (props.border) context.stroke();

    // reset styles
    context.restore();
  }

  /**
   * Fix canvas rendering.
   * Source: {@link https://stackoverflow.com/q/13879322|Canvas line rendering}
   *
   * @private
   * @param {IPoint} position
   * @returns {IPoint}
   */
  private static getPosition(position: IPoint): IPoint {
    return {
      x: Math.round(position.x) + 0.5, // round to integer and add 0.5
      y: Math.round(position.y) + 0.5,
    }
  }
}