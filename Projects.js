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

  

const portada = document.querySelector(".portada")
const conteportada = document.getElementsByClassName("conteportada")
const secondportada = document.querySelector(".secondportada")
const secondconteportada = document.getElementsByClassName("secondconteportada")

for (i=0; i < conteportada.length;i++){
  conteportada[i].addEventListener('transitionend', (event) => {
    // La transición ha terminado, puedes realizar acciones aquí
    event.srcElement.style.transitionDelay = "0s"
  });
}

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
  setTimeout(function(){
    Aparicion(secondportada,secondconteportada,"secondportadaS")
    secondportada.classList.add("secondportadaStimer")
    for (let i=0; i < secondconteportada.length;i++){
    secondconteportada[i].classList.add("secondconteportadaStimer")}
  },200)
},2000)






const bodys = document.querySelectorAll("body");
bodys[0].classList.remove("bodyQ");

function delay (URL) {
  setTimeout(function() {bodys[0].classList.add("bodyQ")}, 100)
  setTimeout(function() { window.scrollTo(0, 0)}, 500)
  setTimeout( function() { window.location.href = URL;}, 1000);

}

const flktyviewport = document.getElementsByClassName("flickity-viewport")


window.addEventListener("resize", function(){
  flktyviewport[0].style.height = "100%"
})


var flkty = new Flickity( '.carousel', {
  // options
  // cellAlign: 'left',
  contain: true
});
