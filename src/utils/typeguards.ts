import IEdge from "../interfaces/IEdge";
import Color from "../models/core/Color";

export default class Typeguards {

  static isNumber = (obj: any): obj is number => typeof obj === "number";

  static isEdge = (obj: any): obj is IEdge => obj.point1 !== undefined && obj.point2 !== undefined;

  static isColor = (obj: any): obj is Color => obj instanceof Color;

}
