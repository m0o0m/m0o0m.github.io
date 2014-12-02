function fixIE6flicker(fix){try{document.execCommand("BackgroundImageCache",false,fix)}catch(err){}}fixIE6flicker(true);

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

// flash in ie - ac run active content
var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;function ControlVersion(){var version;var axo;var e;try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");version=axo.GetVariable("$version")}catch(e){}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");version="WIN 6,0,21,0";axo.AllowScriptAccess="always";version=axo.GetVariable("$version")}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");version=axo.GetVariable("$version")}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");version="WIN 3,0,18,0"}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");version="WIN 2,0,0,11"}catch(e){version=-1}}return version}function GetSwfVer(){var flashVer=-1;if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swVer2=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var flashDescription=navigator.plugins["Shockwave Flash"+swVer2].description;var descArray=flashDescription.split(" ");var tempArrayMajor=descArray[2].split(".");var versionMajor=tempArrayMajor[0];var versionMinor=tempArrayMajor[1];var versionRevision=descArray[3];if(versionRevision==""){versionRevision=descArray[4]}if(versionRevision[0]=="d"){versionRevision=versionRevision.substring(1)}else if(versionRevision[0]=="r"){versionRevision=versionRevision.substring(1);if(versionRevision.indexOf("d")>0){versionRevision=versionRevision.substring(0,versionRevision.indexOf("d"))}}var flashVer=versionMajor+"."+versionMinor+"."+versionRevision}}else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1)flashVer=4;else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1)flashVer=3;else if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1)flashVer=2;else if(isIE&&isWin&&!isOpera){flashVer=ControlVersion()}return flashVer}function DetectFlashVer(reqMajorVer,reqMinorVer,reqRevision){versionStr=GetSwfVer();if(versionStr==-1){return false}else if(versionStr!=0){if(isIE&&isWin&&!isOpera){tempArray=versionStr.split(" ");tempString=tempArray[1];versionArray=tempString.split(",")}else{versionArray=versionStr.split(".")}var versionMajor=versionArray[0];var versionMinor=versionArray[1];var versionRevision=versionArray[2];if(versionMajor>parseFloat(reqMajorVer)){return true}else if(versionMajor==parseFloat(reqMajorVer)){if(versionMinor>parseFloat(reqMinorVer))return true;else if(versionMinor==parseFloat(reqMinorVer)){if(versionRevision>=parseFloat(reqRevision))return true}}return false}}function AC_AddExtension(src,ext){if(src.indexOf('?')!=-1)return src.replace(/\?/,ext+'?');else return src+ext}function AC_Generateobj(objAttrs,params,embedAttrs){var str='';if(isIE&&isWin&&!isOpera){str+='<object ';for(var i in objAttrs){str+=i+'="'+objAttrs[i]+'" '}str+='>';for(var i in params){str+='<param name="'+i+'" value="'+params[i]+'" /> '}str+='</object>'}else{str+='<embed ';for(var i in embedAttrs){str+=i+'="'+embedAttrs[i]+'" '}str+='> </embed>'}document.write(str)}function AC_FL_RunContent(){var ret=AC_GetArgs(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs)}function AC_SW_RunContent(){var ret=AC_GetArgs(arguments,".dcr","src","clsid:166B1BCA-3F9C-11CF-8075-444553540000",null);AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs)}function AC_GetArgs(args,ext,srcParamName,classid,mimeType){var ret=new Object();ret.embedAttrs=new Object();ret.params=new Object();ret.objAttrs=new Object();for(var i=0;i<args.length;i=i+2){var currArg=args[i].toLowerCase();switch(currArg){case"classid":break;case"pluginspage":ret.embedAttrs[args[i]]=args[i+1];break;case"src":case"movie":args[i+1]=AC_AddExtension(args[i+1],ext);ret.embedAttrs["src"]=args[i+1];ret.params[srcParamName]=args[i+1];break;case"onafterupdate":case"onbeforeupdate":case"onblur":case"oncellchange":case"onclick":case"ondblClick":case"ondrag":case"ondragend":case"ondragenter":case"ondragleave":case"ondragover":case"ondrop":case"onfinish":case"onfocus":case"onhelp":case"onmousedown":case"onmouseup":case"onmouseover":case"onmousemove":case"onmouseout":case"onkeypress":case"onkeydown":case"onkeyup":case"onload":case"onlosecapture":case"onpropertychange":case"onreadystatechange":case"onrowsdelete":case"onrowenter":case"onrowexit":case"onrowsinserted":case"onstart":case"onscroll":case"onbeforeeditfocus":case"onactivate":case"onbeforedeactivate":case"ondeactivate":case"type":case"codebase":case"id":ret.objAttrs[args[i]]=args[i+1];break;case"width":case"height":case"align":case"vspace":case"hspace":case"class":case"title":case"accesskey":case"name":case"tabindex":ret.embedAttrs[args[i]]=ret.objAttrs[args[i]]=args[i+1];break;default:ret.embedAttrs[args[i]]=ret.params[args[i]]=args[i+1]}}ret.objAttrs["classid"]=classid;if(mimeType)ret.embedAttrs["type"]=mimeType;return ret}

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
