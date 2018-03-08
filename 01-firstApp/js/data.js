// 取到 计算 按钮
var node = document.getElementById('rectangle-calc');
var wid = document.getElementById('rectangle-width');
var hei = document.getElementById('rectangle-height');
var widerr = document.getElementById('widtherr');
var heierr = document.getElementById('heighterr');

// 自动聚集
wid.focus();

//精度解决
function roundfn(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

//失焦错误提示
wid.onblur = function(){
  var blurwidth = wid.value;
  if(blurwidth == ''){
    widerr.innerHTML = '宽度不能为空！';
    hei.setAttribute('disabled','disabled');
    wid.focus();
  }
  else if(blurwidth < 0){
    widerr.innerHTML = '宽度必须大于0！';
    hei.setAttribute('disabled','disabled');
    wid.focus();
  }
  else if( isNaN(blurwidth) ){
    widerr.innerHTML = '宽度必须是数字！';
    hei.setAttribute('disabled','disabled');
    wid.focus();
  }
  else{
    hei.removeAttribute('disabled');
    widerr.innerHTML = '';
  }
}

hei.onblur = function(){
  var blurheight = hei.value;
  if(blurheight == ''){
    heierr.innerHTML = '高度不能为空！';
    hei.focus();
  }
  else if(blurheight < 0){
    heierr.innerHTML = '宽度必须大于0！';
    wid.setAttribute('disabled','disabled');
    hei.focus();              
  }
  else if( isNaN(blurheight)  ){
    heierr.innerHTML = '宽度必须是数字！';
    wid.setAttribute('disabled','disabled');
    hei.focus();          
  }
  else{
    wid.removeAttribute('disabled');
    heierr.innerHTML = '';
  }
}

// 定事件 -- onclilck
// 写代码
node.onclick = function(){
  // 取到输入的value值
  //width = document.getElementById('rectangle-width').value;
  //height = document.getElementById('rectangle-height').value;
   
  var width = wid.value;
  var height = hei.value;
  if(width == 0 || height == 0){
    document.getElementById('rectangle-perimeter').value = 0;
    document.getElementById('rectangle-area').value = 0;
  }else{
  // 计算周长和面积
    var cval = (parseFloat(width)+parseFloat(height))*2;
    var sval = width*height;
    cval = roundfn(cval,2);
    sval = roundfn(sval,2);
    // 输出周长和面积
    document.getElementById('rectangle-perimeter').value = cval;
    document.getElementById('rectangle-area').value = sval;
  }
}

