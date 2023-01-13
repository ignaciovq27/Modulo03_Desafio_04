
const totalPropiedades = document.querySelector("#totalPropiedades");
const divPropiedades = document.querySelector("#divPropiedades");
const btnBuscar = document.querySelector("#btnBuscar")
const btnReset = document.querySelector("#btnReset")

const cantCuartos = document.querySelector("#cantCuartos");
const min = document.querySelector("#min");
const max = document.querySelector("#max");

let contadorPropiedades = 0;

const propiedades = [
  {
    nombre: "Casa de campo",
    descripcion: "Un lugar ideal para descansar de la ciudad.",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    cuartos: 2,
    metros: 170,
    id: 1
  },
  {
    nombre: "Casa de playa",
    descripcion: "Despierta tus días oyendo el oceano.",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    cuartos: 2,
    metros: 130,
    id: 2
  },
  {
    nombre: "Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas.",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    cuartos: 1,
    metros: 80,
    id: 3
  },
  {
    nombre: "Casa rodante",
    descripcion: "Conviertete en un nómada del mundo sin salir de tu casa.",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    cuartos: 1,
    metros: 6,
    id: 4
  },
  {
    nombre: "Departamento",
    descripcion: "Desde las alturas todo se ve mejor.",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    cuartos: 3,
    metros: 200,
    id: 5
  },
  {
    nombre: "Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños.",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    cuartos: 5,
    metros: 500,
    id: 6
  }
];

// Hacer busqueda
btnBuscar.addEventListener("click", (evento) => {
  evento.preventDefault(); //Detener el comportamiento por defecto del submit

  if (min.value == "" || max.value == "" || cantCuartos.value == "") {
    alert("Faltan campos por llenar")
  }

  else if ( min.value > max.value) {
    alert("error en metros ingresados")
  }

  else {
    contadorPropiedades = 0;
    divPropiedades.innerHTML = "";
    render();
  }
});

let html = ""
function render() {
  for (let propiedad of propiedades) {
    if (Number(propiedad.cuartos) == Number(cantCuartos.value) ||
      (Number(propiedad.metros) >= min.value && (Number(propiedad.metros) <= max.value))) {
      console.log("entró en el filtro");
      contadorPropiedades++;

      //template
      divPropiedades.innerHTML += `
        <article class="propiedad">
          <ahref="/articulo/${propiedad.id}"></a>
          <h2>${propiedad.nombre}</h2>
          <img src="${propiedad.src}" alt="">
          <p><b>Cuartos: </b>${propiedad.cuartos}</p>
          <p><b>Metros: </b>${propiedad.metros}</p>
          <p><b>Descripción: </b>${propiedad.descripcion}</p>
          <p><b>Id: </b>${propiedad.id}</p>
          <button class="btn btn-info "> Ver más </button>
        </article>
      `;
    }
  }
  console.log("La cantidad de propiedades mostradas son: " + contadorPropiedades);
  totalPropiedades.innerHTML = contadorPropiedades
}
divPropiedades.innerHTML = html;

// Resetear filtro
btnReset.addEventListener("click", () => {
  divPropiedades.innerHTML = "";
  console.log("reset")
  resetFilter();
  contadorPropiedades = 0;
});

function resetFilter() {
  for (let propiedad of propiedades) {
    totalPropiedades.innerHTML = propiedades.length
    //template
    cantCuartos.value = ""
    min.value = ""
    max.value = ""

    divPropiedades.innerHTML += `
      <article class="propiedad">
        <ahref="/articulo/${propiedad.id}"></a>
        <h2>${propiedad.nombre}</h2>
        <img src="${propiedad.src}" alt="">
        <p><b>Cuartos: </b>${propiedad.cuartos}</p>
        <p><b>Metros: </b>${propiedad.metros}</p>
        <p><b>Descripción: </b>${propiedad.descripcion}</p>
        <p><b>Id: </b>${propiedad.id}</p>
        <button class="btn btn-info "> Ver más </button>
      </article>
    `;
  }
}

