import { Vector } from "../vector.js";
import { roundRect } from "../helper.js";
var Phone = /** @class */ (function () {
    function Phone(x, y, w, h) {
        this.pos = new Vector(x, y);
        this.w = w;
        this.h = h;
    }
    Phone.prototype.draw = function (ctx) {
        ctx.fillStyle = "#1a1a1a";
        roundRect(ctx, this.pos.x, this.pos.y, this.w, this.h, 15);
        var marginX = 0.03 * this.w;
        var marginY = 0.1 * this.h;
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(this.pos.x + marginX, this.pos.y + marginY, this.w - 2 * marginX, this.h - 2 * marginY);
    };
    return Phone;
}());
export { Phone };
