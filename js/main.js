$(document).ready(function () {
  $("a").click(function (event) {
    event.preventDefault();
  });
  // Active class on navbar links
  $('.navbar .navbar-nav .nav-link').click(function () {
    $('.navbar .navbar-nav').find('.nav-link').removeClass('active');
    $(this).addClass('active');
  })
  // Calc main slider height
  let winH = $(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH - (upperH + navH));
  // Shuffle in Work Section
  $('.work ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('shuffle') == 'all') {
      $(`.work .shuffle img`).css('opacity', 1);
    } else {
      $(`.work .shuffle img`).css('opacity', .1);
      $(`.work .shuffle .${$(this).data('shuffle')}`).css('opacity', 1);
    }
  })
  // Increase Stats Numbers When Scroll
  function increase(element) {
    let counter = setInterval(() => {
      $(element).text(parseInt($(element).text()) + 1);
      // console.log($(element).text());
      if ($(element).text() == $(element).data('num')) clearInterval(counter);
    }, $(element).data('num') / 5000)
  }
  // console.log($('.stats .box .num'));
  // console.log(parseInt($('.stats .box .num').first().text()) + 2);
  // console.log($('.stats').offset().top);
  // let counter = 0;
  let check = true;
  $(window).scroll(function () {
    // console.log($(window).scrollTop());
    if ($(window).scrollTop() > $('.stats').offset().top - 500) {
      if (check) {
        $('.stats .box .num').each(function () {
          increase(this);
        })
      }
      check = false;
    }
  });
  console.log();
});
