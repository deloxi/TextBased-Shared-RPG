/*
    INCLUDE LIBS
    - All external libs
*/
fetchInject([
    "https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.8.16/dayjs.min.js",
    "utils/log.js",
    "entity/entity.js",
    "entity/player.js",
    "world/clock.js"
]).then(()=> {
    console.log("External libs all loaded!!");
    initWorld();
}).catch((e)=> {
    console.error("Error: " + e);
})

/* 
    INIT WORLD
*/
var worldTime;

function initWorld() {
    worldTime = new WorldTime(dayjs("1117-11-17 11:17:00"));
    log("World has started");
    log(worldTime.getTime());
    initPlayer();
}

/* 
    INIT PLAYER
    - Give som random eq
    - Give or choose random stats
*/
function initPlayer() {
    log("Generate player.");
    let player = new Player("Kalle", 1, "Druid");
    log(player.status());
    log(player.name +" that is a " + player.race + " was born in the year "+ player.wasBornInYear());
}

/*
    THE BEGINING
    - Ask name
    - Introduce the story
    - Set the scene
    - Player interacts
*/
