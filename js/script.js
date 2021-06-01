$(document).ready(function(){

	var winH  	  = $(window).height(),
		topHeader = $(".top-header").innerHeight(),
		navH      = $(".navbar").innerHeight();
	$(".slider, .carousel-item").height(winH - (topHeader + navH));
	

//	Start Featured Work Shuffle

	$(".featured-work ul li").on("click",function(){
		
		$(this).addClass("active").siblings().removeClass("active");
		
		if($(this).data("img") === "all") {
			
			$(".featured-work .images-show .row > div").css("opacity", 1);
		
		}else{
		
			$(".featured-work .images-show .row > div").css("opacity", "0.3");
			
			$($(this).data("img")).css("opacity", 1)
		}
	});
});