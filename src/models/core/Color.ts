import IRgba from "../../interfaces/IRgba";

export default class Color {
  public r: number;
  public g: number;
  public b: number;
  public a: number;

  constructor(r: number, g: number, b: number, a?: number) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a || 1;
  }

  public toRgb(): string {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  public toRgba(): string {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  public toHex(): string {
    return '#' + this.pad(this.r.toString(16)) + this.pad(this.g.toString(16)) + this.pad(this.b.toString(16));
  }

  public toObject(): IRgba {
    return { r: this.r, g: this.g, b: this.b, a: this.a };
  }

  private pad = (str: string): string => ("00" + str).slice(-2);
}