function Playlist() {//When we create a playlist, we want an empty array of songs created and that the index of the initial song to be zero.
  this.songs = []
  this.nowPlayingIndex = 0;

}

Playlist.prototype.add = function(song) {//The add method wants to take in a parameter of song.
  this.songs.push(song);//You can programmatically add items to this songs array with the push method. We can access the array this.songs, and we can push the song past into the add method call. So this method adds a new song to the playlist.
};

Playlist.prototype.play = function() {
  var currentSong = this.songs[this.nowPlayingIndex];//Both in the play method and the stop method, we need to get the current song to either play or stop. To access the current song from the array, we need to pass in the nowPlayingIndex. So when we call the play method on the playlist, it will play the current song. And if we stop on the current playlist, it will stop the current song.
  currentSong.play();
};

Playlist.prototype.stop = function(){
  var currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex ++;
  if (this.nowPlayingIndex === this.songs.length) {
    this.nowPlayingIndex = 0;
    }//We can test that after we've increased the nowPlayingIndex by one. If it equals the length of the songs in the array, then we know we've gone past the end of the array and we have to set it back to zero.
  
  this.play();//For the next method, we want to stop the currently playing song. We can do that by calling this.stop. We then want to increment the index by using the ++ operator to move the playlist along to the next song. And then we can do this.play, and this will play the newly selected song.
};

Playlist.prototype.renderInElement = function(list) {//In the rendering element method we can pass in a variable or parameter of list, meaning the ordered list that we've just selected.
  list.innerHTML= "";//Then we can empty the list by setting the innerHTML to the empty string.
  for(var i = 0; i< this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();//Let's cycle over each song. Let's set the variable i to 0, and if, i is less than the song's length, we want to increment the index by one. And then we want to add the songs HTML to the inner HTML of the list, and we can do that by doing list.innerhtml. And then we can use the += operator and this will add each of the songs HTML.

  }
};