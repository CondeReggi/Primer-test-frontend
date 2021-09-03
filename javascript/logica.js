const Departamento = document.getElementById("Departamento");
Departamento.innerHTML = '<option value="">Seleccione Uno …</option>';
for (const property in dptosLocs) {
    let opcion = document.createElement("option");
    opcion.value = `${property}`;
    opcion.innerHTML = `${property}`;
    Departamento.appendChild(opcion);
}

function vaciar_select(cantidad, contenedor){
    for (let i = cantidad; i >= 0; i--) {
        contenedor.remove(i);
    }
}

function llenar_location(e){
    const Localidad = document.getElementById("Localidad");
    //Borro los elementos anteriores en caso de cambio
    vaciar_select(Localidad.options.length, Localidad);
    //Seteo las Localidades correspondientes
    for (let i = 0; i < dptosLocs[e].length; i++) {
        let opcion = document.createElement("option");
        opcion.value = `${dptosLocs[e][i]}`;
        opcion.innerHTML = `${dptosLocs[e][i]}`;
        Localidad.appendChild(opcion);
    }
}

Departamento.addEventListener("change", () => {
    (Departamento.value) ? 
        llenar_location(Departamento.value) : vaciar_select(document.getElementById("Localidad").options.length,  document.getElementById("Localidad"))
})





