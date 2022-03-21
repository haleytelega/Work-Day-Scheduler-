var tasks = [];

//getting current date in jumbotron
    var getCurrentDate = moment().format("dddd, MMMM, Do");
    console.log(getCurrentDate);
    document.getElementById("currentDay").innerHTML=getCurrentDate;

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("task"));

    if (!tasks) {
        tasks = {
            newTask: []
        };
    }

    $.each(tasks, function () {
        console.log("load tasks");
    });
}

var saveTasks = function() {
        localStorage.setItem("task", JSON.stringify(tasks)); //Saves object in localStorage
    };

//saving the textbox
$(".saveBtn").on("click", function ()  {

    var newTask = $("textarea").val();

    tasks.push({
        newTask
    });

    saveTasks();

    console.log("save was clicked");
});

loadTasks();