console.log("JELOUDA")

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  // console.log("Top",rect.top)
  // console.log("window",window.innerHeight)
  return rect.top;
}

function Aparicion(section,items,styles)
{
  // console.log(window.scrollY == 0)
  if (isInViewport(section) < (window.innerHeight*0.70))
  {
    let delay = 0.3
      for (i=0; i < items.length;i++){
        if (window.getComputedStyle(items[i]).getPropertyValue("opacity") < 1)
        {
          items[i].classList.add(styles)
          items[i].style.transitionDelay = String(delay)+"s"
          delay += 0.2
          // window.getComputedStyle(items[i]).getPropertyValue("opacity")
        }

      }
  }
  else if ((isInViewport(section) >= (window.innerHeight*0.55)) || window.scrollY == 0){
    let delay = 0
      for (i=0; i < items.length;i++){
        items[i].classList.remove(styles)
        items[i].style.transitionDelay = String(delay)+"s"
        delay += 0.2
      }
  }
}

const aboutSection = document.querySelector('.about-me');
const contsobreMi = document.getElementsByClassName("contenidosobremi")
const homecontent = document.querySelector(".home-content")
const homesection = document.querySelector(".home")

const proyectSection = document.querySelector('.proyectos');
const contproyects = document.getElementsByClassName("titleproyectos")

const hovercards = document.querySelector('.hovercards');
const cards = document.getElementsByClassName("card")

const bodys = document.querySelectorAll("body");
bodys[0].classList.remove("bodyQ");

const navbar = document.querySelectorAll("header");
navbar[0].classList.remove("headerQ");

homesection.style.height = String(homecontent.offsetTop+homecontent.offsetHeight)+"px";

window.addEventListener("resize", function(event){
  homesection.style.height = String(homecontent.offsetTop+homecontent.offsetHeight)+"px";
})

for (i=0; i < cards.length;i++){
  cards[i].addEventListener('transitionend', (event) => {
    // La transición ha terminado, puedes realizar acciones aquí
    event.srcElement.style.transitionDelay = "0s"
  });
}

// Aparicion de sobre mi

document.addEventListener('scroll', function () {

  Aparicion(aboutSection,contsobreMi,"sobreMiS")
  Aparicion(proyectSection,contproyects,"titleproyectosS")
  Aparicion(hovercards,cards,"cardS")
})


// delay href
function delay (URL) {
  navbar[0].classList.add("headerQ")
  setTimeout(function() {bodys[0].classList.add("bodyQ")}, 100)
  setTimeout(function() { window.scrollTo(0, 0)}, 500)
  setTimeout( function() { window.location.href = URL;}, 800);

}

var flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'left',
  contain: true
});

// Animacion de entrada de objetos