// Insert code below

var scriptsLoaded = 0;

document.addEventListener("DOMContentLoaded", function() {
  var css = document.createElement("link");
  css.setAttribute("rel", "stylesheet");
  css.setAttribute("href", "css/stylesheet.css"); 
  css.addEventListener("load", loadCount);
  document.querySelector("head").appendChild(css);
  var jq = document.createElement("script");
  jq.addEventListener("load", loadCount);
  jq.setAttribute("src","//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js");
  document.querySelector("head").appendChild(jq);
});

function buildWidget(container) {
    $.ajax({
        url: "https://api.forecast.io/forecast/07d46afa175283585f2ddf2b3d1dc17f/45.348391,-75.757045?units=ca",
        type: "GET",
        dataType: "jsonp"
    }).done(function(response) {
        displayWidget(response.currently,response.hourly,container); 
        console.log(response.currently,response.hourly,container);
    }).fail(function() {
        alert("An error occurred, please try again.");
    });
}

function displayWidget() {

}

function loadCount() {
    scriptsLoaded++;
    if (scriptsLoaded === 2) {
        buildWidget(".weather-forecast");
    }
}