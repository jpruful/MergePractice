$(function(){
    $("input").on("click",function(){
        var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("h1").text($("#choices li").eq(randomChildNumber).text());
        document.getElementById('img').src="random_selector/images/"+randomChildNumber+".jpg";
    });
});