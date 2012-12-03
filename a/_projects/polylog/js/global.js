/* Check Flash Version, Insert Object and Run Active Content */
var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;function ControlVersion(){var version;var axo;var e;try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");version=axo.GetVariable("$version")}catch(e){}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");version="WIN 6,0,21,0";axo.AllowScriptAccess="always";version=axo.GetVariable("$version")}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");version=axo.GetVariable("$version")}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");version="WIN 3,0,18,0"}catch(e){}}if(!version){try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");version="WIN 2,0,0,11"}catch(e){version=-1}}return version}function GetSwfVer(){var flashVer=-1;if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swVer2=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var flashDescription=navigator.plugins["Shockwave Flash"+swVer2].description;var descArray=flashDescription.split(" ");var tempArrayMajor=descArray[2].split(".");var versionMajor=tempArrayMajor[0];var versionMinor=tempArrayMajor[1];var versionRevision=descArray[3];if(versionRevision==""){versionRevision=descArray[4]}if(versionRevision[0]=="d"){versionRevision=versionRevision.substring(1)}else if(versionRevision[0]=="r"){versionRevision=versionRevision.substring(1);if(versionRevision.indexOf("d")>0){versionRevision=versionRevision.substring(0,versionRevision.indexOf("d"))}}var flashVer=versionMajor+"."+versionMinor+"."+versionRevision}}else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1)flashVer=4;else if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1)flashVer=3;else if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1)flashVer=2;else if(isIE&&isWin&&!isOpera){flashVer=ControlVersion()}return flashVer}function DetectFlashVer(reqMajorVer,reqMinorVer,reqRevision){versionStr=GetSwfVer();if(versionStr==-1){return false}else if(versionStr!=0){if(isIE&&isWin&&!isOpera){tempArray=versionStr.split(" ");tempString=tempArray[1];versionArray=tempString.split(",")}else{versionArray=versionStr.split(".")}var versionMajor=versionArray[0];var versionMinor=versionArray[1];var versionRevision=versionArray[2];if(versionMajor>parseFloat(reqMajorVer)){return true}else if(versionMajor==parseFloat(reqMajorVer)){if(versionMinor>parseFloat(reqMinorVer))return true;else if(versionMinor==parseFloat(reqMinorVer)){if(versionRevision>=parseFloat(reqRevision))return true}}return false}}function AC_AddExtension(src,ext){if(src.indexOf('?')!=-1)return src.replace(/\?/,ext+'?');else return src+ext}function AC_Generateobj(objAttrs,params,embedAttrs){var str='';if(isIE&&isWin&&!isOpera){str+='<object ';for(var i in objAttrs){str+=i+'="'+objAttrs[i]+'" '}str+='>';for(var i in params){str+='<param name="'+i+'" value="'+params[i]+'" /> '}str+='</object>'}else{str+='<embed ';for(var i in embedAttrs){str+=i+'="'+embedAttrs[i]+'" '}str+='> </embed>'}document.write(str)}function AC_FL_RunContent(){var ret=AC_GetArgs(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs)}function AC_SW_RunContent(){var ret=AC_GetArgs(arguments,".dcr","src","clsid:166B1BCA-3F9C-11CF-8075-444553540000",null);AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs)}function AC_GetArgs(args,ext,srcParamName,classid,mimeType){var ret=new Object();ret.embedAttrs=new Object();ret.params=new Object();ret.objAttrs=new Object();for(var i=0;i<args.length;i=i+2){var currArg=args[i].toLowerCase();switch(currArg){case"classid":break;case"pluginspage":ret.embedAttrs[args[i]]=args[i+1];break;case"src":case"movie":args[i+1]=AC_AddExtension(args[i+1],ext);ret.embedAttrs["src"]=args[i+1];ret.params[srcParamName]=args[i+1];break;case"onafterupdate":case"onbeforeupdate":case"onblur":case"oncellchange":case"onclick":case"ondblclick":case"ondrag":case"ondragend":case"ondragenter":case"ondragleave":case"ondragover":case"ondrop":case"onfinish":case"onfocus":case"onhelp":case"onmousedown":case"onmouseup":case"onmouseover":case"onmousemove":case"onmouseout":case"onkeypress":case"onkeydown":case"onkeyup":case"onload":case"onlosecapture":case"onpropertychange":case"onreadystatechange":case"onrowsdelete":case"onrowenter":case"onrowexit":case"onrowsinserted":case"onstart":case"onscroll":case"onbeforeeditfocus":case"onactivate":case"onbeforedeactivate":case"ondeactivate":case"type":case"codebase":case"id":ret.objAttrs[args[i]]=args[i+1];break;case"width":case"height":case"align":case"vspace":case"hspace":case"class":case"title":case"accesskey":case"name":case"tabindex":ret.embedAttrs[args[i]]=ret.objAttrs[args[i]]=args[i+1];break;default:ret.embedAttrs[args[i]]=ret.params[args[i]]=args[i+1]}}ret.objAttrs["classid"]=classid;if(mimeType)ret.embedAttrs["type"]=mimeType;return ret}

//HTMLHttpRequest v1.0beta by Angus Turnbull http://www.twinhelix.com
if(typeof addEvent!='function'){var addEvent=function(o,t,f,l){var d='addEventListener',n='on'+t,rO=o,rT=t,rF=f,rL=l;if(o[d]&&!l)return o[d](t,f,false);if(!o._evts)o._evts={};if(!o._evts[t]){o._evts[t]=o[n]?{b:o[n]}:{};o[n]=new Function('e','var r=true,o=this,a=o._evts["'+t+'"],i;for(i in a){o._f=a[i];r=o._f(e||window.event)!=false&&r;o._f=null}return r');if(t!='unload')addEvent(window,'unload',function(){removeEvent(rO,rT,rF,rL)})}if(!f._i)f._i=addEvent._i++;o._evts[t][f._i]=f};addEvent._i=1;var removeEvent=function(o,t,f,l){var d='removeEventListener';if(o[d]&&!l)return o[d](t,f,false);if(o._evts&&o._evts[t]&&f._i)delete o._evts[t][f._i]}}function cancelEvent(e,c){e.returnValue=false;if(e.preventDefault)e.preventDefault();if(c){e.cancelBubble=true;if(e.stopPropagation)e.stopPropagation()}};function HTMLHttpRequest(myName,callback){with(this){this.myName=myName;this.callback=callback;this.xmlhttp=null;this.iframe=null;window._ifr_buf_count|=0;this.iframeID='iframebuffer'+window._ifr_buf_count++;this.loadingURI='';if(window.XMLHttpRequest&&!window.ActiveXObject)xmlhttp=new XMLHttpRequest();if(!xmlhttp){if(document.createElement&&document.documentElement&&(window.opera||navigator.userAgent.indexOf('MSIE 5.0')==-1)){var ifr=document.createElement('iframe');ifr.setAttribute('id',iframeID);ifr.setAttribute('name',iframeID);ifr.style.visibility='hidden';ifr.style.position='absolute';ifr.style.width=ifr.style.height=ifr.borderWidth='0px';iframe=document.getElementsByTagName('body')[0].appendChild(ifr)}else if(document.body&&document.body.insertAdjacentHTML){document.body.insertAdjacentHTML('beforeEnd','<iframe name="'+iframeID+'" id="'+iframeID+'" style="display:none"></iframe>')}if(window.frames&&window.frames[iframeID])iframe=window.frames[iframeID];iframe.name=iframeID}return this}};HTMLHttpRequest.prototype.parseForm=function(form){with(this){var str='',gE='getElementsByTagName',inputs=[(form[gE]?form[gE]('input'):form.all?form.all.tags('input'):[]),(form[gE]?form[gE]('select'):form.all?form.all.tags('select'):[]),(form[gE]?form[gE]('textarea'):form.all?form.all.tags('textarea'):[])];for(var i=0;i<inputs.length;i++)for(j=0;j<inputs[i].length;j++)if(inputs[i][j]){var plus='++'.substring(0,1);str+=escape(inputs[i][j].getAttribute('name')).replace(plus,'%2B')+'='+escape(inputs[i][j].value).replace(plus,'%2B')+'&'}return str.substring(0,str.length-1)}};HTMLHttpRequest.prototype.xmlhttpSend=function(uri,formStr){with(this){xmlhttp.open(formStr?'POST':'GET',uri,true);xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){if(callback)callback(xmlhttp.responseXML,xmlhttp.responseText,loadingURI);loadingURI=''}};if(formStr&&xmlhttp.setRequestHeader)xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');if(xmlhttp.overrideMimeType)xmlhttp.overrideMimeType((/\.txt/i).test(uri)?'text/plain':'text/xml');xmlhttp.send(formStr);loadingURI=uri;return true}};HTMLHttpRequest.prototype.iframeSend=function(uri,formRef){with(this){if(!document.readyState)return false;if(document.getElementById)var o=document.getElementById(iframeID).offsetWidth;if(formRef)formRef.setAttribute('target',iframeID);else{var ifrDoc=iframe.contentDocument||iframe.document;if(!window.opera&&ifrDoc.location&&ifrDoc.location.href!=location.href)ifrDoc.location.replace(uri);else iframe.src=uri}loadingURI=uri;setTimeout(myName+'.iframeCheck()',(window.opera?250:100));return true}};HTMLHttpRequest.prototype.iframeCheck=function(){with(this){doc=iframe.contentDocument||iframe.document;var il=iframe.location,dr=doc.readyState;if((il&&il.href?il.href.match(loadingURI.replace("\?","\\?")):1)&&(dr=='complete'||(!document.getElementById&&dr=='interactive'))){var cbDoc=doc.documentElement||doc;if(callback)callback(cbDoc,(cbDoc.innerHTML||(cbDoc.body?cbDoc.body.innerHTML:'')),loadingURI);loadingURI=''}else setTimeout(myName+'.iframeCheck()',50)}};HTMLHttpRequest.prototype.load=function(uri){with(this){if(!uri||(!xmlhttp&&!iframe))return false;if(xmlhttp)return xmlhttpSend(uri,'');else if(iframe)return iframeSend(uri,null);else return false}};HTMLHttpRequest.prototype.submit=function(formRef,evt){with(this){evt=evt||window.event;if(!formRef||(!xmlhttp&&!iframe))return false;var method=formRef.getAttribute('method'),uri=formRef.getAttribute('action');if(method&&method.toLowerCase()=='post'){if(xmlhttp){cancelEvent(evt);return xmlhttpSend(uri,parseForm(formRef))}else if(iframe)return iframeSend(uri,formRef);else return false}else{cancelEvent(evt);return load(uri+(uri.indexOf('?')==-1?'?':'&')+parseForm(formRef))}}};function RemoteFileLoader(myName){this.myName=myName;this.threads=[];this.loadingIDs={};this.onload=null};RemoteFileLoader.prototype.getThread=function(destId){with(this){var thr=-1;for(var id in loadingIDs){if(id==destId){thr=loadingIDs[id];break}}if(thr==-1)for(var t=0;t<threads.length;t++){if(!threads[t].loadingURI){thr=t;break}}if(thr==-1){thr=threads.length;threads[thr]=new HTMLHttpRequest(myName+'.threads['+thr+']',null);loadingIDs[destId]=thr}threads[thr].callback=new Function('doc','text','uri','with('+myName+'){copyContent(doc,text,"'+destId+'");if(onload)onload(doc,uri,"'+destId+'")}');return threads[thr]}};RemoteFileLoader.prototype.loadInto=function(uri,destId){return this.getThread(destId).load(uri)};RemoteFileLoader.prototype.submitInto=function(formRef,destId,event){return this.getThread(destId).submit(formRef,event)};RemoteFileLoader.prototype.copyContent=function(docDOM,docText,destId){var src=docDOM?(docDOM.getElementsByTagName?docDOM.getElementsByTagName('body')[0]:(docDOM.body?docDOM.body:null)):null;var dest=document.getElementById?document.getElementById(destId):(document.all?document.all[destId]:null);if(!dest||(!src&&!docText))return;if(src&&src.innerHTML)dest.innerHTML=src.innerHTML;else if(src&&document.importNode){while(dest.firstChild)dest.removeChild(dest.firstChild);for(var i=0;i<src.childNodes.length;i++)dest.appendChild(document.importNode(src.childNodes.item(i),true))}else if(docText){if(docText.match(/(<body>)(.*)(<\/body>)/i))docText=RegExp.$2;dest.innerHTML=docText}};var docClickLoader=new RemoteFileLoader('docClickLoader');function loadInto(src,destId,evt){var ok=docClickLoader.loadInto(src.href||src.getAttribute('href'),destId);if(ok)cancelEvent(evt)};function toggleInto(src,destId,evt){var dest=document.getElementById(destId);if(!dest.contentLoaded){var ok=docClickLoader.loadInto(src.href||src.getAttribute('href'),destId);if(ok)dest.contentLoaded=true}cancelEvent(evt);if(!dest.toggleState){dest.style.display='block';dest.toggleState=1}else{dest.style.display='none';dest.toggleState=0}};addEvent(document,'click',function(evt){evt=evt||window.event;var src=evt.target||evt.srcElement;if(src.nodeType&&src.nodeType!=1)src=src.parentNode;while(src){var srcName=(src.nodeName||src.tagName||'').toLowerCase();if(srcName=='a'&&src.className&&src.className.match(/^(load|toggle)into-(.+)$/)){if(RegExp.$1=='load')return loadInto(src,RegExp.$2,evt);if(RegExp.$1=='toggle')return toggleInto(src,RegExp.$2,evt)}src=src.parentNode}},1);

function openModal(modalWidth){var d=document;d.getElementById('overlay').style.display='block';d.getElementById('modal_box').style.display='block'}function closeModal(){var d=top.document;d.getElementById('overlay').style.display='none';d.getElementById('modal_box').style.display='none';d.getElementById('modal_box').innerHTML='';document.getElementById('modal_box').toggleState=0}addEvent(document,'click',function(evt){evt=evt||window.event;if(evt.which>1||evt.button>1)return;var src=evt.target||evt.srcElement;if(src.nodeType&&src.nodeType!=1)src=src.parentNode;while(src){var srcName=(src.nodeName||src.tagName||'').toLowerCase();if((srcName=='a'&&src.rel)||(srcName=='button'&&src.className)){if(src.rel=='open')return openModal();if(src.className=='close')return closeModal()}src=src.parentNode}},1);

function P7_MultiClass2(){var args=P7_MultiClass2.arguments;if(document.getElementById){for(var i=0;i<args.length;i+=2){if(document.getElementById(args[i])!=null){if(document.p7setdown){for(var k=0;k<p7dco.length-1;k+=2){if(args[i]==p7dco[k]){args[i+1]=p7dco[k+1];break}}}document.getElementById(args[i]).className=args[i+1]}}}}

function blogNav()
{
	var d = top.document;
	if(d.getElementById('tab_archive'))
	{
		d.getElementById('tab_archive').onclick=function()
		{
			P7_MultiClass2('tab_archive','opened_tab','ul_archive','opened_tab','tab_popular','closed_tab','ul_popular','closed_tab','tab_tags','closed_tab','ul_tags','closed_tab');
		}
		d.getElementById('tab_tags').onclick=function()
		{
			P7_MultiClass2('tab_archive','closed_tab','ul_archive','closed_tab','tab_popular','closed_tab','ul_popular','closed_tab','tab_tags','opened_tab','ul_tags','opened_tab');
		}
		d.getElementById('tab_popular').onclick=function()
		{
			P7_MultiClass2('tab_archive','closed_tab','ul_archive','closed_tab','tab_popular','opened_tab','ul_popular','opened_tab','tab_tags','closed_tab','ul_tags','closed_tab');
		}
	}
}

window.onload=function(){
 blogNav();
}

/* Drop-down. Authors: Dmitry Filatov (alpha@design.ru), Stepan Reznikov (stepan@design.ru) */
var Common={Class:{match:function(a,b){return(a.className&&a.className.match(new RegExp('(^|\\s+)('+b+')($|\\s+)')))?true:false},add:function(a,b){if(!this.match(a,b)){a.className+=' '+b}},remove:function(a,b){a.className=a.className.replace(new RegExp('(.*)(^|\\s+)('+b+')($|\\s+)(.*)'),'$1$4$5').replace(/(^)\s/,'$1')}},Event:{aObservers:[],add:function(a,b,c){if(a.length&&a.sort){for(var i=0;i<a.length;i++){this.add(a[i],b,c)}return}if(!b.match&&b.length){for(var i=0;i<b.length;i++){this.add(a,b[i],c)}return}if(a.addEventListener){a.addEventListener(b,c,false)}else if(a.attachEvent){if(this.aObservers.length==0){this.aObservers.push([a,b,c]);this.add(window,'unload',function(){Common.Event.detachObservers()})}else{this.aObservers.push([a,b,c])}a.attachEvent('on'+b,c)}},remove:function(a,b,c){if(a.length&&a.sort){for(var i=0;i<a.length;i++){this.remove(a[i],b,c)}return}if(!b.match&&b.length){for(var i=0;i<b.length;i++){this.remove(a,b[i],c)}return}if(a.removeEventListener){a.removeEventListener(b,c,false)}else if(a.detachEvent){a.detachEvent('on'+b,c)}},detachObservers:function(){for(var i=0,iLength=this.aObservers.length;i<iLength;i++){this.remove(this.aObservers[i][0],this.aObservers[i][1],this.aObservers[i][2]);this.aObservers[i][0]=null}this.aObservers.length=0},cancel:function(a){var a=a?a:window.event;a.cancelBubble=true;a.returnValue=false;if(a.cancelable){a.preventDefault();a.stopPropagation()}return false},normalize:function(a){var a=a?a:window.event;if(a&&a.srcElement&&!window.opera){a.target=a.srcElement}if(a){a.iKeyCode=a.keyCode?a.keyCode:(a.which?a.which:null);if(a.wheelDelta){a.iMouseWheelDelta=a.wheelDelta/120;if(window.opera){a.iMouseWheelDelta*=-1}}else if(a.detail){a.iMouseWheelDelta=-a.detail/3}}return a}}};

function PopupBlock(oContainer,oLink){
this.bInit=null
this.bKeep=false
this._listeners=[]
var me=this
this.oContainer=oContainer
if(this.oContainer){
Common.Event.add(this.oContainer,'click',function(evt){me.keep(evt);})}
this.oLink=oLink
if(this.oLink){
Common.Event.add(this.oLink,'click',function(evt){if(me.toggle(evt)){return Common.Event.cancel(evt);}})}}
PopupBlock.prototype.isInit=function(){
if(this.bInit==null){
this.bInit=this.oContainer&&this.oLink}
return this.bInit}
PopupBlock.prototype.toggle=function(evt){
if(this.isInit()){
if(Common.Class.match(this.oContainer,'closed')){
this.show(evt)
}else{
this.hide(evt)}
return true
}else{
return false}}
PopupBlock.prototype.show=function(evt){
if(this.isInit()){
this.broadcast(this)
Common.Class.remove(this.oContainer,'closed')
var me=this
this.documentClickHandler=function(evt){me.hide(evt);}
this.documentKeyDownHandler=function(evt){me.cancel(evt);}
Common.Event.add(document,'click',this.documentClickHandler)
Common.Event.add(document,'keydown',this.documentKeyDownHandler)}}
PopupBlock.prototype.keep=function(evt){
if(this.isInit()){
this.bKeep=true}}
PopupBlock.prototype.hide=function(evt){
if(this.isInit()){
if(this.bKeep){
this.bKeep=false
return}
Common.Class.add(this.oContainer,'closed')
Common.Event.remove(document,'click',this.documentClickHandler)
Common.Event.remove(document,'keydown',this.documentKeyDownHandler)}}
PopupBlock.prototype.cancel=function(evt){
if(this.isInit()){
if((evt=Common.Event.normalize(evt))){
var code=evt.keyCode ? evt.keyCode : evt.which ? evt.which : null
if(code==27){
this.hide(evt)}}}}
PopupBlock.prototype.addListener=function(f){
this._listeners.push(f)}
PopupBlock.prototype.broadcast=function(oPopupBlock){
for(var i=0,iLength=this._listeners.length;i<iLength;i++){
this._listeners[i](oPopupBlock)}}
var PopupBlockController={}
PopupBlockController.init=function(){
this.aPopupBlocks=new Array()
this.oActivePopupBlock=null}
PopupBlockController.addPopupBlock=function(oPopupBlock){
this.aPopupBlocks[this.aPopupBlocks.length]=oPopupBlock
var me=this
oPopupBlock.addListener(
function(oPopupBlock){
me.hideActivePopupBlock(oPopupBlock)}
)}
PopupBlockController.hideActivePopupBlock=function(oPopupBlock){
if(this.oActivePopupBlock){
this.oActivePopupBlock.hide()}
this.oActivePopupBlock=oPopupBlock}
PopupBlockController.init()