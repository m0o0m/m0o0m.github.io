function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

// Authors: Patrick Griffiths and Dan Webb
// http://www.htmldog.com/
// Style classes used in script are .pc-hover

function pseudoclass(type, tag, parentId) {
	if (window.attachEvent) {
		window.attachEvent("onload", function() {
			var pcEls = (parentId==null)?document.getElementsByTagName(tag):document.getElementById(parentId).getElementsByTagName(tag);
			type(pcEls);
		});
	}
}

pcHover = function(pcEls) {
	for (var i=0; i<pcEls.length; i++) {
		pcEls[i].onmouseover=function() {
			this.className+=" pc-hover";
		}
		pcEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" pc-hover\\b"), "");
		}
	}
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