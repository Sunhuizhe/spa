//精度解决
function roundfn(x, n) {
  return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}

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
    // 输出 长和面积
    $('#rectangle-perimeter').val(cval);
    $('#rectangle-area').val(sval);
  }
});
