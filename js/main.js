$(document).ready(function(){
    $(".tourimg").hover(function(){
        $(this).find(".tourLink").fadeIn(200);
    },function(){
        $(this).find(".tourLink").fadeOut(200); 
    }
    );
});