// 自动聚集
$('#width').focus();

//精度解决
function roundfn(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

function checkData(e){
  //console.log(e.name);
  //console.log($(this));
  (((e.value == '' && [1,$('#' + e.id + 'err').html( e.name + '不能为空！')]) 
    || (e.value <0 && [1,$('#' + e.id + 'err').html( e.name + '必须大于0！')])
    || (isNaN(e.value) && [1,$('#' + e.id + 'err').html(e.name + '必须是数字！')]))
  && ( $('#'+e.id).focus()))
  || ($('#' + e.id + 'err').html(''));
}

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
    var sval = width*heightr
    cval = roundfn(cval,2);
    sval = roundfn(sval,2);
    // 输出周长和面积
    $('#rectangle-perimeter').val(cval);
    $('#rectangle-area').val(sval);
  }
});

