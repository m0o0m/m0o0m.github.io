// This script allows you to make background asynchronous GET and POST requests to a
// server in an accessible manner that is backwards-compatible with older browsers,
// mobile devices, screenreaders and search engines.
//
// The overall architecture is assembled in 3 layers:
//
// 1) A "Transport" object ('HTMLHttpRequest') that makes a request to the server.
// 2) A "Threading" object ('RemoteFileLoader') that creates and allocates Transports
//    and provides an easy way of loading content into your existing page.
// 3) An "Interface" layer of code that captures clicks/submissions on the document.
//
// Layers (1) and (2) are objects included in the external .JS file above.
// Both contain documentation if you are interested in customising the implementation.
// Otherwise, the code below is the "Interface" layer that will process our document.

// First, we create an example object for our document click handler.
var docClickLoader = new RemoteFileLoader('docClickLoader');

// At any stage you can call docClickLoader.loadInto('file.html', 'IDOfTarget') to trigger
// a content load into an element from your script.
// The example below does this when suitable links in the document are clicked.

function loadInto(src, destId, evt)
{
 // Called to when a link with class="loadinto-IdOfTarget" is clicked.
 // Parameters: src = reference to link, destId = ID of target element, evt = event object.
 var ok = docClickLoader.loadInto(src.href || src.getAttribute('href'), destId);
 if (ok) cancelEvent(evt);
};

function toggleInto(src, destId, evt)
{
 // As above, but loads only once and toggles the display of the target.
 var dest = document.getElementById(destId);
 if (!dest.contentLoaded)
 {
  var ok = docClickLoader.loadInto(src.href || src.getAttribute('href'), destId);
  if (ok) dest.contentLoaded = true;
 }
 cancelEvent(evt);
 if (!dest.toggleState)
 {
  dest.style.display = 'block';
  dest.toggleState = 1;
 }
 else
 {
  dest.style.display = 'none';
  dest.toggleState = 0;
 }
};

// addEvent is defined within htmlhttprequest.js, feel free to reuse :).
addEvent(document, 'click', function(evt)
{
 // Here we capture all clicks on the document, scanning for links with a CLASS
 // attribute of "loadinto-IdOfTarget" and routing them to loadInto() above.
 evt = evt || window.event;
 var src = evt.target || evt.srcElement;
 if (src.nodeType && src.nodeType != 1) src = src.parentNode;
 // Loop up the DOM tree scanning all elements to find a matching one.
 while (src)
 {
  var srcName = (src.nodeName||src.tagName||'').toLowerCase();
  if (srcName == 'a' && src.className && src.className.match(/^(load|toggle)into-(.+)$/))
  {
   // Call our load handlers if we have a match; they'll cancel the normal action.
   if (RegExp.$1 == 'load') return loadInto(src, RegExp.$2, evt);
   if (RegExp.$1 == 'toggle') return toggleInto(src, RegExp.$2, evt);
  }
  src = src.parentNode;
 }
}, 1);