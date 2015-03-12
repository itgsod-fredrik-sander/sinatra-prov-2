$('#movie').change(function() {
  var movie_id = $(this).val().toString(); 

  $.get('/movie/' + movie_id + '/biographs', function (res) {
    var data = $.parseJSON(res);
  })
});