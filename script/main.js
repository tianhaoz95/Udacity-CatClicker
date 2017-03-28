
var kitty_list = [
  'Thea',
  'Alice',
  'Sofia',
  'Shakira',
  'Hailee',
];

var srcs = [
  'img/cat1.jpg',
  'img/cat2.jpg',
  'img/cat3.jpg',
  'img/cat4.jpg',
  'img/cat5.jpg',
];

var counters = [0, 0, 0, 0, 0];

$(document).ready(function() {

  for (var i = 0; i < kitty_list.length; i++) {
    var kitty_name = $('<p></p>').text(kitty_list[i]);
    var kitty_entry = $('<a></a>').html(kitty_name).click((function(idx) {
      return function() {
        $('#kitty_detail').empty();
        var kitty_img = $('<img>', {height:300 , src:srcs[idx]});
        var click_count = $('<p></p>', {id:'kitty_counter'}).text(counters[idx]);
        var kitty_name = $('<p></p>').text(kitty_list[idx]);
        var kitty_click = $('<a></a>').html(kitty_img).click(function() {
          var old = counters[idx];
          counters[idx] = old + 1;
          $('#kitty_counter').text(counters[idx]);
        });
        $('#kitty_detail').append(kitty_name);
        $('#kitty_detail').append(click_count);
        $('#kitty_detail').append(kitty_click);
      };
    })(i));
    $('#kitty_list').append(kitty_entry);
  }

});
