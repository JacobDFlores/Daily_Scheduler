//These variables are linked to the entire hour Elements using jquery
var hourNine = $('#hour-9');
var hourTen = $('#hour-10');
var hourEleven = $('#hour-11');
var hourTwelve = $('#hour-12');
var hourThirteen = $('#hour-13');
var hourFourteen = $('#hour-14');
var hourFifteen = $('#hour-15');
var hourSixteen = $('#hour-16');
var hourSeventeen = $('#hour-17');

//These arrays are used to store the hour elements, and the hours value
var arrayHourEl = [hourNine, hourTen, hourEleven, hourTwelve,
                  hourThirteen, hourFourteen, hourFifteen,
                  hourSixteen, hourSeventeen];
var arrayHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//This function compares the the current indexed hours value to dayjs real time hour value,
//and updates the current indexed hour elemtent's class accordingly.
function updateHourCard(thisHour){
  var currentHour = dayjs().hour();//<<<<-----we can substitue 'dayjs().hour();' with any military time number to test the websites reaction. 
  var hourEl = arrayHourEl[thisHour];
  if (arrayHours[thisHour] == currentHour){
    hourEl.removeClass('past future present');
    hourEl.addClass('present');
  }
  else if (arrayHours[thisHour] < currentHour){
    hourEl.removeClass('past future present');
    hourEl.addClass('past');
  }
  else{
    hourEl.removeClass('past future present');
    hourEl.addClass('future');
  }
}

//This function is called every second after the document is loaded, and updates the websites appearances based off the current time.
function updateDocument(){
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, h:mm:ss a'));

  for (var i = 0; i < arrayHours.length; i++){
    updateHourCard(i);
  }
}

$(document).ready(function(){
  setInterval(updateDocument, 1000);
}); 
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.



