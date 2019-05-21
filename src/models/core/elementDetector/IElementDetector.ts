import IPoint from "../../../interfaces/IPoint";

export default interface IElementDetector {
  isInsideElement<T>(element?: T | undefined, coords?: IPoint | undefined): boolean;
}