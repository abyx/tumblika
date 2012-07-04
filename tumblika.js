var iframes = $('iframe').filter(function() {
    return $(this).attr('src').indexOf('assets.tumblr') != -1;
});

if (iframes.length == 0) {
  window.alert("This doesnt seem like a tumblr");
  return;
}

var src = $(iframes[0]).attr('src');
var search = src.replace(/^.+?\?'/, '');

// Stolen from stackoverflow answer
function getParameterByName(name, search) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(search);
  if(results == null) {
    return "";
  } else {
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}

var name = getParameterByName('name', search);
window.location = "http://tumblr.com/liked/by/" + name;
