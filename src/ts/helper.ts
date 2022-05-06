export function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    const radius = {
        tl: r,
        tr: r,
        br: r,
        bl: r,
    };

    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + w - radius.tr, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + radius.tr);
    ctx.lineTo(x + w, y + h - radius.br);
    ctx.quadraticCurveTo(x + w, y + h, x + w - radius.br, y + h);
    ctx.lineTo(x + radius.bl, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.fill();
}

export function bearing(x1: number, y1: number, x2: number, y2: number): number {
    const dx = x1 - x2;
    const dy = y1 - y2;

    return normalize(Math.atan2(-dy, -dx));
}

export function normalize(angle: number): number {
    if (angle < 0) return angle + 2 * Math.PI;
    if (angle >= 2 * Math.PI) return angle - 2 * Math.PI;

    return angle;
}

export function distance(x1: number, y1: number, x2: number, y2: number) {
    const dx = x1 - x2;
    const dy = y1 - y2;

    return Math.sqrt(dx * dx + dy + dy);
}
