// //getting current date in jumbotron
    var getCurrentDate = moment().format("dddd, MMMM, Do");
    console.log(getCurrentDate);
    document.getElementById("currentDay").innerHTML=getCurrentDate;

//making text box clickale
// $(".task").text("this is working");
$(".task").on("click", function() {
    var text = $(this).text().trim();
    console.log("button is clicked");

var textInput = $("<textarea>").val(text);
    $(this).replaceWith(textInput);

});