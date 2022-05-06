var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import { Vector } from "../vector.js";
var Wave = /** @class */ (function () {
    function Wave(x, y, dir, w, h) {
        this.progress = 0;
        this.opacity = 0;
        this.maxOpacity = 0.8;
        this.pos = new Vector(x, y);
        this.oPos = this.pos.duplicate();
        this.direction = dir;
        this.w = w;
        this.h = h;
    }
    Wave.prototype.draw = function (ctx) {
        var _a = this.pos, x = _a.x, y = _a.y;
        var arcs = [
            [25, 13],
            [50, 13],
            [0, 13],
        ];
        ctx.beginPath();
        for (var _i = 0, arcs_1 = arcs; _i < arcs_1.length; _i++) {
            var i = arcs_1[_i];
            var r = i[0];
            var w = i[1];
            ctx.moveTo.apply(ctx, this.r(x, y - r));
            ctx.arcTo.apply(ctx, __spreadArray(__spreadArray(__spreadArray([], this.r(x + r, y - r)), this.r(x + r, y)), [r]));
            ctx.lineTo.apply(ctx, this.r((x + r) + w, y));
            ctx.arcTo.apply(ctx, __spreadArray(__spreadArray(__spreadArray([], this.r(x + r + w, y - r - w)), this.r(x, y - w - r)), [w + r]));
            ctx.lineTo.apply(ctx, this.r(x, y - w));
        }
        ctx.fillStyle = "rgba(252, 168, 3, " + this.opacity + ")";
        ctx.fill();
    };
    Wave.prototype.update = function () {
        this.pos.x = this.oPos.x + this.progress * this.w;
        this.pos.y = this.oPos.y - this.progress * this.h;
        this.progress += 0.01;
        if (this.progress < 0.2)
            this.opacity += 0.05;
        else if (this.progress > 0.8)
            this.opacity -= 0.05;
    };
    Wave.prototype.r = function (x, y) {
        var rotated = new Vector(x, y).rotate(this.direction + Math.PI / 4, this.pos.x, this.pos.y);
        return [rotated.x, rotated.y];
    };
    return Wave;
}());
export { Wave };
