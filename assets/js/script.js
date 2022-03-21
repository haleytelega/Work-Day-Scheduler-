// //getting current date in jumbotron
    var getCurrentDate = moment().format("dddd, MMMM, Do");
    console.log(getCurrentDate);
    document.getElementById("currentDay").innerHTML=getCurrentDate;

//making text box clickale
$(".task").on("click", function() {
    var text = $(this).text().trim();
    console.log("text area has been clicked");

var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);

});

//saving the textbox
$(".saveBtn").on("click", function () {
    $(this).text($(this).text() == 'Save');

    $(".save").text("save");

    console.log("this saved");
});