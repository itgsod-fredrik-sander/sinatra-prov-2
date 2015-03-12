$('#movie').change(function() {
  var movie_id = $(this).val().toString(); 

  $.get('/movie/' + movie_id + '/biographs', function (res) {
    var data = $.parseJSON(res);

    if (data.length < 0)
      return;

    console.log(data);

    var biographs = $('<select>').appendTo('body');
    $(data).each(function() {
    });

  })
});