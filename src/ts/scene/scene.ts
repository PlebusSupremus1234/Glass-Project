import { Star, placeStars } from "./star.js";
import { Infrastructure } from "../infrastructure/infrastructure.js";
import { Sea } from "./sea.js";
import { Land } from "./land.js";

export class Scene {
    sea: Sea;
    stars: Star[] = [];

    l1 = new Land(
        0,
        window.innerWidth,
        window.innerHeight,
    );
    l2 = new Land(
        window.innerWidth,
        window.innerWidth,
        window.innerHeight,
    );

    infrastructure = new Infrastructure(
        this.l1,
        this.l2,
    );

    constructor() {
        for (let i of placeStars(20, window.innerWidth, window.innerHeight)) {
            this.stars.push(new Star(
                i.x, i.y,
                1, Math.floor(Math.random() * 4) + 2,
            ));
        }

        this.sea = new Sea(window.innerWidth, window.innerHeight);
    }

    draw(ctx: CanvasRenderingContext2D) {
        // Sea template
        this.sea.drawTemplate(ctx);

        // Land
        ctx.globalCompositeOperation = 'source-in';

        ctx.beginPath();
        this.l1.draw(ctx);
        this.l2.draw(ctx);
        ctx.fill();

        // Cable
        this.infrastructure.draw(ctx);

        // Sea
        this.sea.draw(ctx);

        // Stars
        for (let i of this.stars) {
            i.draw(ctx);
        }

        // Background
        ctx.fillStyle = "#042240";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        ctx.globalCompositeOperation = 'source-over';
    }
}
