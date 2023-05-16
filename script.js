//A constant used to keep track of the total number of hour elements
const totalNumHours = 9;

//This function compares the the current indexed hours value to dayjs real time hour value,
//and updates the corresponding hour element
function updateHourCard(thisHour){
  var currentHour = dayjs().hour(); 
  var hourEl = $('div').children().eq(thisHour);
  var indexHour = thisHour + 9;
  if (indexHour == currentHour){
    hourEl.removeClass('past future present');
    hourEl.addClass('present');
  }
  else if (indexHour < currentHour){
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
  for (var i = 0; i < totalNumHours; i++){
    updateHourCard(i);
  }
}

//After the page is loaded then this function reads the local data and updates the corresponding Hours
function getLocalData(){
  for (var i = 0; i < totalNumHours; i++){
    $('textarea').eq(i).text(localStorage.getItem($('div').children().eq(i).attr('id')));
  }
}

//When the document is loaded, then it calls the initial functions
$(document).ready(function(){
  setInterval(updateDocument, 1000);
  getLocalData();
});

//When the save button is clicked then it saves the sibling elements string value,
//and assigns it a key equal to the parent elements id.
$("button").click(function(event){
  localStorage.setItem($(this).parent().attr('id'), $(this).siblings("textarea").val())
});
