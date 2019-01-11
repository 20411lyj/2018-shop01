// Firebase Innit
var config = {
    apiKey: "AIzaSyCk6I7JwHCOf9yxBgPPxHcnyHG-6Urf7Yo",
    authDomain: "lyj-shop.firebaseapp.com",
    databaseURL: "https://lyj-shop.firebaseio.com",
    projectId: "lyj-shop",
    storageBucket: "lyj-shop.appspot.com",
    messagingSenderId: "488985514554"
  };
  firebase.initializeApp(config);



// top_nav hover 이벤트
$(".top_icon").mouseenter(function(){
	$(this).children("img").css({"opacity":.7});
});
$(".top_icon").mouseleave(function(){
	$(this).children("img").css({"opacity":1});
});

// rt_wings 이벤트
$(".top_nav .fa-bars").click(function(){
	var $bg = $(".rt_bg");
	var $cont = $(".rt_cont");
	$bg.css({"opacity":0, "display":"block"}).stop().animate({"opacity":.3}, 1000);
	$cont.css({"display":"block", "right":"-240px"}).stop().animate({"right":0}, 1000);
});

$(".rt_cont .fa-close").click(function(){
	var $bg = $(".rt_bg");
	var $cont = $(".rt_cont");
	$bg.stop().animate({"opacity":0}, 800, function(){
		$(this).css({"display":"none"});
	});
	$cont.stop().animate({"right":"-240px"}, 800, function(){
		$(this).css({"display":"none"});
	});
});

$(".rt_bg").click(function(e){
	e.stopPropagation();
	$(".rt_cont .fa-close").trigger("click");
});

//메인 네비 /.navs
/* firebase.database().ref("root/test").push({test:"테스트"}).key; */