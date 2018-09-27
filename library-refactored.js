
var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
              for (var playlistID in library.playlists) {
                var playlist = library.playlists[playlistID];
                console.log(playlist.id + ':' + playlist.name + ' - ' + playlist.tracks.length + ' tracks')
              }
            },

  printTracks : function () {
              for (var trackID in library.tracks) {
                var track = library.tracks[trackID];
                console.log(track.id + ':' + track.name + ' by ' + track.artist + '(' + track.album + ')')
              }
            },
  uid : function() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

          },
  printPlaylist : function (playlistId) {
        playListInfo = library.playlists[playlistId];
        console.log(playListInfo.id + ': ' + playListInfo.name + ' - ' + playListInfo.tracks.length + ' tracks');
        var trackInfo = playListInfo.tracks;
        for (var i = 0; i < trackInfo.length; i++) {
          var trackRef = library.tracks[trackInfo[i]];
          console.log(trackRef.id + ': ' + trackRef.name + ' by ' + trackRef.artist + '(' + trackRef.album + ')');
        }
      },
  addTrackToPlaylist : function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);


      },

  addTrack : function (newName, newArtist, newAlbum) {
        var newId = library.uid();
        var value = {
          id : newId ,
         name : newName,
          artist : newArtist ,
          album : newAlbum
        }
          library.tracks[newId] = value;
        },

   addPlaylist : function (plName) {
   var anotherId = uid();
   var newPlaylist = {
    id: anotherId,
    name : plName,
    tracks: []

  }
  library.playlists[anotherId] = newPlaylist ;
},




  }

// FUNCTIONS TO IMPLEMENT:
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
// var printPlaylists = function () {
//   for (var playlistID in library.playlists) {
//     var playlist = library.playlists[playlistID];
//     console.log(playlist.id + ':' + playlist.name + ' - ' + playlist.tracks.length + ' tracks')
//   }
// }

// library.printPlaylists();

// library.printTracks();

// library.printPlaylist("p02");

library.addTrackToPlaylist("t01" , "p02");
console.log(library.playlists);

// library.addTrack("Its my life", "Bon jovi", "Not sure");

// library.addPlaylist("first added playlist");



// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

// var printTracks = function () {
//   for (var trackID in library.tracks) {
//     var track = library.tracks[trackID];
//     console.log(track.id + ':' + track.name + ' by ' + track.artist + '(' + track.album + ')')
//   }
// }

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

// var printPlaylist = function (playlistId) {
//   playListInfo = library.playlists[playlistId];
//   console.log(playListInfo.id + ': ' + playListInfo.name + ' - ' + playListInfo.tracks.length + ' tracks');
//   var trackInfo = playListInfo.tracks;
//   for (var i = 0; i < trackInfo.length; i++) {
//     var trackRef = library.tracks[trackInfo[i]];
//     console.log(trackRef.id + ': ' + trackRef.name + ' by ' + trackRef.artist + '(' + trackRef.album + ')');
//   }
// }

// adds an existing track to an existing playlist





// generates a unique id
// (use this for addTrack and addPlaylist)
// var uid = function() {
//   return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

// }

// adds a track to the library





// adds a playlist to the library

// console.log(library.playlists)

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
// var printSearchResults = function(query) {
// }

