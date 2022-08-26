$(function(){
    $('.slider__inner').slick({
    arrows:false,
    dots:true,
    });
    $('.works__inner').slick({
      slidesToShow:4,
      slidesToScroll:1,
      prevArrow:'<button type="button" class="slick-prev"><img src="images/1/slide-left.svg" alt=""></button>',
      nextArrow:'<button type="button" class="slick-next"><img src="images/1/slide-right.svg" alt=""></button>',
      });
  });