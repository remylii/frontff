var $ = require('jquery'),
  Langlist = require('./components/langlist.js');

$(function() {
  var list = Langlist.getList();
  var ul = document.createElement('ul');

  for (var i = 0; i < list.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = list[i].name;
    ul.appendChild(li);
  }

  document.getElementById('js-area').appendChild(ul);
});
