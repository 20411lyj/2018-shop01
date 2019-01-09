/* var depth = 0;
var now = 0;
var end = $(".slide").length - 1;
$(".slide").each(function(){
	if(depth < $(this).css("z-index")) depth = $(this).css("z-index");
});
depth++;
ani();
function ani() {
	$(".slide").eq(now).css({"z-index":depth++, "opacity":0});
	$(".slide").eq(now).delay(3000).animate({"opacity":1}, 1000, function(){
		if(now == end) now = 0;
		else now++;
		ani();
	});
} */

var SlideFade = (function(){
	function SlideFade(slides, options) {
        var obj = this;
        this.slides = options.slides;
        this.delay  = options.delay;
        this.speed  = options.speed;
        this.now = 0;
        this.end = this.slides.length-1;
        this.depth = 0;
        this.init(obj);
        console.log(this);
	}
	SlideFade.prototype.init = function() {
        console.log(this);
		this.slides.each(function(){
            con
            if(obj.depth < $(this).css("z-index")) obj.depth = $(this).css("z-index");
        });
	}
	return SlideFade;
}());

var options = {
    slides : $(".slide"),
    delay : 3000,
    speed : 1000
}
var mainBanner = new SlideFade($(".slide"), options);

