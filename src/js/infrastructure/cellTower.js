import { Vector } from '../vector.js';
var CellTower = /** @class */ (function () {
    function CellTower(left, w, h) {
        var x = left ? w / 5 : 4 * w / 5;
        this.pos = new Vector(x, h / 2);
        var ratio = 2437;
        this.scale = h / ratio;
        var points = [
            [-90, -340, 39, 169],
            [-25, -340, 49, 169],
            [51, -340, 39, 169],
            [-51, -268, 26, 25],
            [25, -268, 26, 25],
            [-15, -171, 30, 131],
            [-23, -40, 46, 145],
            [-28, 105, 55, 251],
        ];
        this.points = [];
        for (var i in points) {
            this.points.push([
                this.scale * points[i][0] + this.pos.x,
                this.scale * points[i][1] + this.pos.y,
                this.scale * points[i][2],
                this.scale * points[i][3],
            ]);
        }
    }
    CellTower.prototype.draw = function (ctx) {
        ctx.beginPath();
        for (var i in this.points) {
            ctx.rect(this.points[i][0], this.points[i][1], this.points[i][2], this.points[i][3]);
        }
        ctx.fillStyle = "#dddddd";
        ctx.fill();
        ctx.stroke();
    };
    return CellTower;
}());
export { CellTower };
