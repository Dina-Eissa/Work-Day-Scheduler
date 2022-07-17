//the current day is displayed at the top of the calendar
var today = moment().format("dddd, MMM Do YYYY");
$("#currentDay").text(today);

var $text9AM = $("#text9");
var $text10AM = $("#text10");
var $text11AM = $("#text11");
var $text12AM = $("#text12");
var $text1PM = $("#text13");
var $text2PM = $("#text14");
var $text3PM = $("#text15");
var $text4PM = $("#text16");
var $text5PM = $("#text17");

var now = parseInt(moment().format("HH"));
var messageDone = document.getElementById("message");

//each time block is color-coded to indicate whether it is in the past, present, or future
$("textarea").each(function () {
  var name = parseInt($(this).attr("data-hour"));
  if (name < now) {
    $(this).removeClass("future");
    $(this).addClass("past");
  }

  if (name > now) {
    $(this).addClass("future");
  }

  if (name === now) {
    $(this).removeClass("future");
    $(this).addClass("present");
  }
});

//function to display message when I save any event
function addMessage(event) {
  messageDone.style.display = "block";
  (messageDone.textContent = "Appointment Added to localStorage \u2705"),
    // time out after 3 second
    setTimeout(function () {
      messageDone.style.display = "none";
    }, 3000);
}

$("button").on("click", function () {
  //setting items in the local storage
  localStorage.setItem("9AM", $text9AM.val(), addMessage());
  localStorage.setItem("10AM", $text10AM.val(), addMessage());
  localStorage.setItem("11AM", $text11AM.val(), addMessage());
  localStorage.setItem("12AM", $text12AM.val(), addMessage());
  localStorage.setItem("13PM", $text1PM.val(), addMessage());
  localStorage.setItem("14PM", $text2PM.val(), addMessage());
  localStorage.setItem("15PM", $text3PM.val(), addMessage());
  localStorage.setItem("16PM", $text4PM.val(), addMessage());
  localStorage.setItem("17PM", $text5PM.val(), addMessage());
});

//getting the content stored and sending to the screen. When page is refreshed content will stay
$("#text9").append(localStorage.getItem("9AM"));
$("#text10").append(localStorage.getItem("10AM"));
$("#text11").append(localStorage.getItem("11AM"));
$("#text12").append(localStorage.getItem("12AM"));
$("#text13").append(localStorage.getItem("13PM"));
$("#text14").append(localStorage.getItem("14PM"));
$("#text15").append(localStorage.getItem("15PM"));
$("#text16").append(localStorage.getItem("16PM"));
$("#text17").append(localStorage.getItem("17PM"));
