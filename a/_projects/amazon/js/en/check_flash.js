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
if(F6)	{
document.write('<img src="/a/_projects/amazon/img/header.png" alt="Amazon Casino" width="521" height="179" />');
} else {
document.write('<div class="noflash"><table width="521" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr><td valign="middle"><p><img src="/a/_projects/amazon/img/logo_noflash.gif" alt="Amazon Casino" width="220" height="38" class="left" />All games in this casino are based on Flash 6 technology. Unfortunately, this plug-in is not built into your browser. If you want to play, please download the <a href="http://www.macromedia.com/go/getflashplayerbutton/" target="_blank">latest Flash plug-in</a> from Macromedia website. It is free, fast and simple. And by the way above this message you can see a blank space where actually is a bonus ad placed.</p></td>');
document.write('</tr></table></div>');
}