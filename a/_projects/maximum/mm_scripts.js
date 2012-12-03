function doClock(){ // By Paul Davis - www.kaosweaver.com
  var t=new Date(),a=doClock.arguments,str="",i,a1,lang="1";
  var month=new Array('January','Jan', 'February','Feb', 'March','Mar', 'April','Apr', 'May','May', 'June','Jun', 'July','Jul', 'August','Aug', 'September','Sep', 'October','Oct', 'November','Nov', 'December','Dec');
  var tday= new Array('Sunday','Sun','Monday','Mon', 'Tuesday','Tue', 'Wednesday','Wed','Thursday','Thr','Friday','Fri','Saturday','Sat');
  for(i=0;i<a.length;i++) {a1=a[i].charAt(1);switch (a[i].charAt(0)) {
  case "M":if  ((Number(a1)==3) && ((t.getMonth()+1)<10)) str+="0";
  str+=(Number(a1)>1)?t.getMonth()+1:month[t.getMonth()*2+Number(a1)];break;
  case "D": if ((Number(a1)==1) && (t.getDate()<10)) str+="0";str+=t.getDate();break;
  case "Y": str+=(a1=='0')?t.getFullYear():t.getFullYear().toString().substring(2);break;
  case "W":str+=tday[t.getDay()*2+Number(a1)];break; default: str+=unescape(a[i]);}}return str;
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}