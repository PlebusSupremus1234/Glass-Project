var Scene = /** @class */ (function () {
    function Scene() {
        this.stars = [];
        var min = 0.3;
        var max = 1;
        for (var i = 0; i < 100; i++) {
            this.stars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: Math.round((Math.random() * (max - min) + min) * 100) / 100,
            });
        }
    }
    Scene.prototype.draw = function (ctx) {
        var width = window.innerWidth;
        var height = window.innerHeight;
        // Sea template
        ctx.beginPath();
        ctx.ellipse(width / 2, 2.5 * height, width, width, 0, 0, 2 * Math.PI);
        ctx.fill();
        // Land
        ctx.globalCompositeOperation = "source-in";
        ctx.fillStyle = "#00b000";
        ctx.beginPath();
        ctx.ellipse(0, 2 * height / 3, 500, 400, 0, 0, 2 * Math.PI);
        ctx.ellipse(width, 2 * height / 3, 500, 400, 0, 0, 2 * Math.PI);
        ctx.fill();
        // Sea
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = "#006994";
        ctx.beginPath();
        ctx.ellipse(width / 2, 2.5 * height, width, width, 0, 0, 2 * Math.PI);
        ctx.fill();
        // Stars
        for (var _i = 0, _a = this.stars; _i < _a.length; _i++) {
            var i = _a[_i];
            ctx.beginPath();
            ctx.fillStyle = "rgba(255, 255, 255, " + i.opacity;
            ctx.arc(i.x, i.y, 2, 0, 2 * Math.PI);
            ctx.fill();
        }
        // Background
        ctx.fillStyle = "#042240";
        ctx.fillRect(0, 0, width, height);
        ctx.globalCompositeOperation = "source-over";
    };
    return Scene;
}());
export { Scene };
