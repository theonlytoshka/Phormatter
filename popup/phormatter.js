function clear() {
  document.getElementById("unformatted").value = '';
  document.getElementById("formatted").value = '';
  //window.close();
}

function format() {
  var str = document.getElementById("unformatted").value;
  if ( str == "") {
    console.log("Field is Empty");
  } else {
    var formatted = str.replace(/\D/g, '');
    if (formatted.charAt(0) == ('1')) {
      var result = formatted.substring(1);
      document.getElementById("formatted").value = result
    } else {
      document.getElementById("formatted").value = formatted
    }
  }
}

document.querySelector("#format").addEventListener("click", format);
document.querySelector("#reset").addEventListener("click", clear);


