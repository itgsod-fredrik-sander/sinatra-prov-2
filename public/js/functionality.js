$('#movie').change(function() {
  var movie_id = $(this).val().toString(); 

  clearOptions($('#biographs'));
  clearOptions($('#times'));

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
});

$('#cinemas').change(function() {
  var cinema_id = $(this).val().toString();

  clearOptions($('#movies'));
  clearOptions($('#showings'));

  $.get('/cinema/' + cinema_id + '/movies', function(res) {
    var data = $.parseJSON(res);

    $(data).each(function() {
      $('#movies').append($('<option>', {
        value: this.id,
        text: this.name
      }))
    });
  });
});

$('#movies').change(function() {
  var movie_id = $(this).val().toString();

  clearOptions($('#showings'));
});

function clearOptions(element) {
  element.empty();
}