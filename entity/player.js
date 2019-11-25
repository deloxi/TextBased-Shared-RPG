class Player extends Entity {
    constructor(name,level,race) {
        super(name,level);

        //Player properties
        this.race = race
    }

    status() {
        return `${this.name} is level ${this.level} and is a ${this.race}`;
    }
}