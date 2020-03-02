require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const axios = require("axios");
const moment = require("moment");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
let firstParameter = process.argv[2];

function concertFinder() {
  let artist = process.argv[3];

  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        artist +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      if (response.data.length === 0) {
        console.log(
          "Your artist was found but it looks like they aren't going on tour anymore unfortunately."
        );
      } else {
        console.log(response.data);
      }
    })
    .catch(function(error) {
      console.log(
        "This artist wasn't found. Check your spelling and if it's a two word artist put it in \"\"s or instead of spaces put + signs."
      );
    });
}

function spotifySongFinder() {
  let querySearch = process.argv[3];

  if (querySearch === "" || querySearch === undefined) {
    spotifyCall("The Sign");
  } else {
    spotifyCall(querySearch);
  }
}

function spotifyCall(querySearch) {
  // querySearch parameter will always be the track that you are trying to search for
  spotify.search({ type: "track", query: querySearch, limit: 20 }, function(
    err,
    data
  ) {
    if (err) {
      return console.log("Error occurred: " + err);
    } else if (data.tracks.total === 0) {
      console.log(
        "The track wasn't found. Check your spelling and if it's a two word song put it in \"\"s or instead of spaces put + signs."
      );
    } else {
      console.log(data);
    }
  });
}

function movieFinder() {
  // Format on node of movie should be in "" or the spaces of the movie need to be plus signs
  // Finish console loging the necessary information
  let movieName = process.argv[3];

  axios
    .get(
      "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    )
    .then(function(response) {
      // If the axios was successful...
      // Then log the body from the site!
      console.log(response.data);
    })
    .catch(function(error) {
      console.log("That movie wasn't found. Try again.");
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }

    console.log(data);

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    // Assumes that the first parameter in the random.txt will always be "spotify-this-song"
    // If you want to make it for all of the commands make if-else statements to check firstParameter value
    firstParameter = dataArr[0];
    spotifyCall(dataArr[1]);
  });
}

function commandSelector() {
  if (firstParameter === "concert-this") {
    concertFinder();
  } else if (firstParameter === "spotify-this-song") {
    spotifySongFinder();
  } else if (firstParameter === "movie-this") {
    movieFinder();
  } else if (firstParameter === "do-what-it-says") {
    doWhatItSays();
  } else {
    console.log(
      "This isn't a valid command. Try a different command or check your spelling."
    );
  }
}

commandSelector();
