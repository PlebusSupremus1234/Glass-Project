export class Sea {
    x: number;
    y: number;
    r: number;

    constructor(w: number, h: number) {
        const r1 = 0.3;
        const r2 = 0.6;
        
        const numerator = h * (2 * r1 * r2 - r1 * r1 - r2 * r2);
        const denominator = 2 * (r1 - r2);

        const radius = numerator / denominator - w * w / (8 * h * (r1 - r2));
        const b = h * (1 - r2) + radius;

        this.x = w / 2;
        this.y = b;
        this.r = radius;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = "#006994";

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }

    drawTemplate(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }
}
