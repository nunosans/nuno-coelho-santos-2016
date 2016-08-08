// This is where it all goes :)

$('document').ready(function() {

  $('*[data-action="show-intro-complete"]').click(function(event) {
    event.preventDefault();
    $('.intro-short').attr('data-layout', 'hidden');
    $('.intro-complete').attr('data-layout', 'visible');
  });

  $('*[data-action="hide-intro-complete"]').click(function(event) {
    event.preventDefault();
    $('.intro-short').attr('data-layout', 'visible');
    $('.intro-complete').attr('data-layout', 'hidden');
  });

})
