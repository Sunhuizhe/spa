function timerButton(config){
  var $btn = $('<input id = "timer-button" type="button"/>');
  var timer , t = config.time;
  var enable = config.enable;
  
  if(config.enable){
    enabledBtn();
  }else{
    disabledBtn();
  }

  $(config.container).append($btn);

  $btn.click(function(){
    $btn.trigger('timer-button-click');
    if(config.enable) disabledBtn();
  });

  function disabledBtn(){
    $btn.attr('disabled','disabled')
      .val(config.title + '(' + t + ')');
    enable = false;
    timer = window.setInterval(function(){
      t--;
      $btn.val(config.title + '(' + t + ')');
      if(t === 0){
        enabledBtn();
      }
    },1000);
  }

  function enabledBtn(){
    enable = true;
    t = config.time;
    clearInterval(timer);
    $btn.val(config.title);
    $btn.removeAttr('disabled');
  }

  return $btn;
}
