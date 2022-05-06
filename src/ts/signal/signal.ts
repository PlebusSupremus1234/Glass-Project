import { Wave } from "./wave.js";
import { Spark } from "./spark.js";
import { Phone } from "../infrastructure/phone.js";

import { bearing } from "../helper.js";
import { CellTower } from "../infrastructure/cellTower.js";
import { Cable } from "../infrastructure/cable.js";

export class Signal {
    wave1: Wave;
    wave2: Wave;

    spark1: Spark;
    spark2: Spark;
    spark3: Spark;

    o = 0;
    order: (Wave | Spark)[];
    finished = false;

    sleep = false;
    sleepC = 0;

    constructor(
        p1: Phone, t1: CellTower, mc1: Cable,

        cable: Cable,

        p2: Phone, t2: CellTower, mc2: Cable,        
    ) {
        const a1 = p1.pos.x + p1.w;
        const b1 = p1.pos.y;
        const c1 = t1.points[0][0] + t1.points[0][2] / 2;
        const d1 = t1.points[0][1] + t1.points[0][3];

        const a2 = t2.points[2][0] + t2.points[2][2] / 2;
        const b2 = t2.points[2][1] + t2.points[2][3];
        const c2 = p2.pos.x + p2.w / 3;
        const d2 = p2.pos.y;

        this.wave1 = new Wave(
            a1, b1,
            bearing(a1, b1, c1, d1),
            
            Math.abs(a1 - c1),
            Math.abs(b1 - d1),
        );
        this.wave2 = new Wave(
            a2, b2,
            bearing(a2, b2, c2, d2),
            
            Math.abs(a2 - c2),
            -Math.abs(b2 - d2),
        );

        this.spark1 = new Spark(mc1, 0);
        this.spark2 = new Spark(cable, 0);
        this.spark3 = new Spark(mc2, 1);

        this.order = [
            this.wave1,
            this.spark1,
            this.spark2,
            this.spark3,
            this.wave2,
        ];
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (!this.sleep) this.order[this.o].draw(ctx);
    }

    update() {
        if (!this.sleep) this.order[this.o].update();
        else {
            this.sleepC++;
            if (this.sleepC > 50) this.sleep = false;
        }

        if (this.order[this.o].progress > 1) {
            this.sleep = true;
            this.sleepC = 0;
            this.o++;
            
            if (this.o >= this.order.length) this.finished = true;
        }
    }
}
