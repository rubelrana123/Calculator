function deleteMe(){
  document.getElementById("myResult").value = ""

};

function calculator(newValue) {
  document.getElementById("myResult").value += newValue;//newvalue = newvalue +"1"

};
 function answer() {

  var a = document.getElementById("myResult").value;
  var b = eval(a);
   document.getElementById('myResult').value = b;

 };