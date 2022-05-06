var Sea = /** @class */ (function () {
    function Sea(w, h) {
        var r1 = 0.3;
        var r2 = 0.6;
        var numerator = h * (2 * r1 * r2 - r1 * r1 - r2 * r2);
        var denominator = 2 * (r1 - r2);
        var radius = numerator / denominator - w * w / (8 * h * (r1 - r2));
        var b = h * (1 - r2) + radius;
        this.x = w / 2;
        this.y = b;
        this.r = radius;
    }
    Sea.prototype.draw = function (ctx) {
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = "#006994";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    };
    Sea.prototype.drawTemplate = function (ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    };
    return Sea;
}());
export { Sea };
