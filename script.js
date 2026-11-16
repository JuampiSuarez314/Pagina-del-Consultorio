const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
  const updateHeader = () => {
    siteHeader.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

const ul = document.querySelector("#lista-proyectos");
const template = document.querySelector("#plantilla-trabajo");

function agregarProyecto(proyecto){
  const clon = template.content.cloneNode(true);

  // const img=clon.querySelector("[data-imagen]");
  const etiqueta=clon.querySelector("[data-etiqueta]");
  const titulo=clon.querySelector("[data-titulo]");
  const desc=clon.querySelector("[data-desc]");
  // const ejemplo=clon.querySelector("[data-ejemplo]");

  etiqueta.textContent=proyecto.etiqueta;
  titulo.textContent=proyecto.titulo;
  desc.textContent=proyecto.descripcion

  ul.appendChild(clon)
}

const ejemplo1={
  imagen:"",
  etiqueta:"Sistema",
  titulo:"Ejemplo 1",
  descripcion:"Hola estoy probando las plantillas :p",
  url:""
};
const ejemplo2={
  imagen:"",
  etiqueta:"Web",
  titulo:"Ejemplo 2",
  descripcion:"Hola estoy probando las plantillas :p",
  url:""
};

agregarProyecto(ejemplo1);
agregarProyecto(ejemplo2);