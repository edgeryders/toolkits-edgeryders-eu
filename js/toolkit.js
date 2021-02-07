// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.card',
  layoutMode: 'masonry',
resize: true,
  getSortData: {
    likes: '.likes parseInt',
  },
sortAscending: {
        likes: false,
    },
sortBy: 'likes'
});

// bind sort button click
$('.sort-by-button-group').on( 'click', 'button', function() {
  $('.card').removeClass("aos-init").removeAttr('data-aos');
  $grid.isotope('layout');
  var sortValue = $(this).attr('data-sort-value');
  $grid.isotope({ sortBy: sortValue });
});

$('.filter-button-group').on( 'click', 'button', function() {
  $('.card').removeClass("aos-init").removeAttr('data-aos');
  $grid.isotope('layout');
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
  $grid.isotope('layout');
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});