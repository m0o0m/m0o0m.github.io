//Open browser window

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

//Reload the window if Nav4 resized

function MM_reloadPage(init) {
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);

//Find object

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

//Show-Hide layers

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

/*
	firdom() version 1.1 (24.11.2003)
	written by Chris Heilmann (http://www.onlinetools.org)
*/

function firdom(){
	if(document.getElementsByTagName && document.createElement){
		for (var l=1;l<=6;l++){
			var h1s=document.getElementsByTagName('h'+l);
			scanandreplace(h1s,'h'+l);
		}
	}
}
function scanandreplace(h1s,tag){
	for(var i=0;i<h1s.length;i++){
		for(var f=0;f<replaceImages.length;f++){
			var chunks=replaceImages[f].split('|');
			var thish1=document.getElementsByTagName(tag)[i];
			if(thish1.firstChild.nodeValue==chunks[0]){
				var newImg=document.createElement('img');			
				newImg.setAttribute('alt',chunks[0])
				newImg.setAttribute('src',chunks[1])
				// or newImg.src=chunks[1];
				thish1.replaceChild(newImg,thish1.firstChild)
				break;
			}
		}
	}
}