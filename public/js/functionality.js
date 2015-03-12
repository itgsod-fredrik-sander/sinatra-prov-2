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

function clearOptions(element) {
  element.empty();
}

function hideElement(element) {
  element.css('visibility', 'hidden');
}

function showElement(element) {
  element.css('visibility', 'visible');
}