var hover1 = function() {
  $("li").eq(0).css("text-decoration", "underline");
  $("li").eq(1).css("text-decoration", "none");
  $("li").eq(2).css("text-decoration", "none");
}
var hover2 = function() {
  $("li").eq(0).css("text-decoration", "none");
  $("li").eq(1).css("text-decoration", "underline");
  $("li").eq(2).css("text-decoration", "none");
}
var hover3 = function() {
  $("li").eq(0).css("text-decoration", "none");
  $("li").eq(1).css("text-decoration", "none");
  $("li").eq(2).css("text-decoration", "underline");
}
var hover4 = function() {
  $("li").eq(0).css("text-decoration", "none");
  $("li").eq(1).css("text-decoration", "none");
  $("li").eq(2).css("text-decoration", "underline");
}

// hover nav
$("#abt").hover(hover1);
//$("li").eq(0).hover(hover1);
$("#portfolio").hover(hover2);
//$("li").eq(2).hover(hover3);
$("#other").hover(hover4);
//$("li").eq(3).hover(hover4);