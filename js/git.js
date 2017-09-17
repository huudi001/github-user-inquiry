var apiKey = require('./../.env').apiKey;
Search = function () {
}
Search.prototype.getUser = function() {
var users = $('#userName').val();
    $.get('https://api.github.com/users/' + users + '?access_token=' + apiKey).then(function(response){
        $('.name').text(response.login);
        $('.link').append(response.html_url);

        console.log(response)
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
    $.get('https://api.github.com/users/' + users + '/repos?access_token=' + apiKey).then(function(response){
      console.log(response);
      for (var i = 0; i < response.length; i++) {
        if (response[i].description === null) {
          response[i].description = "No description"
        } else {
          response[i].description = response[i].description
        }
        $('.link').append("<li class = 'remove'>" +  response[i].name + "</li>" + "<p class = 'remove'>" + response[i].description + "<br>" + response[i].html_url + "</p>")
      }
  }).fail(function(error) {
    console.log("errorname");
  });

  };
exports.searchModule = Search;
