
var center = require('../')
var el
document.body.appendChild(center((function () {
  var el = document.createElement('div')
  el.innerHTML = '<H1> HELLO </H1> create centered elements'
    +'<ol><li>vertically</li><li>horizontally</li></ol>'
  return el
})()))


