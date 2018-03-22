function input(config){
  var $input = $('<label>'+ config.label + '</label><input type="password" id="password"/><img id="' + config.imgid + '" src="' + config.presrc + '" alt="显示密码"/>');
  $(config.container).append($input);
  
  $('#images').mouseover(function(){
    $('#images').attr('src',config.aftsrc);
    $input.attr('type','text');
  });
  $('#images').mouseout(function(){
    $('#images').attr('src',config.presrc);
    $input.attr('type','password');
  });
 


  return $input;
}
