$(document).ready(function() {
	//анимейт цсс
	$(".about .col-md-12").animated("fadeInDown", "fadeOutUp");
	$(".item .col-md-4").animated("fadeInDown", "fadeOutUp");
	$(".people .people-man").animated("flipInY", "flipInX");
	$(".contacts .map").animated("fadeInLeft", "fadeOutLeft");
	$(".contacts .dress").animated("fadeInRight", "fadeOutRight");




//меню навигации кнопка
var animTime = 900;
$(".menu-button").on('click', function (event){
  event.preventDefault();
  
  var men = $(".main-head .main-menu");
  men.toggleClass('show');
});


//продукты при наведении

$(".product .col-md-4").on('click', function (event){
  event.preventDefault();
  $(this).toggleClass('productbig');
  $('productbig').css('width', '60%');
  $('productbig').css('height', '60%');
})



//форма обратной связи
$(".form-button").on('click', function (event){
  event.preventDefault();
  $("form").toggleClass('show');
  $(this).toggleClass("animated");
  $(this).toggleClass("tada");
})



/*
$('.main-head .main-menu ul li a').on('click', function() {
    var men = $(".main-head .main-menu");
    men.toggleClass('show');
})
*/

	//галерея - item
	
/*
	 var animTime = 900;
 


  $('.item .gallery').on('click', function (e){
    var modal = $('.item .gallery-big');
    modal.css('top', (window.innerHeight - modal.height()) / 2);
    modal.css('left', (window.innerWidth - modal.width()) / 2.3);
    modal.css('background-image', $(e.target).css('background-image'));
    modal.fadeIn(animTime);
  })
 
  $('.gallery-big').on('click', function(){
    $(this).fadeOut(animTime);

*/
  });


 var modal = $('.gallery-big');
  var oldDiv = null;
  
  function close (cb) {
    if(oldDiv){
      modal.animate({
        'height':oldDiv.height(),
        'width':oldDiv.width(),
        'top':oldDiv.offset().top,
        'left':oldDiv.offset().left
      },{
        duration:500,
        complete: function(){
          oldDiv.css({opacity:1});
          oldDiv.animate({'opacity':1},{duration:1,complete:function(){
            modal.css({'display':'none'});
            oldDiv = null;
            if(cb) 
              cb();
          }});
        }
      });
    };
  };
 
  $('.gallery div').on('click', function(e){
    var jthis = $(this);
    var r = null;
      function show(){
        modal.css({ 'top':jthis.offset().top,
                'left':jthis.offset().left,
                'width':jthis.width(),
                'height':jthis.height(),
                'background-image':jthis.css('background-image'),
                'opacity':'1',
                'display':'block'
              });
        jthis.css('opacity',1);
        modal.animate({'height':400,'width':600,
                    'top':(window.innerHeight - 400) / 2,
                    'left':(window.innerWidth - 600) / 2.1},{
            duration: 500,
            specialEasing: {
              height: 'swing',
              width: 'swing'
            }
          });
        oldDiv = jthis;
      }
    if(oldDiv && oldDiv.attr('class') == jthis.attr('class'))
      close();
    else if(oldDiv != null){
      close(show);
    }else{
      show();
    }
  })
 
  $('.gallery-big').on('click', function(){
      close();
  }); 