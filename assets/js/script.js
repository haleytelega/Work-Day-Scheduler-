var tasks = [];

//getting current date in jumbotron
    var getCurrentDate = moment().format("dddd, MMMM, Do");
    console.log(getCurrentDate);
    document.getElementById("currentDay").innerHTML=getCurrentDate;


function getTime () {
    var time = moment().hours();
    console.log(time);

    for(var i = 9; i <= 17; i++){
        var taskEl = document.getElementById(i);
        console.log(taskEl);
        if ( i == time) {
            $(taskEl).addClass("present");
        }
        else if (i > time){
            $(taskEl).addClass("future");
        }
        else {
            $(taskEl).addClass("past");
        }
    }
}

setInterval('refresh()', (1000 * 60) * 30);

//saving the textbox
$(".saveBtn").on("click", function ()  {
    var taskText = $(this).siblings(".task").val();
    var taskHour = $(this).parent().attr("id");

    localStorage.setItem(taskHour, taskText);

});

//getItem from localStorage
// var task1 = localStorage.getItem(taskHour, taskText);

getTime();