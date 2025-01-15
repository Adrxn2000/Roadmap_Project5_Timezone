
// import dayjs from "dayjs";
// import utc from "dayjs/plugin/utc.js";
// import timezone from "dayjs/plugin/timezone.js";
dayjs.extend(window.dayjs_plugin_utc);  
dayjs.extend(window.dayjs_plugin_timezone); 

function Dropdown() {
    console.log("Dropdown");
    
    const selector = document.querySelector(".timezone-selector");
    selector.classList.toggle("open");
};
document.getElementById("dropdown").addEventListener("click", Dropdown);
// Toggle the dropdown visibility
let selectedTimezone 
// Update the time when a timezone is selected
window.updateSelectedTimezone = () => {
     selectedTimezone = document.getElementById("timezone-select").value;
    updateTime(selectedTimezone); // Update the displayed time
    document.querySelector(".timezone-selector").classList.remove("open"); // Hide the dropdown
};

// Function to update the time display
function updateTime(timezone) {
    const now = dayjs().tz( selectedTimezone);

    document.getElementById("day").textContent = now.format("dddd");
    document.getElementById("month").textContent = now.format("MMMM");
    document.getElementById("daynum").textContent = now.format("DD");
    document.getElementById("year").textContent = now.format("YYYY");
    document.getElementById("hour").textContent = now.format("HH");
    document.getElementById("minute").textContent = now.format("mm");
    document.getElementById("second").textContent = now.format("ss");
    document.getElementById("period").textContent = now.format("A");
}

// Initial Time Display
updateTime(); // Default timezone is UTC
setInterval( () => updateTime() , 1);













/*function updateClock(){
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
 
 }*/
 
