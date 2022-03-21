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
$(".saveBtn").on("click", function ()  {

    var newTask1 = $("#task1").val();
    var newTask2 = $("#task2").val();
    
    if (!tasks) {
        tasks = {
            text: newTask1,
            text: newTask2
        };
    }

    saveTasks();

    console.log("save was clicked");
});

loadTasks();