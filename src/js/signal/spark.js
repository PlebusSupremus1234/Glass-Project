import { Vector } from "../vector.js";
var Spark = /** @class */ (function () {
    function Spark(cable, left) {
        this.progress = 0;
        var l = !left ? cable.p1 : cable.p2;
        var r = !left ? cable.p2 : cable.p1;
        this.pos = new Vector(l.x, l.y);
        this.start = new Vector(l.x, l.y);
        this.end = new Vector(r.x, r.y);
        this.r = Math.ceil(cable.width / 2);
    }
    Spark.prototype.draw = function (ctx) {
        var grad = ctx.createRadialGradient(this.pos.x, this.pos.y, this.r, this.pos.x, this.pos.y, this.r * 50);
        grad.addColorStop(0, "#ffe100");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.filter = "blur(10px)";
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.r * 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.filter = "none";
    };
    Spark.prototype.update = function () {
        this.progress += 0.01;
        this.pos.x = this.start.x + this.progress * (this.end.x - this.start.x);
        this.pos.y = this.start.y + this.progress * (this.end.y - this.start.y);
    };
    return Spark;
}());
export { Spark };
