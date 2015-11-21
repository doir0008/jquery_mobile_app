if (localStorage.getItem("lastPageViewed") == false) {
    localStorage.setItem("lastPageViewed", "step1");
}

/*
$(document).on('mobileinit', function( ) {
 $.mobile.allowCrossDomainPages = true;
 $.support.cors = true;
});
*/

// $("#home").on('pageinit', function( ) {});

$(document).on("click", "#tutorial", function( ev ){
    if (localStorage.getItem("lastPageViewed") != false) {
        $.mobile.pageContainer.pagecontainer("change", "#" + localStorage.getItem("lastPageViewed"), {});
    };
});

$(document).on("tap", "tutorial", function (ev){
    if (localStorage.getItem("lastPageViewed") != false) {
        $.mobile.pageContainer.pagecontainer("change", "#" + localStorage.getItem("lastPageViewed"), {});
    };
});

$(document).on('pagechange', function (ev, data) {
    if (data.toPage.attr('id') !== "home") {
        if (data.toPage.attr('id') !== "info") { 
            localStorage.setItem("lastPageViewed", data.toPage.attr('id'));
        };
    };
});

