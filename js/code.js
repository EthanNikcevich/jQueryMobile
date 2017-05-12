/**
 * Created by h205p3 on 5/10/17.
 */
$(document).ready(function() {

    $("#searchbox").keyup(function(event){
        if(event.keyCode == 13){
            var term = $("#searchbox").text();
            alert(term);
        }
    });

});

var getArtist = function(term, success, failure) {
    $.ajax({
        url: "https://itunes.apple.com/search?term=" + userInput + "&media=music&entity=musicArtist",
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: success,
        error: failure
    });
};

var getSongs = function(artistID, success, failure) {
    $.ajax({
        url: "https://itunes.apple.com/lookup?id=" + artistID + "&media=music&entity=song",
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: success,
        error: failure
    });
};

