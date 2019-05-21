import ElementDetector from "./ElementDectector";
import AxisBoundingPolygonDetector from "./AxisBoundingPolygonDetector";
import PointInclusionPolygonDetector from "./PointInclusionPolygonDetector";

export default class ElementDetectorFactory {
  static getElementDetector() {

    let detectors = [
      // new AxisBoundingPolygonDetector(),
      new PointInclusionPolygonDetector()
    ];

    return new ElementDetector(detectors);
  }
}