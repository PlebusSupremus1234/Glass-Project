const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

import { Scene } from "./scene/scene.js";
const scene = new Scene();

import { alerts } from "./alerts.js";

let alertF = false;
let alertI = 0;
let alertC = 0;

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

            if (alertI >= alerts.length) alertF = true;
        }    
    }
}

draw();
