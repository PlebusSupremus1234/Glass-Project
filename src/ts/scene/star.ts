import { Vector } from "../vector.js";

export class Star {
    x: number;
    y: number;
    
    oRad: number;
    iRad: number;
    
    rot = 3 * Math.PI / 2;

    readonly spikes = 4;
    readonly step = Math.PI / this.spikes;

    iPoints: Vector[] = [];
    oPoints: Vector[] = [];

    constructor(x: number, y: number, iRad: number, oRad: number) {
        this.x = x;
        this.y = y;

        this.iRad = iRad;
        this.oRad = oRad;

        // Create star points
        this.iPoints.push(new Vector(this.x, this.y - this.oRad));

        for (let i = 0; i < this.spikes; i++) {
            let x = this.x + Math.cos(this.rot) * this.oRad;
            let y = this.y + Math.sin(this.rot) * this.oRad;
            this.iPoints.push(new Vector(x, y));

            this.rot += this.step;

            x = this.x + Math.cos(this.rot) * this.iRad;
            y = this.y + Math.sin(this.rot) * this.iRad;
            this.iPoints.push(new Vector(x, y));

            this.rot += this.step;
        }

        this.iPoints.push(new Vector(this.x, this.y - this.oRad));

        const iscale = 2;
        const oscale = 5;

        this.iPoints = this.iPoints.map(i => {
            return new Vector(
                this.x + iscale * (this.x - i.x),
                this.y + iscale * (this.y - i.y),
            ).rotate(Math.PI / 4, this.x, this.y);
        });

        this.oPoints = this.iPoints.map(i => {
            return new Vector(
                this.x + (oscale / iscale) * (this.x - i.x),
                this.y + (oscale / iscale) * (this.y - i.y),
            );
        });
    }

    draw(ctx: CanvasRenderingContext2D) {
        // Draw inner
        ctx.fillStyle = "skyblue";
        ctx.beginPath();

        ctx.moveTo(this.iPoints[0].x, this.iPoints[0].y);
        for (let i = 1; i < this.iPoints.length; i++) {
            ctx.lineTo(this.iPoints[i].x, this.iPoints[i].y);
        }
        
        ctx.fill();

        // Draw outer
        ctx.fillStyle = "#204288";
        ctx.beginPath();

        ctx.moveTo(this.oPoints[0].x, this.oPoints[0].y);
        for (let i = 1; i < this.oPoints.length; i++) {
            ctx.lineTo(this.oPoints[i].x, this.oPoints[i].y);
        }
        
        ctx.fill();
    }
}

export function placeStars(count: number, width: number, height: number): Vector[] {
    const w = 10;
    const h = 3; 
    const spots: Vector[] = [];

    for (let i = 0; i < w; i++) {
        for (let j = 0; j < h; j++) {
            for (let a = 0; a < Math.ceil(count / (w * h)); a++) {
                spots.push(new Vector(
                    (Math.random() + i) * (width / w),
                    (Math.random() + j) * (height / (2 * h)),
                ));
            }
        }
    }

    return spots;
}
