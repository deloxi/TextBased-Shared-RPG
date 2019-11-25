/*
    INCLUDE LIBS
    - All external libs
*/
fetchInject([
    "https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js",
    "utils/log.js",
    "entity/entity.js",
    "entity/player.js"
]).then(()=> {
    console.log("External libs all loaded!!");
    initWorld();
}).catch((e)=> {
    console.error("Error: " + e);
})

/* 
    INIT WORLD
*/
function initWorld() {
    log("World has started");
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
    log(player.dead());
}

/*
    THE BEGINING
    - Ask name
    - Introduce the story
    - Set the scene
    - Player interacts
*/
