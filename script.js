//date
function showTime(){
    var date = new Date();
    var year = date.getFullYear();
        if(year < 1000){
            year += 1900
        }
    var day = date.getDay();
    var month = date.getMonth();
    var daym = date.getDate();
    var dayarray = new Array("Sun.","Mon.","Tue.", "Wed.","Thurs.","Fri.","Sat.");
    var montharray = new Array("Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec.");

//time
var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();
        if(hour == 24){
            hour = 0;
        } else if(hour > 12){
            hour = hour - 0;
        }
        
        if(hour < 10){
            hour = "0" + hour;
        }

        if(min < 10){
            min = "0" + min;
        }

        if(sec < 10){
            sec = "0" + sec;
        }

        var myClock = document.getElementById("clockDisplay");
        myClock.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +hour+":"+min+":"+sec;
        myClock.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year+ " | " +hour+":"+min+":"+sec;

        setTimeout("showTime()", 1000);
}
showTime();



function openNav() {
    document.getElementById("mySidebar").style.width = "320px";
    document.getElementById("main").style.marginLeft = "320px";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }


