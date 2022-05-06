var Vector = /** @class */ (function () {
    function Vector(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector.prototype.rotate = function (angle, originX, originY) {
        if (originX === void 0) { originX = 0; }
        if (originY === void 0) { originY = 0; }
        var x = this.x - originX;
        var y = this.y - originY;
        return new Vector(originX + x * Math.cos(angle) - y * Math.sin(angle), originY + x * Math.sin(angle) + y * Math.cos(angle));
    };
    Vector.prototype.duplicate = function () {
        return new Vector(this.x, this.y);
    };
    return Vector;
}());
export { Vector };
