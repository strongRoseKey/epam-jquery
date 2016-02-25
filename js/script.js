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
  console.log($("#attr1 a").attr("href"));
});

$("#attr2 button").click(function() {
  $('#attr2 a').attr('href','http://www.google.com');

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

$('#animate1').mouseover(function(){
  $('#animate1 img').animate({
    width:"70%",

  }, 1000, function() {
    // Animation complete.
  });
});


$('#mouse img').mouseover(function() {
  $( "#mouse img" ).css( "width","50%" );
});

$('#mouse img').mouseout(function() {
  $( "#mouse img" ).css( "width","20%" );
});


$( "#formEvents button" ).click(function( event ) {
  event.preventDefault();
  console.log($( "#inputEmail3").val());
  console.log($( "#inputPassword3").val());
  console.log($( "#cb").val());

});

$( "#animate2 img" ).dblclick(function() {

   $('#animate1 img').animate({
    left: '+=30',


  }, 1000, function() {
    // Animation complete.
    console.log("$$4");
  });
});

//to do

$('#animate3 img').click(function() {
  console.log("%^%^%^");
  $('#animate3 img').fadeIn({queue: false, duration: 'slow'});
  $('#animate3 img').animate(
    { top: "-10px" }, 'slow');

});
