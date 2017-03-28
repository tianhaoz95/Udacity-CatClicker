var count1 = 0;
var count2 = 0;
var cat_name_1 = "Alice";
var cat_name_2 = "Thea";

$(document).ready(function() {
  $('#count1').text(count1);
  $('#count2').text(count2);
  $('#catName1').text(cat_name_1);
  $('#catName2').text(cat_name_2);
});

$('#cat_img1').click(function() {
  count1 = count1 + 1;
  $('#count1').text(count1);
});

$('#cat_img2').click(function() {
  count2 = count2 + 1;
  $('#count2').text(count2);
});
