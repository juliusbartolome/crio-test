import IPoint from "./IPoint";

export default interface IArc {
  position: IPoint;
  radius: number;
  start?: number;
  end?: number;
  counterclockwise?: boolean;
}