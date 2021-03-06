$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var currenttemp = "Temperature: " + data.currently.temperature + " degrees";
    var currentconditions = "Conditions: " + data.currently.summary;
    var feelslike = "Feels Like: "+ data.currently.apparentTemperature + " degrees";
    var day1forecast = data.daily.summary;


    // End of your code

    $('.currenttemp').html(currenttemp);
    $('.currentconditions').html(currentconditions);
    $('.feelslike').html(feelslike)
    $('.day1forecast').html(day1forecast)
    // $('.alerts').html(alerts)


  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
