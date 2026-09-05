import { Command, CommandPlayerMoveLeft, CommandPlayerMoveRight, CommandPlayerMoveUp, CommandPlayerMoveDown } from "./command.js";
import { Player } from "./player.js";

const canvas = document.querySelector("canvas")
const ctx = canvas?.getContext("2d")

if (!ctx) throw new Error("No context of canvas")
let score: number = 0;
let player: Player  = new Player(50, 250, 250); 
let playerX = 250;
let playerY = 250;
const keyPressed: Record<string, boolean> = {};
const commandsList: Command[] = [];

const intervalId = setInterval(() => {update(ctx)}, 200);
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
    context.fillRect(player.posX, player.posY, 10, 10);
}

function handleInput():void
{
    if (keyPressed["KeyA"] == true) { 
        commandsList.push(new CommandPlayerMoveLeft(player));
    }
    if (keyPressed["KeyD"] == true) {
        commandsList.push(new CommandPlayerMoveRight(player));
    }
    if (keyPressed["KeyW"] == true) {
        commandsList.push(new CommandPlayerMoveUp(player));
    }
    if (keyPressed["KeyS"] == true) { 
        commandsList.push(new CommandPlayerMoveDown(player));
    }
}

function update(context: CanvasRenderingContext2D): void
{
    //addScore();
    handleInput();
    for (const command of commandsList){
        command.execute();
        commandsList.pop();
    }
    
    drawField(context);
}

