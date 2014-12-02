if(typeof addEvent!='function'){var addEvent=function(o,t,f,l){var d='addEventListener',n='on'+t,rO=o,rT=t,rF=f,rL=l;if(o[d]&&!l)return o[d](t,f,false);if(!o._evts)o._evts={};if(!o._evts[t]){o._evts[t]=o[n]?{b:o[n]}:{};o[n]=new Function('e','var r=true,o=this,a=o._evts["'+t+'"],i;for(i in a){o._f=a[i];r=o._f(e||window.event)!=false&&r;o._f=null}return r');if(t!='unload')addEvent(window,'unload',function(){removeEvent(rO,rT,rF,rL)})}if(!f._i)f._i=addEvent._i++;o._evts[t][f._i]=f};addEvent._i=1;var removeEvent=function(o,t,f,l){var d='removeEventListener';if(o[d]&&!l)return o[d](t,f,false);if(o._evts&&o._evts[t]&&f._i)delete o._evts[t][f._i]}}function cancelEvent(e,c){e.returnValue=false;if(e.preventDefault)e.preventDefault();if(c){e.cancelBubble=true;if(e.stopPropagation)e.stopPropagation()}};function HTMLHttpRequest(myName,callback){with(this){this.myName=myName;this.callback=callback;this.xmlhttp=null;this.iframe=null;window._ifr_buf_count|=0;this.iframeID='iframebuffer'+window._ifr_buf_count++;this.loadingURI='';if(window.XMLHttpRequest&&!window.ActiveXObject)xmlhttp=new XMLHttpRequest();if(!xmlhttp){if(document.createElement&&document.documentElement&&(window.opera||navigator.userAgent.indexOf('MSIE 5.0')==-1)){var ifr=document.createElement('iframe');ifr.setAttribute('id',iframeID);ifr.setAttribute('name',iframeID);ifr.style.visibility='hidden';ifr.style.position='absolute';ifr.style.width=ifr.style.height=ifr.borderWidth='0px';iframe=document.getElementsByTagName('body')[0].appendChild(ifr)}else if(document.body&&document.body.insertAdjacentHTML){document.body.insertAdjacentHTML('beforeEnd','<iframe name="'+iframeID+'" id="'+iframeID+'" style="display:none"></iframe>')}if(window.frames&&window.frames[iframeID])iframe=window.frames[iframeID];iframe.name=iframeID}return this}};HTMLHttpRequest.prototype.parseForm=function(form){with(this){var str='',gE='getElementsByTagName',inputs=[(form[gE]?form[gE]('input'):form.all?form.all.tags('input'):[]),(form[gE]?form[gE]('select'):form.all?form.all.tags('select'):[]),(form[gE]?form[gE]('textarea'):form.all?form.all.tags('textarea'):[])];for(var i=0;i<inputs.length;i++)for(j=0;j<inputs[i].length;j++)if(inputs[i][j]){var plus='++'.substring(0,1);str+=escape(inputs[i][j].getAttribute('name')).replace(plus,'%2B')+'='+escape(inputs[i][j].value).replace(plus,'%2B')+'&'}return str.substring(0,str.length-1)}};HTMLHttpRequest.prototype.xmlhttpSend=function(uri,formStr){with(this){xmlhttp.open(formStr?'POST':'GET',uri,true);xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4){if(callback)callback(xmlhttp.responseXML,xmlhttp.responseText,loadingURI);loadingURI=''}};if(formStr&&xmlhttp.setRequestHeader)xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded');if(xmlhttp.overrideMimeType)xmlhttp.overrideMimeType((/\.txt/i).test(uri)?'text/plain':'text/xml');xmlhttp.send(formStr);loadingURI=uri;return true}};HTMLHttpRequest.prototype.iframeSend=function(uri,formRef){with(this){if(!document.readyState)return false;if(document.getElementById)var o=document.getElementById(iframeID).offsetWidth;if(formRef)formRef.setAttribute('target',iframeID);else{var ifrDoc=iframe.contentDocument||iframe.document;if(!window.opera&&ifrDoc.location&&ifrDoc.location.href!=location.href)ifrDoc.location.replace(uri);else iframe.src=uri}loadingURI=uri;setTimeout(myName+'.iframeCheck()',(window.opera?250:100));return true}};HTMLHttpRequest.prototype.iframeCheck=function(){with(this){doc=iframe.contentDocument||iframe.document;var il=iframe.location,dr=doc.readyState;if((il&&il.href?il.href.match(loadingURI.replace("\?","\\?")):1)&&(dr=='complete'||(!document.getElementById&&dr=='interactive'))){var cbDoc=doc.documentElement||doc;if(callback)callback(cbDoc,(cbDoc.innerHTML||(cbDoc.body?cbDoc.body.innerHTML:'')),loadingURI);loadingURI=''}else setTimeout(myName+'.iframeCheck()',50)}};HTMLHttpRequest.prototype.load=function(uri){with(this){if(!uri||(!xmlhttp&&!iframe))return false;if(xmlhttp)return xmlhttpSend(uri,'');else if(iframe)return iframeSend(uri,null);else return false}};HTMLHttpRequest.prototype.submit=function(formRef,evt){with(this){evt=evt||window.event;if(!formRef||(!xmlhttp&&!iframe))return false;var method=formRef.getAttribute('method'),uri=formRef.getAttribute('action');if(method&&method.toLowerCase()=='post'){if(xmlhttp){cancelEvent(evt);return xmlhttpSend(uri,parseForm(formRef))}else if(iframe)return iframeSend(uri,formRef);else return false}else{cancelEvent(evt);return load(uri+(uri.indexOf('?')==-1?'?':'&')+parseForm(formRef))}}};function RemoteFileLoader(myName){this.myName=myName;this.threads=[];this.loadingIDs={};this.onload=null};RemoteFileLoader.prototype.getThread=function(destId){with(this){var thr=-1;for(var id in loadingIDs){if(id==destId){thr=loadingIDs[id];break}}if(thr==-1)for(var t=0;t<threads.length;t++){if(!threads[t].loadingURI){thr=t;break}}if(thr==-1){thr=threads.length;threads[thr]=new HTMLHttpRequest(myName+'.threads['+thr+']',null);loadingIDs[destId]=thr}threads[thr].callback=new Function('doc','text','uri','with('+myName+'){copyContent(doc,text,"'+destId+'");if(onload)onload(doc,uri,"'+destId+'")}');return threads[thr]}};RemoteFileLoader.prototype.loadInto=function(uri,destId){return this.getThread(destId).load(uri)};RemoteFileLoader.prototype.submitInto=function(formRef,destId,event){return this.getThread(destId).submit(formRef,event)};RemoteFileLoader.prototype.copyContent=function(docDOM,docText,destId){var src=docDOM?(docDOM.getElementsByTagName?docDOM.getElementsByTagName('body')[0]:(docDOM.body?docDOM.body:null)):null;var dest=document.getElementById?document.getElementById(destId):(document.all?document.all[destId]:null);if(!dest||(!src&&!docText))return;if(src&&src.innerHTML)dest.innerHTML=src.innerHTML;else if(src&&document.importNode){while(dest.firstChild)dest.removeChild(dest.firstChild);for(var i=0;i<src.childNodes.length;i++)dest.appendChild(document.importNode(src.childNodes.item(i),true))}else if(docText){if(docText.match(/(<body>)(.*)(<\/body>)/i))docText=RegExp.$2;dest.innerHTML=docText}};

var docClickLoader = new RemoteFileLoader('docClickLoader');

function loadInto(src, destId, evt)
{
 var ok = docClickLoader.loadInto(src.href || src.getAttribute('href'), destId);
 if (ok) cancelEvent(evt);
};

function toggleInto(src, destId, evt)
{
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

addEvent(document, 'click', function(evt)
{
 evt = evt || window.event;
 var src = evt.target || evt.srcElement;
 if (src.nodeType && src.nodeType != 1) src = src.parentNode;
 while (src)
 {
  var srcName = (src.nodeName||src.tagName||'').toLowerCase();
  if (srcName == 'a' && src.className && src.className.match(/^(load|toggle)into-(.+)$/))
  {
   if (RegExp.$1 == 'load') return loadInto(src, RegExp.$2, evt);
   if (RegExp.$1 == 'toggle') return toggleInto(src, RegExp.$2, evt);
  }
  src = src.parentNode;
 }
}, 1);