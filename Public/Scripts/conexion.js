//Wea para conectarce a la appi sv

let url = "http://localhost/apisura/public/heroes";

//peticion
let peticion ={
    method:"GET"
}
// llamar al sv
fetch(url,peticion)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(datosLLegada){
    console.log(datosLLegada);
    console.log(datosLLegada[0]);
    console.log(datosLLegada[0].foto);

    let datos=datosLLegada
    pintardatos(datos);
})

function pintardatos(datos){
    
    let contenedorPadre=document.getElementById("contenedorPadre");

    // Recorremos el arreglo de canciones
    datos.map(function(dato){
        // crear un div con clase col
        let columna=document.createElement('div'); 
        columna.classList.add("col");   
        
        // crear un divcon la clae d-h100
        let tarjeta=document.createElement('div');
        tarjeta.classList.add("card");
        tarjeta.classList.add("h-100");

        // imagen de la tarjeta
        let imagen=document.createElement("img"); 
        imagen.classList.add("card-img-top");
        imagen.src=dato.foto;
       
        let tarjetacuerpo=document.createElement('div')
        tarjetacuerpo.classList.add("card-body")
        // titulo de la tarjeta

        let titulo=document.createElement('h3');
        titulo.classList.add("text-center");
        titulo.textContent=dato.nombre;

        let p=document.createElement('p');
        p.classList.add("text-center");
        p.textContent=dato.descripcion;
        

        // anidamos compontens /definir hijos

        // la foto esta por dentro  de la tarjeta
        tarjeta.appendChild(imagen);

        // el titulo esta dentro de la tarjeta
        
        tarjeta.appendChild(titulo);
        
        tarjeta.appendChild(p);

        tarjetacuerpo.appendChild(tarjeta);

        // la tarjeta esta por dentro de la columna
        columna.appendChild(tarjetacuerpo);
 
        // la columna esta por dentro de la fila
        contenedorPadre.appendChild(columna);

    });

}