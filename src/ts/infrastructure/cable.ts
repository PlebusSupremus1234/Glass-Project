import { Vector } from "../vector.js";

export class Cable {
    p1: Vector;
    p2: Vector;

    width: number;

    constructor(x1: number, y1: number, x2: number, y2: number, width: number) {
        this.p1 = new Vector(x1, y1);
        this.p2 = new Vector(x2, y2);

        this.width = width;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.lineWidth = this.width;

        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();

        ctx.lineWidth = 1;
    }
}
