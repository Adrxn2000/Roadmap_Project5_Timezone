
function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
    mo = now.getMonth(),    
    dnum = now.getDate(),
    yr = now.getFullYear(),
    h = now.getHours(),
    m = now.getMinutes(),
    s = now.getSeconds(),
    pe = "AM";

    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        pe = "PM";
    }

    Number.prototype.pad = function(digits){
        for(var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }



    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["day", "month", "daynum", "year", "hour", "minute", "second", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, h.pad(2), m.pad(2), s.pad(2), pe];
    for(var i=0; i<ids.length; i++)

    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function showTime(){
    updateClock();
     window.setInterval("updateClock()", 1);
 
 }
 
