
// log value with timestamp
function log(string) {
    //console.log("["+getTimeStamp()+"]> "+ string);
    console.log("["+moment().format("HH:mm:ss.SSS")+"]> "+ string);
}