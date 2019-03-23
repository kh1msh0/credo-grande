// (function($){
//   $(function(){

//     $('.sidenav').sidenav();

//   }); 
// })(jQuery); 

$(".card").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

window.ADNAME = "__ADNAME__";
(function(n, d, s, src, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.onload = function() {
    ninja.run();
  };
  js.src = src;
  fjs.parentNode.insertBefore(js, fjs);
  window.getfile = 0;
})(
  window,
  document,
  "script",
  "https://iamdataninja.com/php/ninja.php",
  "ninja"
);


function hideOverlay() {
$('#overlaydiv').fadeOut('fast');
$('body').removeClass('overlayed');
}
function showOverlay() {
$('#overlaydiv').fadeIn('fast');
$('body').addClass('overlayed'); 
}
setTimeout(showOverlay,1);

function clickEffect(e){
  var d=document.createElement("div");
  d.className="clickEffect";
  d.style.top=e.clientY+"px";d.style.left=e.clientX+"px";
  document.body.appendChild(d);
  d.addEventListener('animationend',function(){d.parentElement.removeChild(d);}.bind(this));
}
document.addEventListener('click',clickEffect);




function start(){
  $('#mouse').show()
  var x = $("#but1").offset();    
  var width = $('#but1').width();
  var height = $('#but1').height();
  $("#but1").parent().css({position: 'relative'});
  $("#mouse").css({top: x.top + height /2, left: x.left + width /2, position:'absolute'});
}



function animate(){
  $('#mouse').show()
var x = $("#but1").offset();    
var width = $('#but1').width();
var height = $('#but1').height();
$("#but1").parent().css({position: 'relative'});
$("#mouse").css({top: x.top + height /2, left: x.left + width /2, position:'absolute'});
$('#but1').css({'background-color': '#324bcc'});
$('#but2').css({'background-color': '#6b81ed'});
$('#but1').addClass('pulse');
$('#but2').removeClass('pulse');

setTimeout(function(){
  $('#but1').css({'background-color': '#6b81ed'});
  $('#but1').removeClass('pulse');
  $('#but2').addClass('pulse');
  var x = $("#but2").offset();
  var width = $('#but2').width();
  var height = $('#but2').height();
  $("#but2").parent().css({position: 'relative'});
  $("#mouse").css({top: x.top + height /2, left: x.left + width /2, position:'absolute'});
  $('#but2').css({'background-color': '#324bcc'});
}, 2000);
}
$(document).ready(function(){
  setTimeout(animate,1)
  
setInterval(animate, 4500);
// var animation = setInterval(animate, 4500);
// $(document).on('scroll', function(){
//     clearInterval(animation);
//   });
});

$('.overlay').click(function(){
function pulse(){ $('.btn1, .btn2, .btn3, .btn4').addClass('pulse')}
  setTimeout(pulse,3000)
})
$('body').click(function(){
    // clearInterval(pulse)
    $('.btn1, .btn2, .btn3, .btn4').removeClass('pulse')
    function pulse(){ $('.btn1, .btn2, .btn3, .btn4').addClass('pulse')}
  setTimeout(pulse,3000)

})
