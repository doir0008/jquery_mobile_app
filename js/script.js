$(document).on('mobileinit', function( ) {
    // our code goes here to override any settings
    // this event runs as jQuery starts to prepare the page as a jQuery Mobile page
    // here we would set up default messages to the user and time delays for events like taphold.
    // or cross-domain requests for pages or data
 $.mobile.allowCrossDomainPages = true;
 $.support.cors = true;
}); 

$("#home").on('pageinit', function( ) {
    //inside here is where we place code that runs when a page has been enhanced
    //here we can start to work with the jQuery elements on the page.
});




// load new page
$.mobile.pageContainer.pagecontainer("change", "#contact", {userCount:12});

/// get id of new page on change

$(document).on('pagechange', function (ev, data) {

 console.log(data.toPage.attr('id'));

});

 

// or similar, an event specific to each div#id

$('#lesson1').on('pageshow', function (ev, data) {

  console.log("lesson 1 shown");

});