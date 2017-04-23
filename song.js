function Song(title,artist, duration) {
  Media.call(this, title, duration);//In JavaScript, you can call any function programmatically using the call method.The call method allows us to execute a function where we specify what the function should use as this. Remember the media constructor takes two parameters, title and duration. So the first parameter here is what we're telling the media function call to use as this.
  this.artist = artist;
}
  Song.prototype = Object.create(Media.prototype);//What this basically does is it copies the references to the Media's prototype properties and methods to the song's prototype. We're creating a prototype chain.




Song.prototype.toHTML = function() {
  var htmlString = '<li' 
  if (this.isPlaying) {
  htmlString += ' class="current"';
    }
   htmlString += '>';

  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};





/*
In Media.call();  call() is a method.
You can invoke a function using the call() method.  The first argument is the 
object that will be used as the value of the this keyword. This allows you to set 
and control what the this keyword is instead of relying on how javaScript is 
designed to use the this keyword.


Because this refers to the current object of the Song constructor function, whereas title and duration are the properties of the Media constructor. So, when we make a call to the Media constructor, we not only pass the current object, but also the values for the title and duration properties as arguments.

What we are trying to achieve here, is to inherit certain properties from the Media constructor function, as Song (also a constructor function) doesn't have it. This helps us with our DRY principle.


protoype chain

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function Ebook(title, author, fileSize) {
  Book.call(this, title, author);
  this.fileSize = fileSize;
}

Ebook.prototype = Object.create(Book.prototype);



*/

