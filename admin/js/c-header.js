var $header = (function(){
  
  var $headerDOM = '<div class="admin-header">'
      + '<div class="title"><span></span></div>'
      + '<div class="account">'
      + '<div class="logo"></div>'
      +  '<span>管理</span>'
      +  '<i class="iconfont icon-"></i>'
      +  '<div class="submenu">'
      +    '<i></i>'
      +    '<span>注销</span>'
      +  '</div>'
      +'</div>'
      +'</div>';

  
  
  
  
  var $title = $headerDOM.find('.title span'),
    $logo = $headerDOM.find('.logo'),
    $menu = $headerDOM.find('.submenu'),
    $account = $headerDOM.find('.$account');

$title.html(app.config.headetTitle);
  
  function show(){
    $(app.config.appContainer).append($headerDOM);
  }

  return {show:show};
})();
