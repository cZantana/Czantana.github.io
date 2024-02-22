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

const contactSection = document.querySelector('.contact-me');
const titlecontacto = document.getElementsByClassName('titlecontacto');
const contecontacto = document.getElementsByClassName('contecontacto');
const contactcard = document.getElementsByClassName('contactcard');

const boton = document.getElementById("botonenviar")

const mensajeconfirm = document.getElementById("confirmacion")

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
  Aparicion(contactSection,titlecontacto,"titlecontactoS")
  Aparicion(contactSection,contecontacto,"titlecontactoS")
  Aparicion(contactSection, contactcard,"titlecontactoS")
})


// delay href
function delay (URL) {
  navbar[0].classList.add("headerQ")
  setTimeout(function() {bodys[0].classList.add("bodyQ")}, 100)
  setTimeout(function() { window.scrollTo(0, 0)}, 500)
  setTimeout(function() {bodys[0].classList.remove("bodyQ")
  navbar[0].classList.remove("headerQ")
  window.location.href = URL;}, 1000)

}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const formulario = document.getElementById("formulario-contacto");

const nombre = formulario.elements["nombre"];
const email = formulario.elements["email"];
const mensaje = formulario.elements["mensaje"];


nombre.addEventListener('input',function(event){
  nombre.value = nombre.value.trim()
  if(nombre.value.length==0)
  {
    mensajeconfirm.firstChild.nextSibling.innerText = "¡El nombre está vacío!"
    mensajeconfirm.firstChild.nextSibling.style.color = "hsl(0, 100%, 40%)"
    event.srcElement.style.borderColor = "rgba(255, 255, 255, 0.308)"
  }
  else
  {
    mensajeconfirm.firstChild.nextSibling.innerText = "¡Envíame un mensaje!"
    mensajeconfirm.firstChild.nextSibling.style.color = "var(--navcolor)"
    event.srcElement.style.borderColor = "var(--navcolor)"
  }
})

email.addEventListener('input',function(event){
  if(email.value.length==0)
  {
    mensajeconfirm.firstChild.nextSibling.innerText = "¡El email está vacío!"
    mensajeconfirm.firstChild.nextSibling.style.color = "hsl(0, 100%, 40%)"
    event.srcElement.style.borderColor = "rgba(255, 255, 255, 0.308)"
  }
  else
  {
    if (validateEmail(email.value))
    {
      mensajeconfirm.firstChild.nextSibling.innerText = "¡Envíame un mensaje!"
      mensajeconfirm.firstChild.nextSibling.style.color = "var(--navcolor)"
      event.srcElement.style.borderColor = "var(--navcolor)"
    }
    else
    {
      mensajeconfirm.firstChild.nextSibling.innerText = "¡El email no es válido!"
      mensajeconfirm.firstChild.nextSibling.style.color = "hsl(0, 100%, 40%)"
      event.srcElement.style.borderColor = "hsl(0, 100%, 40%)"
    }
  }
})

mensaje.addEventListener('input',function(){
  if(mensaje.value.length==0)
  {
    mensajeconfirm.firstChild.nextSibling.innerText = "¡El mensaje está vacío!"
    mensajeconfirm.firstChild.nextSibling.style.color = "hsl(0, 100%, 40%)"
    event.srcElement.style.borderColor = "rgba(255, 255, 255, 0.308)"
  }
  else
  {
    mensajeconfirm.firstChild.nextSibling.innerText = "¡Envíame un mensaje!"
    mensajeconfirm.firstChild.nextSibling.style.color = "var(--navcolor)"
    event.srcElement.style.borderColor = "var(--navcolor)"
  }
})

    function mensajeEnviado() {
      mensajeconfirm.firstChild.nextSibling.innerText = "¡El mensaje ya fue enviado!"
      mensajeconfirm.firstChild.nextSibling.style.color = "hsl(0, 100%, 40%)"
    }


    emailjs.init("sBDKCZ9t8OIkkTg8p"); 

    function enviarCorreo() {

      if(nombre.value.length==0)
      {
        console.log("Nombre vacio")
        mensajeconfirm.firstChild.nextSibling.innerText = "¡El nombre está vacío!"
        mensajeconfirm.firstChild.nextSibling.style.color = "hsl(0, 100%, 40%)"
        formulario.elements["nombre"].style.borderColor = "hsl(0, 100%, 40%)"
      }
      else if (email.value.length==0)
      {
        console.log("Correo vacio")
        mensajeconfirm.firstChild.nextSibling.innerText = "¡El email está vacío!"
        mensajeconfirm.firstChild.nextSibling.style.color = "hsl(0, 100%, 40%)"
        formulario.elements["email"].style.borderColor = "hsl(0, 100%, 40%)"
        formulario.elements["nombre"].style.borderColor = "var(--navcolor)"
      }
      else 
      {
        if (validateEmail(email.value))
        {
          if (mensaje.value.length == 0)
          {
            console.log("Mensaje vacio")
            mensajeconfirm.firstChild.nextSibling.innerText = "¡El mensaje está vacío!"
            mensajeconfirm.firstChild.nextSibling.style.color = "hsl(0, 100%, 40%)"
            formulario.elements["mensaje"].style.borderColor = "hsl(0, 100%, 40%)"
          }
          else
          {
            emailjs.send("service_oz6z78mczantana", "template_w0asprk", { 
              to_name: "Cristian",
              from_name: nombre.value,
              message: mensaje.value,
              reply_to: email.value})
              .then(function(response) {
                console.log("Correo enviado con éxito:", response);
              }, function(error) {
              console.log("Error al enviar el correo:", error);
              });

            mensajeconfirm.firstChild.nextSibling.innerText = "¡El mensaje ha sido enviado!"
            mensajeconfirm.firstChild.nextSibling.style.color = "var(--navcolor)"
            contactcard[0].classList.add("contactcardE")
            boton.style.backgroundColor = "var(--oscublu)"
            boton.setAttribute("onclick","mensajeEnviado()")
            nombre.addEventListener('input',function(event){
              mensajeEnviado()
            })
            email.addEventListener('input',function(event){
              mensajeEnviado()
            })
            mensaje.addEventListener('input',function(event){
              mensajeEnviado()
            })
          }
        }
        else
        {
          console.log("Correo no valido")
          mensajeconfirm.firstChild.nextSibling.innerText = "¡El email no es válido!"
          mensajeconfirm.firstChild.nextSibling.style.color = "hsl(0, 100%, 40%)"
        }
      }

      }
      // Puedes agregar lógica adicional después de enviar el correo, como mostrar un mensaje de éxito al usuario.





var flkty = new Flickity( '.main-gallery', {
  // options
  cellAlign: 'left',
  contain: true
});

// Animacion de entrada de objetos
