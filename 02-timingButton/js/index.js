var num = 9;
var id = setInterval(function(){
  num--;
  $('button').val('同意(' + num + ')');
    if(num == 0){
      clearInterval(id);
    }
})
