function MM_showHideLayers() { //v9.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) 
  with (document) if (getElementById && ((obj=getElementById(args[i]))!=null)) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'block':(v=='hide')?'none':v; }
    obj.display=v; }
}

function closeModal()	
{
	var d = top.document;
	d.getElementById('overlay').style.display = 'none';
	d.getElementById('modal_box_wrapper').style.display = 'none';
	
	d.getElementById('modal_box').innerHTML = '';
	document.getElementById('modal_box').toggleState = 0;
}
//

var selected_id = 'option_everywhere'; 
function down (id,oldclass,newclass){ 
if(selected_id != null) { 
document.getElementById(selected_id).className = oldclass; 
} 
document.getElementById(id).className = newclass; 
selected_id = id; 
}

//

function P7_swapClass(){ //v1.4 by PVII
 var i,x,tB,j=0,tA=new Array(),arg=P7_swapClass.arguments;
 if(document.getElementsByTagName){for(i=4;i<arg.length;i++){tB=document.getElementsByTagName(arg[i]);
  for(x=0;x<tB.length;x++){tA[j]=tB[x];j++;}}for(i=0;i<tA.length;i++){
  if(tA[i].className){if(tA[i].id==arg[1]){if(arg[0]==1){
  tA[i].className=(tA[i].className==arg[3])?arg[2]:arg[3];}else{tA[i].className=arg[2];}
  }else if(arg[0]==1 && arg[1]=='none'){if(tA[i].className==arg[2] || tA[i].className==arg[3]){
  tA[i].className=(tA[i].className==arg[3])?arg[2]:arg[3];}
  }else if(tA[i].className==arg[2]){tA[i].className=arg[3];}}}}
}

// IE sections

function fixIE6flicker(fix) {
	try {
		document.execCommand("BackgroundImageCache", false, fix);
	} catch(err) { }
}
fixIE6flicker(true);

// Authors: Patrick Griffiths and Dan Webb
// http://www.htmldog.com/
// Style classes used in script are .pc_hover

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
			this.className+=" pc_hover";
		}
		pcEls[i].onmouseout=function() {
			this.className=this.className.replace(new RegExp(" pc_hover\\b"), "");
		}
	}
}

// The initial function takes a behavior name, a targeted tag and, optionally, a parent element id
pseudoclass(pcHover, "LABEL");
pseudoclass(pcHover, "LI");

//