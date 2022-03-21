var tasks = [];

//getting current date in jumbotron
    var getCurrentDate = moment().format("dddd, MMMM, Do");
    console.log(getCurrentDate);
    document.getElementById("currentDay").innerHTML=getCurrentDate;

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("task"));

    // $.each(tasks, function () {
    //     console.log("load tasks");
    // });
}

var saveTasks = function() {
        localStorage.setItem("task", JSON.stringify(tasks)); //Saves object in localStorage
    };

//saving the textbox
$(".saveBtn").on("click", function (event)  {

    $("#task-9")[0].id
    console.log(event.target.id)
    saveTasks();

    console.log("save was clicked");
});

loadTasks();