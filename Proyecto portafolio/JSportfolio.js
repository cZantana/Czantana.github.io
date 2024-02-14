console.log("JELOUDA")

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  console.log("Top",rect.top)
  console.log("window",window.innerHeight)
  return rect.top;
}

function Aparicion(section,items,styles)
{
  if (isInViewport(section) < (window.innerHeight*0.45))
  {
      for (i=0; i < items.length;i++){
        items[i].classList.add(styles)
      }
  }
  else if (isInViewport(section) >= (window.innerHeight*0.70)){
      for (i=0; i < items.length;i++){
        items[i].classList.remove(styles)
      }
  }
}

const aboutSection = document.querySelector('.about-me');
const contsobreMi = document.getElementsByClassName("contenidosobremi")
const homecontent = document.querySelector(".home-content")
const homesection = document.querySelector(".home")

const proyectSection = document.querySelector('.proyectos');
const contproyects = document.getElementsByClassName("titleproyectos")


homesection.style.height = String(homecontent.offsetTop+homecontent.offsetHeight)+"px";

window.addEventListener("resize", function(event){
  homesection.style.height = String(homecontent.offsetTop+homecontent.offsetHeight)+"px";
})

// Aparicion de sobre mi


document.addEventListener('scroll', function () {

  Aparicion(aboutSection,contsobreMi,"sobreMiS")
  Aparicion(proyectSection,contproyects,"titleproyectosS")

})


var flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'left',
  contain: true
});

// Animacion de entrada de objetos