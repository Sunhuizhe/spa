var startbtn = document.getElementById('start');
var stopbtn = document.getElementById('stop');
var rebtn = document.getElementById('restart');
var pro = document.getElementById('progress');
var max = pro.max;
var id = 0;
 
//console.log(max);

startbtn.onclick = function(){
  if(id != 0){
    //进度条进行的时候点开始，不会加快速度
  }else{
    id = setInterval(function(){
      if(pro.value == max){
        clearInterval(id);
        alert('下载完成！');
      }
      pro.value++;
    },100);
  }
}

stopbtn.onclick = function(){
  clearInterval(id);
  id = 0; //id 重新置0，再次点开始，可以继续进行
}

rebtn.onclick = function(){
  pro.value = 0;
}
