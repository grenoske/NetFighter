import { Player } from "./player.js";
export abstract class Command {
    private static idx: number = 0;
    public readonly seqNumber: number;

    constructor(){
        Command.idx += 1;
        this.seqNumber = Command.idx;
    }

    public static resetCounter(): void {
        Command.idx = 0;
    }

    abstract execute(): void;
}

export class CommandPlayerMoveLeft extends Command {
    private player: Player;

    constructor(player: Player){
        super();
        this.player = player;
    }
    execute(): void {
        this.player.MoveLeft();
    }
}

export class CommandPlayerMoveRight extends Command {
    private player: Player;

    constructor(player: Player){
        super();
        this.player = player;
    }
    execute(): void {
        this.player.MoveRight();
    }
}

export class CommandPlayerMoveUp extends Command {
    private player: Player;

    constructor(player: Player){
        super();
        this.player = player;
    }
    execute(): void {
        this.player.MoveUp();
    }
}

export class CommandPlayerMoveDown extends Command {
    private player: Player;

    constructor(player: Player){
        super();
        this.player = player;
    }
    execute(): void {
        this.player.MoveDown();
    }
}