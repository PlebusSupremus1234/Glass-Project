import { Vector } from "../vector.js";
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
