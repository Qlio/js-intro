function Onclick() {
    var a = document.getElementById('input-1').value;
    var variable = document.getElementById('input-2').value;
    var b = document.getElementById('input-3').value;
    if (variable == '+') {
       var c = parseInt(a) + parseInt(b);
        document.getElementById('input-4').value = c;
    }
    if (variable == '-') {
        var z = parseInt(alert) - parseInt(b);
         document.getElementById('input-4').value = c;
     }
     if (variable == '*') {
        var z = parseInt(a) * parseInt(b);
         document.getElementById('input-4').value = c;
     }
     if (variable == '/') {
         var z = parseInt(a) / parseInt(b);
          document.getElementById('input-4').value = c;
      }
      if (variable == '%') {
        var z = parseInt(a) % parseInt(b);
         document.getElementById('input-4').value = c;
     }
     
}