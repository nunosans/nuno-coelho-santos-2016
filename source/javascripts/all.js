$('document').ready(function() {

  // Wait for web fonts.

  function waitForWebfonts(fonts, callback) {
    var loadedFonts = 0;
    for(var i = 0, l = fonts.length; i < l; ++i) {
      (function(font) {
        var node = document.createElement('span');
        // Characters that vary significantly among different fonts
        node.innerHTML = 'giItT1WQy@!-/#';
        // Visible - so we can measure it - but not on the screen
        node.style.position      = 'absolute';
        node.style.left          = '-10000px';
        node.style.top           = '-10000px';
        // Large font size makes even subtle changes obvious
        node.style.fontSize      = '300px';
        // Reset any font properties
        node.style.fontFamily    = 'sans-serif';
        node.style.fontVariant   = 'normal';
        node.style.fontStyle     = 'normal';
        node.style.fontWeight    = 'normal';
        node.style.letterSpacing = '0';
        document.body.appendChild(node);

        // Remember width with no applied web font
        var width = node.offsetWidth;

        node.style.fontFamily = font + ', sans-serif';

        var interval;
        function checkFont() {
          // Compare current width with original width
          if(node && node.offsetWidth != width) {
            ++loadedFonts;
            node.parentNode.removeChild(node);
            node = null;
          }

          // If all fonts have been loaded
          if(loadedFonts >= fonts.length) {
            if(interval) {
              clearInterval(interval);
            }
            if(loadedFonts == fonts.length) {
              callback();
              return true;
            }
          }
        };

        if(!checkFont()) {
          interval = setInterval(checkFont, 50);
        }
      })(fonts[i]);
    }
  };

  waitForWebfonts(['Grifo M'], function() {
    $('html').addClass('wf-local-active');
  });

  // Lazy load images.

  /*$("img.lazy-load").lazyload({
    threshold: 800,
    effect: "fadeIn",
    effectspeed: 400
  });*/

  // Expand introduction text.

  $('button[data-action="show-intro-complete"]').click(function(event) {
    event.preventDefault();
    $('.intro-short').attr('data-layout', 'hidden');
    $('.intro-complete, .intro-bio').attr('data-layout', 'visible');
  });

  // Play and pause Currency for iOS video.

  $('button[data-action="play-currency-iphone"]').click(function(event) {
    event.preventDefault();
    $('.project-currency-iphone-video').find('video').get(0).play();
    $('button[data-action="play-currency-iphone"]').attr('data-layout', 'hidden');
    $('button[data-action="pause-currency-iphone"]').attr('data-layout', 'visible');
  });

  $('button[data-action="pause-currency-iphone"]').click(function(event) {
    event.preventDefault();
    $('.project-currency-iphone-video').find('video').get(0).pause();
    $('button[data-action="play-currency-iphone"]').attr('data-layout', 'visible');
    $('button[data-action="pause-currency-iphone"]').attr('data-layout', 'hidden');
  });

  // Play and pause Thread Browse Mobile video.

  $('button[data-action="play-thread-browse-mobile"]').click(function(event) {
    event.preventDefault();
    $('.project-thread-browse-mobile-video').find('video').get(0).play();
    $('button[data-action="play-thread-browse-mobile"]').attr('data-layout', 'hidden');
    $('button[data-action="pause-thread-browse-mobile"]').attr('data-layout', 'visible');
  });

  $('button[data-action="pause-thread-browse-mobile"]').click(function(event) {
    event.preventDefault();
    $('.project-thread-browse-mobile-video').find('video').get(0).pause();
    $('button[data-action="play-thread-browse-mobile"]').attr('data-layout', 'visible');
    $('button[data-action="pause-thread-browse-mobile"]').attr('data-layout', 'hidden');
  });

  // Hide and show columns.

  $('button[data-action="show-columns"]').click(function(event) {
    event.preventDefault();
    $('*[data-action="show-columns"]').attr('data-layout', 'hidden');
    $('*[data-action="hide-columns"]').attr('data-layout', 'visible');
    $('#column-grid').attr('data-layout', 'visible');
  });

  $('button[data-action="hide-columns"]').click(function(event) {
    event.preventDefault();
    $('*[data-action="show-columns"]').attr('data-layout', 'visible');
    $('*[data-action="hide-columns"]').attr('data-layout', 'hidden');
    $('#column-grid').attr('data-layout', 'hidden');
  });

})
