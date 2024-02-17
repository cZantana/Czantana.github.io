console.log("JELOUDA")

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  //console.log("Top",rect.top)
  //console.log("window",window.innerHeight)
  return rect.top;
}

function Aparicion(section,items,styles)
{
  // console.log(window.scrollY == 0)
  // console.log(items)
  if (isInViewport(section) < (window.innerHeight*0.90))
  {
    let delay = 0.3
      for (let i=0; i < items.length;i++){
        if (window.getComputedStyle(items[i]).getPropertyValue("opacity") < 1)
        {
            // console.log("entro a poner")
            items[i].classList.add(styles)
            items[i].style.transitionDelay = String(delay)+"s"
            delay += 0.2
          // window.getComputedStyle(items[i]).getPropertyValue("opacity")
        }

      }
  }
  else if ((isInViewport(section) >= (window.innerHeight*0.55)) || window.scrollY == 0){
    let delay = 0
      for (let i=0; i < items.length;i++){
        // console.log("entro a quitar")
            items[i].classList.remove(styles)
            items[i].style.transitionDelay = String(delay)+"s"
            delay += 0.2
      }
  }
}



const portada = document.querySelector(".portada")
const conteportada = document.getElementsByClassName("conteportada")
const secondportada = document.querySelector(".secondportada")
const secondconteportada = document.getElementsByClassName("secondconteportada")

for (i=0; i < secondconteportada.length;i++){
  secondconteportada[i].addEventListener('transitionend', (event) => {
    // La transición ha terminado, puedes realizar acciones aquí
    event.srcElement.style.transitionDelay = "0s"
  });
}

Aparicion(portada,conteportada,"portadaS")
setTimeout(function(){
  portada.classList.add("portadaStimer")
  for (let i=0; i < conteportada.length;i++){
  conteportada[i].classList.add("conteportadaStimer")}
  setTimeout(Aparicion(secondportada,secondconteportada,"secondportadaS"),1000)
},2000)


setTimeout(function(){
  secondportada.classList.add("secondportadaStimer")
  for (let i=0; i < secondconteportada.length;i++){
  secondconteportada[i].classList.add("secondconteportadaStimer")}
},2000)

const bodys = document.querySelectorAll("body");
bodys[0].classList.remove("bodyQ");

function delay (URL) {
  setTimeout(function() {bodys[0].classList.add("bodyQ")}, 100)
  setTimeout(function() { window.scrollTo(0, 0)}, 500)
  setTimeout( function() { window.location.href = URL;}, 1000);

}


var flkty = new Flickity( '.carousel', {
  // options
  // cellAlign: 'left',
  contain: true
});