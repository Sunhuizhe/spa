
var areg = /[a-df-zA-DF-Z]/;  // 字母匹配
var breg = /[，。、；、·~‘’@#%&*+=【】！￥…（）——《》？：“”{}]/;  // 中文字符匹配
var creg = /[,/<>?;'|[\]\\!@#$%^&*()_]/;  // 英文字符匹配
var dreg = /[\+\-\*=]/; // 数学符号匹配

// 自动聚集
$('#width').focus();

//精度解决
function roundfn(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

function checkData(e){
  //console.log(e.name);
  //console.log($(this));
  (((e.value == '' && [1,$('#' + e.id + 'err').html( e.name + '不能为空！' )])   || (e.value <0 && [1,$('#' + e.id + 'err').html( e.name + '必须大于0！' )])
   || (isNaN(e.value) && [1,$('#' + e.id + 'err').html(e.name + '必须是数字！')]))
   && ( $('#'+e.id).focus() ))
  || ($('#' + e.id + 'err').html(''));
}


function changeData(e){
  console.log('a');
  e.value = e.value.replace(areg,'');
  e.value = e.value.replace(breg,'');
  e.value = e.value.replace(creg,'');
  e.value = e.value.replace(dreg,'');
}

$('#width').on('input',function(){
  changeData(this);
});

$('#height').on('input',function(){
  changeData(this);
});

//失焦错误提示
$('#width').blur(function(){
  //var blurwidth = wid.value;
  checkData(this);
});

$('#height').blur(function(){
  checkData(this); 
});

// 定事件 -- onclilck
// 写代码
$('#rectangle-calc').click(function(){
  var width = $('#width').val();
  var height = $('#height').val();
  if(isNaN(width) || isNaN(height) || width=='' || height=='' || width<0 || height<0 ){
  }else{
  // 计算周长和面积
    var cval = (parseFloat(width)+parseFloat(height))*2;
    var sval = width*height;
    cval = roundfn(cval,2);
    sval = roundfn(sval,2);
    // 输出周长和面积
    $('#rectangle-perimeter').val(cval);
    $('#rectangle-area').val(sval);
  }
});

