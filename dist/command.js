export class Command {
    constructor() {
        Command.idx += 1;
        this.seqNumber = Command.idx;
    }
    static resetCounter() {
        Command.idx = 0;
    }
}
Command.idx = 0;
export class CommandPlayerMoveLeft extends Command {
    constructor(player) {
        super();
        this.player = player;
    }
    execute() {
        this.player.MoveLeft();
    }
}
export class CommandPlayerMoveRight extends Command {
    constructor(player) {
        super();
        this.player = player;
    }
    execute() {
        this.player.MoveRight();
    }
}
export class CommandPlayerMoveUp extends Command {
    constructor(player) {
        super();
        this.player = player;
    }
    execute() {
        this.player.MoveUp();
    }
}
export class CommandPlayerMoveDown extends Command {
    constructor(player) {
        super();
        this.player = player;
    }
    execute() {
        this.player.MoveDown();
    }
}
