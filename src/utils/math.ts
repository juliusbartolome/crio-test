import IPoint from "../interfaces/IPoint";

export default class MathUtils {

  /**
   * Convert radians to degrees
   *
   * @static
   * @param {number} angleRad
   * @returns {number}
   * @memberof MathUtils
   */
  public static radToDeg(angleRad: number): number {
    return angleRad * 180 / Math.PI;
  }

  /**
   * Convert degrees to radians
   *
   * @static
   * @param {number} angleDeg
   * @returns {number}
   * @memberof MathUtils
   */
  public static degToRad(angleDeg: number): number {
    return angleDeg * Math.PI / 180;
  }

  /**
   * Computes square of a number.
   * @param x
   */
  private static sqr(x: number) { return x * x };

  /**
   * Computes distance squared between two vectors.
   * @param v
   * @param w
   */
  public static distSquared(v: IPoint, w: IPoint) { return this.sqr(v.x - w.x) + this.sqr(v.y - w.y); }

    /**
   * Angle between two points (in radians)
   *
   * @static
   * @param {IPoint} p1
   * @param {IPoint} p2
   * @returns {number}
   * @memberof MathUtils
   */
  public static lineAngle(p1: IPoint, p2: IPoint): number {
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
  }
}
