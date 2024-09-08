/* 
  wefwef
*/
function add(){
  // hello ~
  // var num1, num2, result;

  
  var num1 = prompt("Enter Number 1: ");
  var num2 = prompt("Enter Number 2: ");
  var result = parseFloat(num1) + parseFloat(num2); //parseFloat decime value
  
  //alert("Result is"+result);
  // document.getElementById('h2id').innerHTML = result;

  //let h1ct = $('#h1id').text(); // .html() // a liitle bit diff
  //alert(h1ct);

  $('#h2id').text(result);
  $('#h2id').append(result);

}