import { Vector } from "../vector.js";
var Cable = /** @class */ (function () {
    function Cable(x1, y1, x2, y2, width) {
        this.p1 = new Vector(x1, y1);
        this.p2 = new Vector(x2, y2);
        this.width = width;
    }
    Cable.prototype.draw = function (ctx) {
        ctx.lineWidth = this.width;
        ctx.beginPath();
        ctx.moveTo(this.p1.x, this.p1.y);
        ctx.lineTo(this.p2.x, this.p2.y);
        ctx.stroke();
        ctx.lineWidth = 1;
    };
    return Cable;
}());
export { Cable };
