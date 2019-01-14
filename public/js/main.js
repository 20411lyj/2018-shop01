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
//Firebase Init
var db = firebase.database();
db.ref("root/home").on("child_added", homeAdd);
function homeAdd(data) {
	var html = `
	<li class="rt_arrow">
		<a href="${data.val().link}" target="${data.val().target}">${data.val().title}</a>
	</li>`;
	$(".nav_sub").eq(0).append(html);
}

// top_nav hover 이벤트
$(".top_icon").mouseenter(function(){
	$(this).children("img").css({"opacity":.7});
});
$(".top_icon").mouseleave(function(){
	$(this).children("img").css({"opacity":1});
});

// nav 이벤트 (nav_sub show/hide)
$(".nav").mouseenter(function(){
	$(this).children(".nav_sub").css({"display":"block", "opacity":0}).stop().animate({"opacity":1, "top":"45px"}, 200);
});
$(".nav").mouseleave(function(){
	$(this).children(".nav_sub").stop().animate({"opacity":0, "top":"80px"}, 200, function(){
		$(this).css({"display":"none"});
	});
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

//메인네비 / .navs
//firebase.database().ref("root/test").push({test:"테스트"}).key;