$(function(){
  //$login.show({'container':'#admin'});
  
  //$header.show();
  $menu.show();
  $stage.show();
  $footer.show();


  

});
window.onhashchange = function(){
  if(location.hash == '#/login'){
    $login.show();
  }
}
