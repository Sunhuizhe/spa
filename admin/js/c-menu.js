var $menu = (function(){
  function show(){
    $(app.config.appContainer).append('<div class="admin-menu"></div>');
  }
  return {show:show};
})();
