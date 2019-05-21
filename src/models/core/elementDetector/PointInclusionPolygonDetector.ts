import IElementDetector from "./IElementDetector";
import Polygon from "../../elements/Polygon";
import IPoint from "../../../interfaces/IPoint";

export default class PointInclusionPolygonDetector implements IElementDetector {
  /* https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html */
  isInsideElement<T>(element?: T | undefined, coords?: import("../../../interfaces/IPoint").default | undefined): boolean {
    if (!element || !(element instanceof Polygon) || !coords) { return false; }

    let points: IPoint[] = (element as Polygon).points;
    if (!points) { return false; }

    let vertexCount: number = points.length;
    let isInsideElement: boolean = false;
    for (let i = 0, j = vertexCount - 1; i < vertexCount; j = i++) {
      if (((points[i].y > coords.y) !== (points[j].y > coords.y))
        && (coords.x < (points[j].x - points[i].x) * (coords.y - points[i].y) / (points[j].y - points[i].y) + points[i].x)) {
          isInsideElement = !isInsideElement;
      }
    }

    return isInsideElement;
  }
}
