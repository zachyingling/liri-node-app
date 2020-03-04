# liri-node-app

### Description

This application will be able to give the user concert's for the artist given from the user. It will also present different information about a track that you gave to the application. Also presenting information about the movie inputed into the command line argument. Aswell as reading data from the random.txt file. By default it is set to call to the spotify endpoint.

### Video Link

[Video](www.youtube.com)

## Instructions

If you want to run this application on your own, you will be able to use every command other than the spotify call unless you make your own api key.

#### Downloading My Files and Code

To use my application on your own you are going to have to download/clone all of the files in the repo.

1. On the main repo page, click the "Clone or download" green button.
1. Here you have 3 options
   1. Clone with HTTPS
   1. Clone with SSH
   1. Download ZIP folder(Easiest)
1. Once you have all of the files downloaded. In your terminal run the liri.js file with node in the liri-node-app directory. Given the proper commands and info.

#### Importing Your Own Spotify Keys

On my code, line 6, I have 'const spotify = new Spotify(keys.spotify);'. If you use your own keys, the code should look like 'const spotify = new Spotify({
id: <your spotify client id>,
secret: <your spotify client secret>
});'
