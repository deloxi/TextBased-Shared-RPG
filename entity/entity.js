class Entity {
    constructor(name,level) {
        this.name = name;
        this.level = level;
    }

    status() {
        return `${this.name} is level ${this.level}`;
    }

    dead() {
        return "Is dead!!!!"
    }
}