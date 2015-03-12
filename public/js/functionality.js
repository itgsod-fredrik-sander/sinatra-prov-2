$('#movie').change(function() {
  var movie_id = $(this).val().toString(); 

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
});