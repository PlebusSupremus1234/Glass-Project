var Land = /** @class */ (function () {
    function Land(x, w, h) {
        var ratioX = 0.3255;
        var ratioY = 0.5472;
        this.x = x;
        this.y = 2 / 3 * h;
        this.rx = ratioX * w;
        this.ry = ratioY * h;
    }
    Land.prototype.draw = function (ctx) {
        ctx.fillStyle = "#00b000";
        ctx.ellipse(this.x, this.y, this.rx, this.ry, 0, 0, 2 * Math.PI);
    };
    return Land;
}());
export { Land };
