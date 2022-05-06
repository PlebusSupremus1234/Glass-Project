import { Vector } from "../vector.js";
import { roundRect } from "../helper.js";

export class Phone {
    pos: Vector;

    w: number;
    h: number;

    constructor(x: number, y: number, w: number, h: number) {
        this.pos = new Vector(x, y);

        this.w = w;
        this.h = h;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#1a1a1a";
        roundRect(ctx, this.pos.x, this.pos.y, this.w, this.h, 15);

        const marginX = 0.03 * this.w;
        const marginY = 0.1 * this.h;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(this.pos.x + marginX, this.pos.y + marginY, this.w - 2 * marginX, this.h - 2 * marginY);
    }
}
