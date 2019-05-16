import shortid from "shortid";
import _ from "lodash";

import IDrawable from "../../interfaces/IDrawable";
import IRenderProps from "../../interfaces/IRenderProps";

export default abstract class Element implements IDrawable {
  id: string;

  constructor() {
    this.id = shortid.generate();
  }

  abstract draw(context?: CanvasRenderingContext2D, renderProps?: IRenderProps): void;
}