var $stage = (function(){
  
  function show(){
    $(app.config.appContainer).append('<div class="admin-stage"></div>');
  }

  function load(roter){
   var panel = paresPanel(router);
  }
/**
 * paresPanel 将路由信息解析成 Panel 名称
 *
 * @param router 路由字符串
 * @returns string 
 */

  function paresPanel(router){
    return ''; 
  }

  return {show:show};
})();
