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

function getTime () {
    var time = moment().set('hour', 9);

    var hour = document.getElementsByClassName(".hour");

    if (moment().isSame(time)) {
        $(".hour").addClass("present");
    }
    if (moment().isAfter(time)){
        $(".hour").addClass("future")
    }
    else {
        $(".hour").addClass("past")
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

loadTasks();