const canvas = document.querySelector("canvas")
const ctx = canvas?.getContext("2d")

if (!ctx) throw new Error("No context of canvas")
let score: number = 0;
let playerX = 250;
let playerY = 250;
const keyPressed: Record<string, boolean> = {};

const intervalId = setInterval(() => {update(ctx)}, 1000);
window.addEventListener("keydown", (event: KeyboardEvent) => {keyPressed[event.code] = true});
window.addEventListener("keyup", (event: KeyboardEvent) => {keyPressed[event.code] = false});

function addScore(): void
{
    score += 1;
}

function drawField(context: CanvasRenderingContext2D): void
{
    context.fillStyle = "gray";
    context.fillRect(0, 0, 500, 500);

    context.fillStyle = "green";
    context.fillRect(10, 10, 10, 10);
    context.fillRect(20, 20, 10, 10);

    context.font = 'bold 14px Times New Roman';
    context.strokeStyle = 'black';
    context.strokeText(`Score: ${score}`, 400, 20);

    context.fillStyle = "red";
    context.fillRect(playerX, playerY, 10, 10);
}

function handleInput():void
{
    if (keyPressed["KeyW"] == true) { playerY -= 50;}
    if (keyPressed["KeyS"] == true) { playerY += 50;}
    if (keyPressed["KeyD"] == true) { playerX += 50;}
    if (keyPressed["KeyA"] == true) { playerX -= 50;}
}

function update(context: CanvasRenderingContext2D): void
{
    //addScore();
    handleInput();
    drawField(context);
}

