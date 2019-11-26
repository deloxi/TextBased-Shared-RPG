class WorldTime {
    constructor(time) {
        this.time = time;
        setInterval(() => {
            this.time = dayjs(this.time).add(1, 'days');
        }, 1000);
    }

    getTime() {
        return dayjs(this.time).format("YYYY-MM-DD HH:mm:ss");
    }
}