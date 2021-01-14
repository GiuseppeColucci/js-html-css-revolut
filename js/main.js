$(document).ready(function(){

$('.click').click(function(){
    $(this).find('.box-list').toggle('.active')
})
$('p').hover(function(){
    $(this).css("color", "black");
},  function(){
    $(this).css("color", "silver");
})




})//fine JQery