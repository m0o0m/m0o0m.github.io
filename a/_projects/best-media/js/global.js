//

function fixIE6flicker(fix) {
	try {
		document.execCommand("BackgroundImageCache", false, fix);
	} catch(err) { }
}
fixIE6flicker(true);

//

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
pseudoclass(pcHover, "LI");