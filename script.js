$(document).ready(function() {
  // Smooth scrolling for navigation links
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 80 // Adjust for header height
      }, 800);
      
      // Close mobile nav if open
      if ($('.mobile-nav').hasClass('open')) {
          $('.mobile-nav').removeClass('open');
          $('.mobile-nav-toggle').removeClass('open');
      }
    }
  });

  // Header scroll effect
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 10) {
      $('header').addClass('scrolled');
    } else {
      $('header').removeClass('scrolled');
    }
  });

  // Mobile navigation toggle
  $('.mobile-nav-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.mobile-nav').toggleClass('open');
  });

  // Hero section typing effect
  const taglines = [
    "Full-Stack Developer",
    "React Enthusiast",
    "Node.js Expert",
    "Python Scripter",
    "Lifelong Learner"
  ];
  let taglineIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const taglineTextElement = $('#tagline-text');

  function typeTagline() {
    const currentTagline = taglines[taglineIndex];
    
    if (isDeleting) {
      taglineTextElement.text(currentTagline.substring(0, charIndex - 1));
      charIndex--;
    } else {
      taglineTextElement.text(currentTagline.substring(0, charIndex + 1));
      charIndex++;
    }

    if (!isDeleting && charIndex === currentTagline.length) {
      setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      taglineIndex = (taglineIndex + 1) % taglines.length;
    }

    const typingSpeed = isDeleting ? 50 : 150;
    setTimeout(typeTagline, typingSpeed);
  }

  typeTagline();

});
