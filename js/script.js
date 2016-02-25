// Note that the following is a shorthand for the DOMReady event
$(function() {

});

$("#prepend button").click(function() {
	$("#prepend p").prepend("Yo! ");
});

$("#before button").click(function() {
  $("#before p").before('ha! ');

});

$("#css1 button").click(function() {
  $("#css1 p").css('font-size','30px');

});

$("#css2 button").click(function() {
  $('#css2 p').css({"color": "red", "font-size": "20px"});

});

$("#attr1 button").click(function() {
  console.log("visit baidu?");
});

$("#attr2 button").click(function() {
  $('#attr2 p').attr('p','visit baidu');

});

$("#class1 button").click(function() {
  $("#class1 p").addClass("bg-primary");

});

$("#class2 button").click(function() {
  if(
  $("#class2 p").hasClass( "lead")){
    $("#class2 p").after('yes!');
  }

});

$("#form1 button").click(function() {
  var k = $("#exampleInputEmail1").val();
  console.log(k);

});

$("#form2 button").click(function() {
  var m = $("#exampleInputName2").val("fiona");

});

// handle the mouseover event here

// handle the form events here

$("#formEvents form").submit(function(event) {

});