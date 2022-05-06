import { Vector } from "../vector.js";
var LandingStation = /** @class */ (function () {
    function LandingStation(x, y, left) {
        this.width = 70;
        this.height = 50;
        this.pos = new Vector(x + (left ? -1 : 0) * this.width, y - this.height / 2);
    }
    LandingStation.prototype.draw = function (ctx) {
        ctx.fillStyle = "#878787";
        ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    };
    return LandingStation;
}());
export { LandingStation };
