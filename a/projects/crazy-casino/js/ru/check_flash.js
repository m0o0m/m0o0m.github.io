var F7=0; if(navigator.plugins) { if(navigator.plugins["Shockwave Flash"])	{
plugin=navigator.plugins["Shockwave Flash"].description;
if(parseInt(plugin.charAt(plugin.indexOf('.')-1))>=7) { F7=1; }
}else{ if((navigator.userAgent.indexOf('MSIE')!=-1)&&(navigator.userAgent.indexOf('Win') != -1))	{
document.write('<script language="vbscript">\non error resume next\nF7=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7"))\n</scr'+'ipt>');
} } }
if(!F7)	{
document.write('<div class="noscript-noflash"><img src=""/a/projects/crazy-casino/img/dtl_alert_big.gif" alt="" width="30" height="30" class="left" />Игры этого казино созданы в формате технологии Flash 7. К сожалению, в вашем браузере не обнаружена соответствующая программная надстройка (plug-in). Если вы хотите играть, вам придется загрузить последнюю версию <a href="http://www.macromedia.com/go/getflashplayerbutton/">Flash</a> с сайта компании Maсromedia. Это бесплатно, просто и недолго.</div>');
}