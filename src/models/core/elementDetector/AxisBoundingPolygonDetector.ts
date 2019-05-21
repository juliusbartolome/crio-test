import IElementDetector from "./IElementDetector";
import Polygon from "../../elements/Polygon";
import IPoint from "../../../interfaces/IPoint";

export default class AxisBoundingPolygonDetector implements IElementDetector {
  /* https://stackoverflow.com/questions/217578/how-can-i-determine-whether-a-2d-point-is-within-a-polygon?answertab=votes#tab-top */
  isInsideElement<T>(element?: T | undefined, coords?: IPoint | undefined): boolean {
    if (!element || !(element instanceof Polygon) || !coords)
      return false;

    let points = (element as Polygon).points;
    if (!points) return false;

    let xAxes = points.map(p => p.x);
    let yAxes = points.map(p => p.y);

    return coords.x < Math.min(...xAxes)
            || coords.x > Math.max(...xAxes)
            || coords.y < Math.min(...yAxes)
            || coords.y > Math.max(...yAxes);
  }
}