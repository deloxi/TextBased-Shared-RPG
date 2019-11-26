class Entity {
    constructor(name,level) {
        this.name = name;
        this.level = level;
        this.born = worldTime.getTime();
    }

    status() {
        return `${this.name} is level ${this.level}`;
    }

    wasBornInYear() {
        return dayjs(this.born).format("YYYY");
    }

    dead() {
        return "Is dead!!!!"
    }
}