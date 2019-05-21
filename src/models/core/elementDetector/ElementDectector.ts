import IElementDetector from "./IElementDetector";
import _ from "lodash";

export default class ElementDetector implements IElementDetector {
  private detectors: IElementDetector[];
  constructor(detectors: IElementDetector[]) {
    this.detectors = detectors;
  }
  
  isInsideElement<T>(element?: T | undefined, coords?: import("../../../interfaces/IPoint").default | undefined): boolean {
    return _.some(this.detectors, d => d.isInsideElement(element, coords));
  }
}