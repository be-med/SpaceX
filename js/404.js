var pic = document.getElementById('rad404'),
body = document.querySelector('body');
pic.onclick = function(){
	rad404.setAttribute('style','animation-play-state: paused;');
}
body.ondblclick = function(){
	rad404.removeAttribute('style');
}