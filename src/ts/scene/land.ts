export class Land {
    x: number;
    y: number;
    rx: number;
    ry: number;

    constructor(x: number, w: number, h: number) {
        const ratioX = 0.3255;
        const ratioY = 0.5472;

        this.x = x;
        this.y = 2 / 3 * h;
        this.rx = ratioX * w;
        this.ry = ratioY * h;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "#00b000";
        
        ctx.ellipse(this.x, this.y, this.rx, this.ry, 0, 0, 2 * Math.PI);
    }
}
