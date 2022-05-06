import { Land } from "../scene/land.js";
import { Cable } from "./cable.js";
import { LandingStation } from "./landingStation.js";
import { CellTower } from "./cellTower.js";
import { Phone } from "./phone.js";
import { Signal } from "../signal/signal.js";

export class Infrastructure {
    cable: Cable;

    miniCable1: Cable;
    miniCable2: Cable;

    s1: LandingStation;
    s2: LandingStation;

    t1: CellTower;
    t2: CellTower;

    p1: Phone;
    p2: Phone;

    signal: Signal | null = null;

    constructor(l1: Land, l2: Land) {
        this.cable = new Cable(
            l1.x + l1.rx, l1.y,
            l2.x - l2.rx, l2.y,
            
            7
        );

        this.s1 = new LandingStation(l1.x + l1.rx, l1.y, true);
        this.s2 = new LandingStation(l2.x - l2.rx, l2.y, false);

        const w = window.innerWidth;
        const h = window.innerHeight;

        this.t1 = new CellTower(true, w, h);
        this.t2 = new CellTower(false, w, h);

        const lastRect1 = this.t1.points[this.t1.points.length - 1];
        const lastRect2 = this.t2.points[this.t2.points.length - 1];

        this.miniCable1 = new Cable(
            lastRect1[0] + lastRect1[2],
            lastRect1[1] + lastRect1[3],

            this.s1.pos.x,
            this.s1.pos.y + this.s1.height / 2,
            
            3,
        );

        this.miniCable2 = new Cable(
            lastRect2[0],
            lastRect2[1] + lastRect2[3],

            this.s2.pos.x + this.s2.width,
            this.s2.pos.y + this.s2.height / 2,
            
            3,
        );

        this.p1 = new Phone(w / 15, 7 * h / 10, w / 15, h / 4);
        this.p2 = new Phone(13 * w / 15, 7 * h / 10, w / 15, h / 4);

        // this.signal = new Signal(
        //     this.p1,
        //     this.t1,
        //     this.miniCable1,

        //     this.cable,

        //     this.p2,
        //     this.t2,
        //     this.miniCable2,
        // );
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.globalCompositeOperation = 'destination-over';
        this.cable.draw(ctx);

        ctx.globalCompositeOperation = 'source-over';        
        this.miniCable1.draw(ctx);
        this.miniCable2.draw(ctx);

        this.s1.draw(ctx);
        this.s2.draw(ctx);

        this.t1.draw(ctx);
        this.t2.draw(ctx);

        this.p1.draw(ctx);
        this.p2.draw(ctx);

        if (this.signal) {
            this.signal.update();
            this.signal.draw(ctx);
        }
    }
}
