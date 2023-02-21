function mostrarOcultarInfo(clase1,clase2,clase3) {
  let btns = document.getElementsByClassName(clase1);
  let txts = document.getElementsByClassName(clase2);
  let icons = document.getElementsByClassName(clase3);
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click",function() { 
    if (txts[i].style.display == "block") {
      txts[i].style.display = "none";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");    
    } else {
      txts[i].style.display = "block";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");}
  });
}
};

function cambiarFondo(clase1,clase2) {
  let elementos1 = document.getElementsByClassName(clase1);
  let elementos2 = document.getElementsByClassName(clase2);
  elementos1[1].addEventListener("click",function() {
    for (let i = 0; i < elementos2.length; i++) {
      if (elementos2[i].style.background == "black") {
        elementos2[i].style.background = "white";
        elementos2[i].style.color = 'black';  
      } else {
        elementos2[i].style.background = "black";
        elementos2[i].style.color = "white";}
      }
  })
};

function mouseOverOut(clase) {
  let elementos = document.getElementsByClassName(clase);
  for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener("mouseover",function() {
    elementos[i].style.color = "white";})
    elementos[i].addEventListener("mouseout",function() {
    elementos[i].style.color = "black";})
  }
};

mostrarOcultarInfo("btn_evento","txt_oculto","icon_btn");
mouseOverOut("menu_item");
mouseOverOut("sup_item");
cambiarFondo("sup_item","contenido");