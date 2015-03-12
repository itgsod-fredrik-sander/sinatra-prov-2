// The first four code sections below takes care of hiding, showing and updating values of the selectors on the website

$('#movie').change(function() {
  var movie_id = $(this).val().toString(); 

  clearOptions($('#biographs'));
  clearOptions($('#times'));

  hideElement($('#biographs'));
  hideElement($('#times'));

  $.get('/movie/' + movie_id + '/biographs', function (res) {
    var data = $.parseJSON(res);

    if (data.length < 0)
      return;

    console.log(data);

    $(data).each(function() {
      $('#biographs').append($('<option>', {
        value: this.id,
        text: this.name
      }));
    });
  })

  showElement($('#biographs'));
});

$('#biographs').change(function() {
  var movie_id = $('#movie').val().toString();
  var biograph_id = $(this).val().toString();

  clearOptions($('#times'));

  $.get('/movie/' + movie_id + '/biographs/' + biograph_id + '/showings', function(res) {
    var data = $.parseJSON(res);

    $(data).each(function() {
      $('#times').append($('<option>', {
        value: this.id,
        text: this.start_time
      }));
    })
  });

  showElement($('#times'));
});

$('#cinemas').change(function() {
  var cinema_id = $(this).val().toString();

  clearOptions($('#movies'));
  clearOptions($('#showings'));

  hideElement($('#movies'));
  hideElement($('#showings'));

  $.get('/cinema/' + cinema_id + '/movies', function(res) {
    var data = $.parseJSON(res);

    $(data).each(function() {
      $('#movies').append($('<option>', {
        value: this.id,
        text: this.name
      }))
    });
  });

  showElement($('#movies'));
});

$('#movies').change(function() {
  var cinema_id = $('#cinemas').val().toString();
  var movie_id = $(this).val().toString();

  clearOptions($('#showings'));

  $.get('/cinema/' + cinema_id + '/movies/' + movie_id + '/showings', function(res) {
    var data = $.parseJSON(res);

    $(data).each(function() {
      $('#showings').append($('<option>', {
        value: this.id,
        text: this.start_time
      }))
    });
  });

  showElement($('#showings'));
});

// Public: clearOptions from element
//
// element - the element the options will be cleared from
//
// Examples
//
//   clearOptions($(#options));
//
// Clears the options from the element

function clearOptions(element) {
  element.empty();
}

// Public: hides element from website
//
// element - the element to be hidden
//
// Examples
//
//   hideElement($(#options));
//
// Hides the element

function hideElement(element) {
  element.css('visibility', 'hidden');
}

// Public: makes the element visible on the website
//
// element - the element to be visible
//
// Examples
//
//   hideElement($(#options));
//
// Makes the element visible

function showElement(element) {
  element.css('visibility', 'visible');
}