var x, y, result

function appendtodisplay(value) {
   document.getElementById("display").value+= value;
}
function cleardisplay() {

   document.getElementById("display").value='';
}
function calculate() {
      try {
   document.getElementById("display").value= eval(document.getElementById("display").value);
} catch(e)
 { document.getElementById("display").value= 'Error'   
}
}