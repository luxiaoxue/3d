//提示弹出
$("#tip").on("click",function(){
	$(".tip").css({
		"-webkit-transform":"translate3d(0,0,0)",
		"-webkit-transition":"all .5s"
	})
})
$(".tip").on("click",function(){
	$(this).css({
		"-webkit-transform":"translate3d(0,200%,0)",
		"-webkit-transition":"all .5s"
	})
})
//选择号码
$(".choose-right").on("click",function(){
	$(".number").css({
		"-webkit-transform":"translate3d(0,0,0)",
		"-webkit-transition":"all .5s"
	})
})
//选中号码高亮显示并且返回
$(".number ol>li").on("click",function(){
	$(this).addClass("cek").siblings().removeClass();
	var txt=$(this).text();
	$(this).parent().parent().css({
		"-webkit-transform":"translate3d(-100%,0,0)",
		"-webkit-transition":"all .5s",
		"-webkit-transition-delay":"1s"
	})
	$(".s-change").hide();
	$(".change").show();
	$(".choose-number").val('已选'+txt);
})
//判断input都填写正确，下一步可点
	var user=$(".use-number").val(),
		reg=/^\d{20}$/;

	//if(user)a54k  2nqu
//点击高亮
$(".section div").on("click",function(){
	$(this).addClass("border").siblings("div").removeClass();
})
$(".section h5 span").on("click",function(){
	$(this).addClass("border").siblings("span").removeClass();
})