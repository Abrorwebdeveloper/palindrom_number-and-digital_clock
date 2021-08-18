function timeShow() {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`);
}

timeShow()

setInterval(function() {
    timeShow()
}, 1000);