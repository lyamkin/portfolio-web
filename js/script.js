 // Get the current year for the copyright
 $('#year').text(new Date().getFullYear());

//Scrollspy
$('body').scrollspy({target: '#main-nav'});

// Smooth Scrolling
$("#main-nav a, .about-link-3").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      window.location.hash = hash;
    });
  }
});