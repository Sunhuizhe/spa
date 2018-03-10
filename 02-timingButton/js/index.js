var  num = 9;
var  btn = document.getElementById('button');
var id = setInterval(function(){
  num--;
  btn.innerHTML = '同意(' + num +'s)';
  if(num == 0){
    clearInterval(id);
    btn.innerHTML = '同意';
    btn.removeAttribute('disabled');
  }
},1000);
