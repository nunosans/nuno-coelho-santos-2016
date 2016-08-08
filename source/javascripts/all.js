// This is where it all goes :)

$('document').ready(function() {

  $('*[data-action="show-intro-complete"]').click(function(event) {
    event.preventDefault();
    $('.intro-short').attr('data-layout', 'hidden');
    $('.intro-complete').attr('data-layout', 'visible');
  });

})
