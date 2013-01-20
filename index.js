//center a element, horizontally and vertially.

var exports = module.exports = function (el) {

  center(el)

  function onResize () {
    center(el)
  }

  window.onresize = onResize
  //this hack is necessary, since in my demo I am just
  //appending the script, not using onready
  process.nextTick(onResize)
  return el
}
//elementToCenter, outerElemet (defaults to window)
//centering inside an element is untested
exports.center = center

function center (el, o) {

  o = o || window

  //innerWidth incase this is inside a window...
  var w = o.innerWidth  == null ? o.clientWidth : o.innerWidth
  var h = o.innerHeight == null ? o.clientHeight : o.innerHeight
  var cw = el.clientWidth
  var ch = el.clientHeight
  var l = w/2 - cw/2
  var t = h/2 - ch/2

  el.style.setProperty('position', 'absolute')
  el.style.setProperty('left', l+'px')
  el.style.setProperty('top', t+'px')

  return el
}

//TODO, also center element inside another element
