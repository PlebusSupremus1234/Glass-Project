import { Vector } from "../vector.js";

export class Wave {
    pos: Vector;
    oPos: Vector;

    direction: number;
    
    w: number;
    h: number;

    progress = 0;
    opacity = 0;

    readonly maxOpacity = 0.8;
    
    constructor(x: number, y: number, dir: number, w: number, h: number) {
        this.pos = new Vector(x, y);
        this.oPos = this.pos.duplicate();

        this.direction = dir;

        this.w = w;
        this.h = h;
    }

    draw(ctx: CanvasRenderingContext2D) {
        const { x, y } = this.pos;
        const arcs = [
            [25, 13],
            [50, 13],
            [0, 13],
        ];

        ctx.beginPath();

        for (let i of arcs) {
            const r = i[0];
            const w = i[1];
        
            ctx.moveTo(...this.r(x, y - r));
            ctx.arcTo(...this.r(x + r, y - r), ...this.r(x + r, y), r);
            ctx.lineTo(...this.r((x + r) + w, y));
            ctx.arcTo(...this.r(x + r + w, y - r - w), ...this.r(x, y - w - r), w + r);
            ctx.lineTo(...this.r(x, y - w));
        }

        ctx.fillStyle = `rgba(252, 168, 3, ${this.opacity})`;
        ctx.fill();
    }

    update() {
        this.pos.x = this.oPos.x + this.progress * this.w;
        this.pos.y = this.oPos.y - this.progress * this.h;
        
        this.progress += 0.01;

        if (this.progress < 0.2) this.opacity += 0.05;
        else if (this.progress > 0.8) this.opacity -= 0.05;
    }

    r(x: number, y: number): [number, number] {
        const rotated = new Vector(x, y).rotate(this.direction + Math.PI / 4, this.pos.x, this.pos.y);

        return [rotated.x, rotated.y];
    }
}
