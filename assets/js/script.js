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

setInterval(getTime(), (1000 * 60) * 30);

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks)); //Saves object in localStorage
};

//saving the textbox
$(".saveBtn").on("click", function ()  {
    var task = $(".task").val();
    var date = $("#hours").val();


    console.log("save was clicked");
});

getTime();