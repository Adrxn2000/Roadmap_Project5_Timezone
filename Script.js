function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var timeString = "" + ((hours > 12) ? hours - 12 : hours);
    timeString  += ((minutes < 10) ? ":0" : ":") + minutes;
    timeString  += ((seconds < 10) ? ":0" : ":") + seconds;
    timeString  += (hours >= 12) ? " P.M." : " A.M.";
    document.getElementById("clock").firstChild.nodeValue = timeString;
}