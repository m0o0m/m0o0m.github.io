// flash control: original article - http://www.moock.org/webdesign/flash/fscommand/index.html; (research\tricks\flash-control-via-js.htm)
var movieName = "menu";

function thisMovie(movieName) {
  // IE and Netscape refer to the movie object differently.
  // This function returns the appropriate syntax depending on the browser.
  if (navigator.appName.indexOf ("Microsoft") !=-1) {
    return window[movieName]
  } else {
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

// language blocks switcher (using flash control functions - see above)
function P7_swapClass(){var i,x,tB,j=0,tA=new Array(),arg=P7_swapClass.arguments;if(document.getElementsByTagName){for(i=4;i<arg.length;i++){tB=document.getElementsByTagName(arg[i]);for(x=0;x<tB.length;x++){tA[j]=tB[x];j++}}for(i=0;i<tA.length;i++){if(tA[i].className){if(tA[i].id==arg[1]){if(arg[0]==1){tA[i].className=(tA[i].className==arg[3])?arg[2]:arg[3]}else{tA[i].className=arg[2]}}else if(arg[0]==1&&arg[1]=='none'){if(tA[i].className==arg[2]||tA[i].className==arg[3]){tA[i].className=(tA[i].className==arg[3])?arg[2]:arg[3]}}else if(tA[i].className==arg[2]){tA[i].className=arg[3]}}}}}
function switchLang()
{
    var en = document.getElementById('swt_en');
    var ru = document.getElementById('swt_ru');
    if(en)
    {
        en.onclick=function()
        {
            goTo(0);
            P7_swapClass(0,'en','on','off','div');P7_swapClass(0,'swt_en','on','off','li');
        }
        ru.onclick=function()
        {
            goTo(1);
            P7_swapClass(0,'ru','on','off','div');P7_swapClass(0,'swt_ru','on','off','li');
        }
    }
}

// Modal box control
function openModalOnClick()
{
    var links,i;
// loop through all links of the document
    links=document.getElementsByTagName('a');
    for(i=0;i<links.length;i++)
    {
// test if the rel 'open' exists
        if(/open/.test(links[i].rel))
        {
// add the function openModal to the link onclick
            links[i].onclick=function(){openModal();};
        }
    }
}

function menu_DoFSCommand(command, args)
{
    if (command == "open_modal")
    {
    var d = document;
    d.getElementById('overlay').style.display = 'block';
    d.getElementById('modal_box').style.display = 'block';
    }
}

function openModal()
{
    var d = document;
    d.getElementById('overlay').style.display = 'block';
    d.getElementById('modal_box').style.display = 'block';
}

window.onload=function()
{
    switchLang();
    openModalOnClick();
}
