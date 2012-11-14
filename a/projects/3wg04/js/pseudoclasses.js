// Authors: Patrick Griffiths and Dan Webb
// http://www.htmldog.com/
// Style class used in script is .pc-hover

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

// The initial function takes a behavior name, a targeted tag and, optionally, a parent element id
pseudoclass(pcHover, "LI", "header");