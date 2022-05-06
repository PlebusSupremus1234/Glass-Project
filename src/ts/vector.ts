export class Vector {
    x: number;
    y: number;
    
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    rotate(angle: number, originX = 0, originY = 0): Vector {
        const x = this.x - originX;
        const y = this.y - originY;

        return new Vector(
            originX + x * Math.cos(angle) - y * Math.sin(angle),
            originY + x * Math.sin(angle) + y * Math.cos(angle),
        );
    }

    duplicate(): Vector {
        return new Vector(
            this.x,
            this.y,
        );
    }
}
