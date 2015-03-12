$('#movie').change(function() {
  var movie_id = $(this).val().toString(); 

  $.get('/movies/', function (res) {
    var data = $.parseJSON(res);
    loadPath(data, 0);
  });
});