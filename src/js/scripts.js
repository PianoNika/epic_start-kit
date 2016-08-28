$( document ).ready(function() {
  $('.hamburger').on('click', function () {
    $(this).toggleClass('is-active');
    $('.main-nav').slideToggle();
  });


  $('.promo__tabs-item').on('click', function () {
    $(this).find('a').addClass('active');
    $(this).siblings().find('a').removeClass('active');
  });

function calculateBottomIndent () { 
  $('.promotions__note').each(function(i){
    var noteHeight = $(this).height() + 60;
    $(this).css("bottom", noteHeight);
  });
}
calculateBottomIndent ();

  $('.owl-carousel').owlCarousel({
      items:1,
      loop:true,
      margin:10,
      dots:true,
      center:true,
      dotData:true,
  })
});


$(window).resize(function() {
  calculateBottomIndent ();
});
