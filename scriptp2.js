var buttom = document.getElementById("boton");
var input1=document.getElementById("series");
var input2=document.getElementById("plataforma");
var input3=document.getElementById("descripcion");
var lista=document.getElementById("lista");
buttom.addEventListener("click",function(event){
	    event.preventDefault();
  console.log(input1.value)
  console.log(input2.value)
  console.log(input3.value)
 lista.insertAdjacentHTML("beforeend","<br>"+ input1.value +"  |"+" "+ input2.value +"  | "+ input3.value)
}
     
)

$(document).ready(function() {
  $("boton").hover(function(){
    $("ss").css("text-color", "red")
});      
});