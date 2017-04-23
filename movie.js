function Movie(title, year, duration) {
  Media.call(this, title, duration);//In JavaScript, you can call any function programmatically using the call method.The call method allows us to execute a function where we specify what the function should use as this. Remember the media constructor takes two parameters, title and duration. So the first parameter here is what we're telling the media function call to use as this.
  this.year = year;
}
  Movie.prototype = Object.create(Media.prototype);//What this basically does is it copies the references to the Media's prototype properties and methods to the song's prototype. We're creating a prototype chain.




Movie.prototype.toHTML = function() {
  var htmlString = '<li' 
  if (this.isPlaying) {
  htmlString += ' class="current"';
    }
   htmlString += '>';

  htmlString += this.title;
  htmlString += ' (';
  htmlString += this.year;
  htmlString += ' )';
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};
