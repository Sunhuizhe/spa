var oImg = document.getElementById('images');
var text = document.getElementById('password');
text.focus();
oImg.onmouseover = function(){
  oImg.setAttribute('src','images/eye.png');
  text.type = 'text';
}
oImg.onmouseout = function(){
  oImg.setAttribute('src','images/eye-close.png');
  text.type = 'password';
}
