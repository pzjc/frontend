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

// portfolio part starts here
var items = []
  , point = document.querySelector('svg').createSVGPoint();

function getCoordinates(e, svg) {
  point.x = e.clientX;
  point.y = e.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function changeColor(e) {
  document.body.className = e.currentTarget.className;
}

function Item(config) {
  Object.keys(config).forEach(function (item) {
    this[item] = config[item];
  }, this);
  this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
  this.el.addEventListener('touchmove', this.touchMoveHandler.bind(this));
}

Item.prototype = {
  update: function update(c) {
    this.clip.setAttribute('cx', c.x);
    this.clip.setAttribute('cy', c.y);
  },
  mouseMoveHandler: function mouseMoveHandler(e) {
    this.update(getCoordinates(e, this.svg));
  },
  touchMoveHandler: function touchMoveHandler(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) return this.update(getCoordinates(touch, this.svg));
  }
};

[].slice.call(document.querySelectorAll('.item'), 0).forEach(function (item, index) {
  items.push(new Item({
    el: item,
    svg: item.querySelector('svg'),
    clip: document.querySelector('#clip-'+index+' circle'),
  }));
});

[].slice.call(document.querySelectorAll('button'), 0).forEach(function (button) {
  button.addEventListener('click', changeColor);
});
// portfolio part ends here
