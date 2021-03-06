var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
import { Scene } from "./scene/scene.js";
var scene = new Scene();
import { alerts } from "./alerts.js";
var alertF = false;
var alertI = 0;
var alertC = 0;
function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scene.draw(ctx);
    if (!scene.infrastructure.signalB && alertI === 4) {
        alertF = false;
        alertI++;
    }
    if (!alertF) {
        alertC++;
        if (alertC === alerts[alertI].t) {
            alert(alerts[alertI].m);
            if (alertI === 3) {
                scene.infrastructure.signalB = true;
                alertF = true;
            }
            alertC = 0;
            alertI++;
            if (alertI >= alerts.length)
                alertF = true;
        }
    }
}
draw();
