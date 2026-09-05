export class Player {
    constructor(speed, startPosX, startPosY) {
        this.speed = speed;
        this.x = startPosX;
        this.y = startPosY;
    }
    get posX() {
        return this.x;
    }
    get posY() {
        return this.y;
    }
    MoveLeft() {
        this.x -= this.speed;
    }
    MoveRight() {
        this.x += this.speed;
    }
    MoveUp() {
        this.y -= this.speed;
    }
    MoveDown() {
        this.y += this.speed;
    }
}
