var lastPageViewed = "step1";

$(document).on('mobileinit', function( ) {
 $.mobile.allowCrossDomainPages = true;
 $.support.cors = true;
}); 

$(document).on("click", "#tutorial", function( ev ){
    if (lastPageViewed != false) {
        $.mobile.pageContainer.pagecontainer("change", "#" + lastPageViewed, {lastPageViewed});
    };
});

$(document).on("tap", "tutorial", function (ev){
    if (lastPageViewed != false) {
        $.mobile.pageContainer.pagecontainer("change", "#" + lastPageViewed, {lastPageViewed});
    };
});

$(document).on('pagechange', function (ev, data) {
    if (data.toPage.attr('id') !== "home") {
        if (data.toPage.attr('id') !== "info") {
            lastPageViewed = data.toPage.attr('id'); 
        };
    };
});