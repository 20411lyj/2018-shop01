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
// 공통 변수
var db = firebase.database();	//firebase의 데이터베이스 객체
var ref = new Array();
var key = "";
console.log(ref[0])
console.log(data)
// 네비게이션 구현

$(".navs li").on("click", function(){
	$(".navs li").css({"color":"#aaa", "background-color":"transparent"});
	$(this).css({"color":"#fff", "background-color":"#444"});
});
$(".navs li").eq(0).trigger("click");

homeInit();
function homeInit() {
    ref[0] = db.ref("root/home/");
    ref[0].on("child_added", homeAdd);
    
}


function homeAdd(data){
	var sel = ["", ""];
	if(data.val().target == "_blank") sel[0] = "selected";
	else sel[1] = "selected"; 
	var html = `
	<li>
		<input type="text" class="w3-input w3-border w3-show-inline-block" 
		value="${data.val().title}">
		<input type="text" class="w3-input w3-border w3-show-inline-block" 
		value="${data.val().link}">
		<select class="w3-select w3-border w3-show-inline-block">
			<option value="_blank" ${sel[0]}>새창</option>
			<option value="_self"  ${sel[1]}>현재창</option>
		</select>
		<button class="w3-green w3-button">수정</button>
		<button class="w3-red w3-button">삭제</button>
	</li>`;
	$("#homes").append(html);
}
$("#bt1_save").on("click", function(){
	if($("#title1").val() == "") {
		alert("제목 !!");
		return;
	}
	if($("#link1").val() == "") {
		alert("링크 !!");
		return;
	}
	ref[0].push({
		title: $("#title1").val(),
		link: $("#link1").val(),
		target: $("#target1").val()
	}).key;
	$("#title1").val("");
    $("#link1").val("");
    
});








//page1 / HOME
/*
(function(){
	ref = db.ref("root/home");
	ref.on("child_added", homeAdd);
}());
$("#bt1_save").click(function(){
	var $title = $("#title1");
	var $link = $("#link1");
	var $target = $("#target1");
	if($title.val() == ""){
		alert("제목을 입력하세요.");
		return;
	}
	if($link.val() == ""){
		alert("링크주소를 입력하세요.");
		return;
	}
	ref.push({
		title: $title.val(),
		link: $link.val(),
		target: $target.val()
	}).key;
	$title.val('');
	$link.val('');
});
function homeAdd(data) {
	var sel = ['', ''];
	if(data.val().target == "_blank") sel[0] = "selected";
	else sel[1] = "selected";
	var html = `
	<div id="${data.id}">
		<input type="text" class="w3-input w3-border w3-show-inline-block" 
		value="${data.val().title}">
		<input type="text" class="w3-input w3-border w3-show-inline-block" 
		value="${data.val().link}">
		<select class="w3-select w3-border w3-show-inline-block">
			<option value="_blank" ${sel[0]}>새창</option>
			<option value="_self" ${sel[1]}>현재창</option>
		</select>
		<button type="button" class="w3-indigo w3-button">수정</button>
		<button type="button" class="w3-red w3-button">삭제</button>
	</div>`;
	$("#homes").append(html);
}
*/
