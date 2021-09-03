const nombre = /^[A-Z]+$/i;
const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const errores = document.querySelector(".errores");

function validarCedula(ci) {
    //Inicializo los coefcientes en el orden correcto
    var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
    var suma = 0;
    //Para el caso en el que la CI tiene menos de 8 digitos
    //calculo cuantos coeficientes no voy a usar
    var difCoef = parseInt(arrCoefs.length - ci.length);
    //recorro cada digito empezando por el de más a la derecha
    //o sea, el digito verificador, el que tiene indice mayor en el array
    for (var i = ci.length - 1; i > -1; i--) {
        //Obtengo el digito correspondiente de la ci recibida
        var dig = ci.substring(i, i + 1);
        //Lo tenía como caracter, lo transformo a int para poder operar
        var digInt = parseInt(dig);
        //Obtengo el coeficiente correspondiente al ésta posición del digito
        var coef = arrCoefs[i + difCoef];
        //Multiplico dígito por coeficiente y lo acumulo a la suma total
        suma = suma + digInt * coef;
    }
    var result = false;
    // si la suma es múltiplo de 10 es una ci válida
    if ((suma % 10) === 0) {
        result = true;
    }
    return result;
}

const terminos_y_usos = document.getElementById("terminos_y_usos");
const Departamento_seleccionado = document.getElementById("Departamento");
const Localidad_seleccionada = document.getElementById("Localidad");

document.getElementById("botonenviar").addEventListener("click", (e) => {
    e.preventDefault();

    let Nombre = document.getElementById("Nombre").value;
    let Apellido = document.getElementById("Apellido").value;
    let mail = document.getElementById("mail").value;
    let cedula = document.getElementById("cedula").value;
    let terminos_y_usos = document.getElementById("terminos_y_usos");

    let Departamento_seleccionado = document.getElementById("Departamento");
    let Localidad_seleccionada = document.getElementById("Localidad");

    if (nombre.test(Nombre) && nombre.test(Apellido) && email.test(mail) && (validarCedula(cedula) || !(cedula === "")) && terminos_y_usos.checked && (Departamento_seleccionado.value != "" || Departamento_seleccionado.value != "Seleccione Uno …") && Localidad_seleccionada.value != ""){
        alert("Se ha enviado el formulario correctamente");

        //Una vez enviado refrezca la pagina
        location.reload();
    }else{
        let mensaje = `<h4>Usted ha fallado en los siguientes datos:</h4><br>`;

        if(!nombre.test(Nombre)) {
            mensaje += `- Nombre <br>`;
            document.getElementById("Nombre").style.border = "3px solid red";
        };
        if(!nombre.test(Apellido)){
            mensaje += `- Apellido <br>`;
            document.getElementById("Apellido").style.border = "3px solid red";
        } 
        if(!email.test(mail)){
            mensaje += `- Mail <br>`;
            document.getElementById("mail").style.border = "3px solid red";
        }
        if(!(validarCedula(cedula)) || cedula === ""){
            mensaje += `- Cedula <br>`;
            document.getElementById("cedula").style.border = "3px solid red";
        }
        if(!terminos_y_usos.checked){
            mensaje += `- Terminos y condiciones de uso<br>`;
            document.getElementById("terminos_y_usos").style.border = "3px solid red";
        }
        if(Departamento_seleccionado.value === "" || Departamento_seleccionado.value === "Seleccione Uno …"){
            mensaje +=  `- Seleccion de departamento<br>`;
            document.getElementById("Departamento").style.border = "3px solid red";
        }
        if(Localidad_seleccionada.value === ""){
            mensaje += `- Seleccion de localidad<br>`;
            document.getElementById("Localidad").style.border = "3px solid red";
        }
        errores.innerHTML = mensaje;
    }
})

const inputs = document.querySelectorAll("input");
const selects = document.querySelectorAll("select");

selects.forEach(select => {
    select.addEventListener("focus", () => {
        select.style.border = "3px solid rgba(128, 128, 128, 0.57)";
        errores.innerHTML = "";
    })
})

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        input.style.border = "3px solid rgba(128, 128, 128, 0.57)";
        errores.innerHTML = "";
    }) 
})