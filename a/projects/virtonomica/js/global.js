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

/* 
	Javascript to style odd/even table rows
	Derived from 'Zebra Tables' by David F. Miller (http://www.alistapart.com/articles/zebratables/)
	
	Modified by Jop de Klein, february 2005
	jop at validweb.nl
	http://validweb.nl/artikelen/javascript/better-zebra-tables/
*/

var stripe = function() {
	var tables = document.getElementsByTagName("table");	

	for(var x=0;x!=tables.length;x++){
		var table = tables[x];
		if (! table) { return; }
		
		var tbodies = table.getElementsByTagName("tbody");
		
		for (var h = 0; h < tbodies.length; h++) {
			var even = true;
			var trs = tbodies[h].getElementsByTagName("tr");
			
			for (var i = 0; i < trs.length; i++) {
				trs[i].onmouseover=function(){
					this.className += " tr_pc_hover"; return false
				}
				trs[i].onmouseout=function(){
					this.className = this.className.replace("tr_pc_hover", ""); return false
				}
				
				if(even)
					trs[i].className += " even";
				
				even = !even;
			}
		}
	}
}

window.onload = stripe;

//

function fixIE6flicker(fix) {
	try {
		document.execCommand("BackgroundImageCache", false, fix);
	} catch(err) { }
}
fixIE6flicker(true);

//

function openModal(modalWidth)	
{
	var d = document;
	d.getElementById('overlay').style.display = 'block';
	d.getElementById('modal_box').style.width = modalWidth + 'px';
	d.getElementById('modal_box').style.display = 'block';
}

function closeModal()	
{
	var d = top.document;
	d.getElementById('overlay').style.display = 'none';
	d.getElementById('modal_box').style.display = 'none';
	
	d.getElementById('modal_box').innerHTML = '';
	document.getElementById('modal_box').toggleState = 0;
}

//

function sortTable ()
{
	js.include('/a/projects/virtonomica/js/sort-table');
}

//

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
pseudoclass(pcHover, "LI");