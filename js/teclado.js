let x = 0,
    y = 0;

export function moveBall(e, ball, stage) {
    const $ball = document.querySelector(ball),
        $stage = document.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();

    
    switch (e.keyCode) {
        case 37:
            e.preventDefault();
            if (limitsBall.x - 10 > limitsStage.x) {
                x--
            }
            break;
        case 38:
            e.preventDefault();
            if (limitsBall.y - 10 > limitsStage.y) {
                y--
            }
            break;
        case 39:
            e.preventDefault();
            if (limitsBall.x + limitsBall.width + 10 < limitsStage.width + limitsStage.x) {
                x++
            }

            break;
        case 40:
            e.preventDefault();
            if (limitsBall.y + limitsBall.height + 10 < limitsStage.height + limitsStage.y) {
                y++
            }


            break;

        default:
            break;
    }

    $ball.style.transform = `translate(${x*10}px, ${y*10}px)`

}

export function shortcuts(e) {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.key);
    // console.log(e.keyCode);
    // console.log(e.altKey);

}