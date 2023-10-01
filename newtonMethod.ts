

// UTILS
function calculateNewtonMethod(x: number) {
    function fx(x: number) {
        return Math.exp(x) + 3 * x - 5
    }
    function derivateOFfx(x: number) {
        return Math.exp(x) + 3
    }
    const nextX = x - (fx(x) / derivateOFfx(x))
    return nextX
};
function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
};

async () => {
    var x = 10;
    var i = 0, x = Number(x), stop = false
    console.log(`---- x = ${x} ----`)
    while (!stop) {
        const newX = calculateNewtonMethod(x);
        await delay(500);
        console.log(`${x}`);
        if (newX === x) {
            stop = true;
            console.log(`${x}        (iteration n°${i})`);
        };
        i += 1; x = newX;
    }
}
