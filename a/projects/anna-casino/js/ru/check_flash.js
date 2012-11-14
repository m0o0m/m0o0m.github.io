var F7=0; if(navigator.plugins) { if(navigator.plugins["Shockwave Flash"])	{
plugin=navigator.plugins["Shockwave Flash"].description;
if(parseInt(plugin.charAt(plugin.indexOf('.')-1))>=7) { F7=1; }
}else{ if((navigator.userAgent.indexOf('MSIE')!=-1)&&(navigator.userAgent.indexOf('Win') != -1))	{
document.write('<script language="vbscript">\non error resume next\nF7=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.7"))\n</scr'+'ipt>');
} } }
if(!F7)	{
document.write('<div class="noflash-nojs"><div><p>Игры этого казино созданы в формате технологии Flash 8. К сожалению, в вашем браузере не обнаружен соответствующий программный проигрыватель. Если вы хотите играть, вам придется загрузить последнюю версию <a href="http://www.adobe.com/products/flashplayer/" target="_blank">Flash</a> с сайта компании Adobe. Это бесплатно, просто и недолго.</p></div></div>');
}