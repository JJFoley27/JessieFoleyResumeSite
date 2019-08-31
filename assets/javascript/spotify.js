var lastfmData = {
  baseURL:
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
  // Your Last.fm Username
  user: "jester5537",
  // Your API key
  api_key: "f60f0a3dc6c081165b62392b957e3b45",
  additional: "&format=json&limit=4"
};

var getSetLastFM = function() {
  $.ajax({
    type: "GET",
    url:
      lastfmData.baseURL +
      lastfmData.user +
      "&api_key=" +
      lastfmData.api_key +
      lastfmData.additional,
    dataType: "json",
    success: function(resp) {
      var recentTrack = resp.recenttracks.track[0];
      var recent1 = resp.recenttracks.track[1];
      var recent2 = resp.recenttracks.track[2];
      var recent3 = resp.recenttracks.track[3];
      var formatted =
        "<img src='https://i.imgur.com/EgWjJry.png'>" + recentTrack.name;
      $("a#tracktitle")
          .html(formatted)
          .attr("href", recentTrack.url)
          .attr("title", recentTrack.name + " by " + recentTrack.artist["#text"])
          .attr("target", "_blank");
      $("a#track2title")
          .html(recent1.name)
          .attr("href", recent1.url)
          .attr("title", recent1.name + " by " + recent1.artist["#text"])
          .attr("target", "_blank");
      $("a#track3title")
          .html(recent2.name)
          .attr("href", recent2.url)
          .attr("title", recent2.name + " by " + recent2.artist["#text"])
          .attr("target", "_blank");
      $("a#track4title")
          .html(recent3.name)
          .attr("href", recent3.url)
          .attr("title", recent3.name + " by " +  recent3.artist["#text"])
          .attr("target", "_blank");

      var artistFormatted =
        "<img src='https://i.imgur.com/fae5XZA.png'>" +
        recentTrack.artist["#text"];
      $("a#trackartist")
        .html(artistFormatted)
        .attr("title", "Artist : " + recentTrack.artist["#text"]);
      $("a#track2artist")
        .html(recent1.artist["#text"])
        .attr("title", "Artist : " + recent1.artist["#text"]);
      $("a#track3artist")
        .html(recent2.artist["#text"])
        .attr("title", "Artist : " + recent2.artist["#text"]);
      $("a#track4artist")
        .html(recent3.artist["#text"])
        .attr("title", "Artist : " + recent3.artist["#text"]);

      $("img#trackart").attr("src", recentTrack.image[2]["#text"]);
      $("img#track2art").attr("src", recent1.image[1]["#text"]);
      $("img#track3art").attr("src", recent2.image[1]["#text"]);
      $("img#track4art").attr("src", recent3.image[1]["#text"]);
     // alert(resp.recenttracks.track[1].name)
    },
    error: function(resp) {
      $("a#tracktitle").html(
        "<img src='https://i.imgur.com/EgWjJry.png'>" + "Silence!"
      );
      $("img#trackart").attr("src", "https://picsum.photos/80");
      var artistFormatted =
        "<img src='https://i.imgur.com/fae5XZA.png'>Prashant Shrestha";
      $("a#trackartist")
        .html(artistFormatted)
        .attr("href", "www.prashant.me/");
    }
  });
};

// Get the new one.
getSetLastFM();
// Start the countdown.
setInterval(getSetLastFM, 10 * 1000);
var lastfmData = {
    baseURL:
      "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=",
    // Your Last.fm Username
    user: "jester5537",
    // Your API key
    api_key: "f60f0a3dc6c081165b62392b957e3b45",
    additional: "&format=json&limit=4"
  };
  