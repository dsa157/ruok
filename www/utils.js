window.onerror = function(msg, url, linenum) {
  alert("Script error: " + msg + ": line " + linenum + "/" + url);
}

function bind(scope, fn) {
  return function() {
    fn.apply(scope, arguments);
  };
}

function isEmpty(object) { 
  for(var i in object) { 
    return false; 
  } 
  return true; 
}

function handleCancellAll() {
  alert("cancel all");
}

function handleNotify(id) {
  alert("clicked on notification " + id);
}

