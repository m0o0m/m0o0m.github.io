// flash control: original article - http://www.moock.org/webdesign/flash/fscommand/index.html; (research\tricks\flash-control-via-js.htm)
var movieName = "menu";

function thisMovie(movieName) {
  // IE and Netscape refer to the movie object differently.
  // This function returns the appropriate syntax depending on the browser.
  if (navigator.appName.indexOf ("Microsoft") !=-1) {
    return window[movieName]
  }	else {
    return document[movieName]
  }
}

// Checks if movie is completely loaded.
// Returns true if yes, false if no.
function movieIsLoaded (theMovie) {
  if (typeof(theMovie) != "undefined") {
    return theMovie.PercentLoaded() == 100;
  } else {
    return false;
  }
}

function goTo(theFrame) {
  if (movieIsLoaded(thisMovie(movieName))) {
    thisMovie(movieName).GotoFrame(theFrame);
  }
}