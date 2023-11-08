function entrou_carrossel() {
  document.getElementById("botao_anterior").style.display = "block";
  document.getElementById("botao_proxima").style.display = "block";
  document.getElementsByClassName("legendas_slides").style.display = "none";
}
function saiu_carrossel() {
  document.getElementById("botao_anterior").style.display = "none";
  document.getElementById("botao_proxima").style.display = "none";
  document.getElementsByClassName("legendas_slides").style.display = "block";
}

$(document).ready(function(){
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    textoArray.pop();
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
       setTimeout(() => elemento.innerHTML = elemento.innerHTML.replace("|", "") + letra +"|", 75 * i);
       if(textoArray.length-1 == i){
          setTimeout(() => 1000);
       }
    });
 }
 
 const titulo = document.querySelector('#titulo_entrada');
 typeWriter(titulo);

    $('#img_welcome').css('display', 'none');
    $('#img_welcome').fadeToggle(1500);
  });