var lastPageViewed = "step1";

$(document).on('mobileinit', function( ) {
 $.mobile.allowCrossDomainPages = true;
 $.support.cors = true;
}); 

$("#home").on('pageinit', function( ) {
});

$(document).on("click", "#tutorial", function( ev ){
    // console.log("click event ran!");
    if (lastPageViewed != false) {
        $.mobile.pageContainer.pagecontainer("change", "#" + lastPageViewed, {lastPageViewed});
        // console.log("did the page redirect");
    };
});

$(document).on("tap", "tutorial", function (ev){
    // console.log("click event ran!");
    if (lastPageViewed != false) {
        $.mobile.pageContainer.pagecontainer("change", "#" + lastPageViewed, {lastPageViewed});
        // console.log("did the page redirect");
    };
});

$(document).on('pagechange', function (ev, data) {
    if (data.toPage.attr('id') !== "home") {
        if (data.toPage.attr('id') !== "info") {
            lastPageViewed = data.toPage.attr('id'); 
            // console.log(lastPageViewed);
        };
    };
});

