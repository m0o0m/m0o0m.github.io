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

pcFocus = function(pcEls) {
	for (var i=0; i<pcEls.length; i++) {
		pcEls[i].onfocus=function() {
			this.className+=" pc-focus";
		}
		pcEls[i].onblur=function() {
			this.className=this.className.replace(new RegExp(" pc-focus\\b"), "");
		}
	}
}

pcActive = function(pcEls) {
	for (var i=0; i<pcEls.length; i++) {
		pcEls[i].onmousedown=function() {
			this.className+=" pc-active";
		}
		pcEls[i].onmouseup=function() {
			this.className=this.className.replace(new RegExp(" pc-active\\b"), "");
		}
	}
}

pcTarget = function(pcEls) {
	var aEls = document.getElementsByTagName("A");
	document.lastTarget = null;
	for (var i=0; i<pcEls.length; i++) {
		if (pcEls[i].id) {
			if (location.hash==("#" + pcEls[i].id)) {
				pcEls[i].className+=" pc-target";
				document.lastTarget=pcEls[i];
			}
			for (var j=0; j<aEls.length; j++) {
				if (aEls[j].hash==("#" + pcEls[i].id)) aEls[j].targetEl = pcEls[i];
				aEls[j].onclick = function() {
					if (document.lastTarget) document.lastTarget.className = document.lastTarget.className.replace(new RegExp(" pc-target\\b"), "");
					if (this.targetEl) this.targetEl.className+=" pc-target";
					document.lastTarget=this.targetEl;
					return true;
				}
			}
		}
	}
}

// The initial function takes a behavior name, a targeted tag and, optionally, a parent element id
pseudoclass(pcHover, "LI");