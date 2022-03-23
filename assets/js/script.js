var tasks = [];

//getting current date in jumbotron
    var getCurrentDate = moment().format("dddd, MMMM, Do");
    console.log(getCurrentDate);
    document.getElementById("currentDay").innerHTML=getCurrentDate;

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("task"));
}

var saveTasks = function() {
        localStorage.setItem("task", JSON.stringify(tasks)); //Saves object in localStorage
    };

function getTime (taskEl) {
    var hour = $(taskEl).find("textarea").text().trim();
    console.log(hour); 

    var time = moment().hours();
    console.log(time);

    for(var i = 9; i <= 17; i++){
        var taskEl = document.getElementById([i]);
        if (taskEl < time) {
            $(taskEl).addClass("present");
        }
        else if (taskEl > time){
            $(taskEl).addClass("future");
        }
        else {
            $(taskEl).addClass("past");
        }
    }
}
//saving the textbox
$(".saveBtn").on("click", function ()  {
    // var taskText = $(this).closest(".task").val();

    // tasks.push({
    //     text: taskText
    // });

    // saveTasks();

    console.log("save was clicked");
});

getTime();

loadTasks();