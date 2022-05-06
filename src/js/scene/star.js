import { Vector } from "../vector.js";
var Star = /** @class */ (function () {
    function Star(x, y, iRad, oRad) {
        var _this = this;
        this.rot = 3 * Math.PI / 2;
        this.spikes = 4;
        this.step = Math.PI / this.spikes;
        this.iPoints = [];
        this.oPoints = [];
        this.x = x;
        this.y = y;
        this.iRad = iRad;
        this.oRad = oRad;
        // Create star points
        this.iPoints.push(new Vector(this.x, this.y - this.oRad));
        for (var i = 0; i < this.spikes; i++) {
            var x_1 = this.x + Math.cos(this.rot) * this.oRad;
            var y_1 = this.y + Math.sin(this.rot) * this.oRad;
            this.iPoints.push(new Vector(x_1, y_1));
            this.rot += this.step;
            x_1 = this.x + Math.cos(this.rot) * this.iRad;
            y_1 = this.y + Math.sin(this.rot) * this.iRad;
            this.iPoints.push(new Vector(x_1, y_1));
            this.rot += this.step;
        }
        this.iPoints.push(new Vector(this.x, this.y - this.oRad));
        var iscale = 2;
        var oscale = 5;
        this.iPoints = this.iPoints.map(function (i) {
            return new Vector(_this.x + iscale * (_this.x - i.x), _this.y + iscale * (_this.y - i.y)).rotate(Math.PI / 4, _this.x, _this.y);
        });
        this.oPoints = this.iPoints.map(function (i) {
            return new Vector(_this.x + (oscale / iscale) * (_this.x - i.x), _this.y + (oscale / iscale) * (_this.y - i.y));
        });
    }
    Star.prototype.draw = function (ctx) {
        // Draw inner
        ctx.fillStyle = "skyblue";
        ctx.beginPath();
        ctx.moveTo(this.iPoints[0].x, this.iPoints[0].y);
        for (var i = 1; i < this.iPoints.length; i++) {
            ctx.lineTo(this.iPoints[i].x, this.iPoints[i].y);
        }
        ctx.fill();
        // Draw outer
        ctx.fillStyle = "#204288";
        ctx.beginPath();
        ctx.moveTo(this.oPoints[0].x, this.oPoints[0].y);
        for (var i = 1; i < this.oPoints.length; i++) {
            ctx.lineTo(this.oPoints[i].x, this.oPoints[i].y);
        }
        ctx.fill();
    };
    return Star;
}());
export { Star };
export function placeStars(count, width, height) {
    var w = 10;
    var h = 3;
    var spots = [];
    for (var i = 0; i < w; i++) {
        for (var j = 0; j < h; j++) {
            for (var a = 0; a < Math.ceil(count / (w * h)); a++) {
                spots.push(new Vector((Math.random() + i) * (width / w), (Math.random() + j) * (height / (2 * h))));
            }
        }
    }
    return spots;
}
