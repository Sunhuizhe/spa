var $footer = (function(){

  function show(){
    $(app.config.appContainer).append('<div class="admin-footer"><p>2017 © 中科佰融</p></div>');
  }

  return {show:show};
})();
