$( document ).ready(function() {
  $('.hero-split').height( ($( window ).height() - 50) );
  $( window ).resize(function() {
    $('.hero-split').height( ($( window ).height() - 50) );
  })

  $('.drop').click(function() {
    $('html, body').animate({
          scrollTop: $(window).height()
        }, 1000);
  });
});
