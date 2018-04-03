var $header = (function(){
  function show(){
    $(app.config.appContainer).append('<div class="admin-header"></div>');
  }

  var $account = $('.account'),
    $menu = $('.submenu');

  $account.mouseover(function(){
    $('.submenu').css('display','block');
    //$('.account').
  });
  $account.mouseout(function(){
    $('.submenu').css('display','none');
  });
  $menu.click(function(){
    localtion.hash = '#/login';
  });

  return {show:show};
})();
