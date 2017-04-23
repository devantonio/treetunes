var playlist = new Playlist();//creating a new playlist instance 

var hereComesTheSun = new Song("Here comes the sun", "The Beatles", "2:54");
var iDidItMyWay = new Song("I did it my way", "Jay-Z", "3:54");


var manOfSteel = new Movie("Man of Steel", 2013, "2:23:00");

playlist.add(hereComesTheSun);//adds the songs to the playlist
playlist.add(iDidItMyWay);

playlist.add(manOfSteel);

var playlistElement = document.getElementById("playlist");////we can get the orderedlist by using the getElementById method, Using the string of playlist as our id.


playlist.renderInElement(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function () {
  playlist.play();
  playlist.renderInElement(playlistElement);//Because each one of these methods, play, stop, and next, alters the state of the objects, we need to refresh the UI. To do that we call the rendering element method on the playlist and pass the playlist element again.
  
}
var nextButton = document.getElementById("next");
nextButton.onclick = function () {
  playlist.next();
  playlist.renderInElement(playlistElement);
  
}

var stopButton = document.getElementById("stop");
stopButton.onclick = function () {
  playlist.stop();
  playlist.renderInElement(playlistElement);
  
}


var sp =" ";
var temperatures = [100,
                    90,
                    99,
                    80,
                    70,
                    65,
                    30,
                    10];

function printList ( list ) {
  
  for ( var i = 0; i < list.length; i += 1) {
   sp +=   list[i] + " ";
   }
    
   return sp;
}

console.log(printList(temperatures));