// based on Macromedia 'Netscape Resize Fix'
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if(document.all || document.getElementById)return;
  var targ = "mainframe";
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    top.MM_pgW=innerWidth; top.MM_pgH=innerHeight; onresize=MM_reloadPage;}}
  else if (innerWidth!=top.MM_pgW || innerHeight!=top.MM_pgH)top[targ].location.reload();top[targ].location.reload();
}
if(!document.all&&!document.getElementById)MM_reloadPage(true);