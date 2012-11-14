var F6=0;
if(navigator.plugins)	{
if(navigator.plugins["Shockwave Flash"])	{
plugin=navigator.plugins["Shockwave Flash"].description;
if(parseInt(plugin.charAt(plugin.indexOf('.')-1))>=6)	{
F6=1;
}
}else{
if((navigator.userAgent.indexOf('MSIE')!=-1)&&(navigator.userAgent.indexOf('Win') != -1))	{
document.write('<script language="vbscript">\non error resume next\nF6=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))\n</scr'+'ipt>');
}
}
}
if(!F6)	{
document.write('<div id="alert">');
document.write('<div class="title-bar"><a href="javascript:;" onclick="MM_showHideLayers(\'alert\',\'\',\'hide\')"><img src="/a/projects/3wg04/img/btn_close.gif" alt="" width="9" height="9" /></a></div>');
document.write('<div class="alert-wrapper-columns cfx">');
document.write('<div class="column1-2">Наши игры созданы в формате технологии Flash 7. К сожалению, в вашем браузере не обнаружена соответствующая программная надстройка. Если вы хотите сыграть, вам придется <a href="http://www.macromedia.com/go/getflashplayerbutton/" target="_blank">загрузить модуль Flash</a> с сайта компании Macromedia. Это бесплатно, просто и недолго.</div>');
document.write('<div class="column2-2">All games are based on Flash 7 technology. Unfortunately, this plug-in is not built into your browser.<br />');
document.write('If you want to play, please <a href="http://www.macromedia.com/go/getflashplayerbutton/" target="_blank">download the Flash</a> plug-in from Macromedia website. It is free, fast and simple.</div>');
document.write('</div></div>');
}