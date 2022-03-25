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
$("#hour-9 .task").val(localStorage.getItem("hour-9", "task"));
$("#hour-10 .task").val(localStorage.getItem("hour-10", "task"));
$("#hour-11 .task").val(localStorage.getItem("hour-11", "task"));
$("#hour-12 .task").val(localStorage.getItem("hour-12", "task"));
$("#hour-13 .task").val(localStorage.getItem("hour-13", "task"));
$("#hour-14 .task").val(localStorage.getItem("hour-14", "task"));
$("#hour-15 .task").val(localStorage.getItem("hour-15", "task"));
$("#hour-16 .task").val(localStorage.getItem("hour-16", "taskk"));
$("#hour-17 .task").val(localStorage.getItem("hour-17", "task"));

getTime();