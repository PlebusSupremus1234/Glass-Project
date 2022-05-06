import { Vector } from "../vector.js";

export class LandingStation {
    pos: Vector;

    width = 70;
    height = 50;

    constructor(x: number, y: number, left: boolean) {
        this.pos = new Vector(
            x + (left ? -1 : 0) * this.width,
            y - this.height / 2,
        );
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#878787";
        ctx.fillRect(
            this.pos.x,
            this.pos.y,
            this.width,
            this.height,
        );
    }
}
