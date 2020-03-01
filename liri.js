require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("node-spotify-api");
const axios = require("axios");
const moment = require("moment");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
let firstParameter = process.argv[2];

function concertFinder() {}

function spotifySongFinder() {}

function movieFinder() {}

function doWhatItSays() {}

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
