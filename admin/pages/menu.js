$(function(){
  var $menuBar = $('.menu-bar');
  var $menuitem = $('.item');
  
  var $lastMenuBar = null;

  $menuBar.click(function(e){
    //console.log(e);
//var $menu = $(e.currentTarget);
var $menu = $(e.target).parents('li');
var $items = $menu.find('.menu-items');
var display = $items.css('display') === 'none' ? 'block' : 'none';

if($lastMenuBar === null){

$items.css('display',display);

}else if($lastMenuBar === $menu){
  $items.css('display',display);
}else{
  $lastMenuBar.find('.menu-items').css('display','none');
  $items.css('display',display);
}
$lastMenuBar = $menu;
  });

$menuitem.click(function(e){
  var $item = $(e.currentTarget);
 //console.log($item);
 location.hash = $item.find('p').attr('data-href');
})  

});
