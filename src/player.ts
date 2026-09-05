export class Player{
    private x: number;
    private y: number;
    public speed: number;

    constructor(speed: number, startPosX: number, startPosY: number){
        this.speed = speed;
        this.x = startPosX;
        this.y = startPosY;
    }

    public get posX(): number {
        return this.x;
    }

    public get posY(): number {
        return this.y;
    }

    public MoveLeft() {
        this.x -= this.speed;
    }

    public MoveRight() {
        this.x += this.speed;
    }

    public MoveUp() {
        this.y -= this.speed;
    }

    public MoveDown() {
        this.y += this.speed;
    }
}