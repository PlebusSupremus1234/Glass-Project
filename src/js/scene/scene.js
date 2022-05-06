import { Star, placeStars } from "./star.js";
import { Infrastructure } from "../infrastructure/infrastructure.js";
import { Sea } from "./sea.js";
import { Land } from "./land.js";
var Scene = /** @class */ (function () {
    function Scene() {
        this.stars = [];
        this.l1 = new Land(0, window.innerWidth, window.innerHeight);
        this.l2 = new Land(window.innerWidth, window.innerWidth, window.innerHeight);
        this.infrastructure = new Infrastructure(this.l1, this.l2);
        for (var _i = 0, _a = placeStars(20, window.innerWidth, window.innerHeight); _i < _a.length; _i++) {
            var i = _a[_i];
            this.stars.push(new Star(i.x, i.y, 1, Math.floor(Math.random() * 4) + 2));
        }
        this.sea = new Sea(window.innerWidth, window.innerHeight);
    }
    Scene.prototype.draw = function (ctx) {
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
        for (var _i = 0, _a = this.stars; _i < _a.length; _i++) {
            var i = _a[_i];
            i.draw(ctx);
        }
        // Background
        ctx.fillStyle = "#042240";
        ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.globalCompositeOperation = 'source-over';
    };
    return Scene;
}());
export { Scene };
