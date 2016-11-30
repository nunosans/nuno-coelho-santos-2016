$('document').ready(function() {

  // Lazy load images.

  $("img.lazy-load").lazyload({
    threshold: 800,
    effect: "fadeIn",
    effectspeed: 400
  });

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
