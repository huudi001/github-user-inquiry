(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "09d521ca9dad67cd633dc3e94569bd142f64d4cf";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
var Search = require('./../js/git.js').searchModule;
$(document).ready(function() {
  var nameSearch = new Search();
  $('#searchName').click(function() {
    var users = $('#userName').val();
    var x = nameSearch.getUser(users)
    $('.result').show()
    $("li.remove").remove();
    $("p.remove").remove();

  })
})

},{"./../js/git.js":2}]},{},[3]);
