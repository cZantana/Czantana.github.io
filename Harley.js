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
  console.log(items)
  if (isInViewport(section) < (window.innerHeight*0.70))
  {
    let delay = 0.3
      for (i=0; i < items.length;i++){
        if (window.getComputedStyle(items[i]).getPropertyValue("opacity") < 1)
        {
            console.log("entro a poner")
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
        console.log("entro a quitar")
            items[i].classList.remove(styles)
            items[i].style.transitionDelay = String(delay)+"s"
            delay += 0.2
      }
  }
}

const portada = document.querySelector(".portada")
const conteportada = document.getElementsByClassName("conteportada")

Aparicion(portada,conteportada,"portadaS")
setTimeout(function(){
  portada.classList.add("portadaStimer")
  for (i=0; i < conteportada.length;i++){
  conteportada[i].classList.add("conteportadaStimer")}
},2000)
