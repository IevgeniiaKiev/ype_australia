$(document).ready(function() {
  $('.nav__anchor').each(function() {
    $(this).on('click', function(e) {
      var hash = this.hash;
      if (hash) {
        e.preventDefault();

        if (parseInt($(window).width()) > 767) {
          $('html, body').animate({scrollTop: $(hash).offset().top - 30}, 750);
        } else {
          $('#sideNav').css('width', 0);
          $('html, body').animate({scrollTop: $(hash).offset().top - 130}, 750);
        }
      }
    });
  });
});
