$(document).ready(function(){
    $('.modal').modal();

    $('.parallax').parallax();
    
    $('.materialboxed').materialbox();


    // Smooth scrolling 
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    // navigation toggle
      var toggler = $('.nav-toggler');
			var active = $('.toggler-active');
      var menu = $('.main-nav');
      var link = $('.nav-link');

			toggler.click(function(){
				toggler.toggleClass('toggler-active');
				menu.toggleClass('open-nav');
			});
			active.click(function(){
				toggler.removeClass('toggler-active');
				menu.removeClass('open-nav');
      });
      link.click(function(){
				toggler.removeClass('toggler-active');
				menu.removeClass('open-nav');
			});

  });