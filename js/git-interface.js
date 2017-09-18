var Search = require('./../js/git.js').searchModule;
$(document).ready(function() {
  var nameSearch = new Search();
  $('#searchName').click(function() {
    var user = $('#userName').val();
    var x = nameSearch.getUser(user)
    $('.result').show()
    $("li.remove").remove();
    $("p.remove").remove();

  })
})
