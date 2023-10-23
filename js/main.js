// El código va aquí -> 
let txtNombre = document.getElementById("Name"); // Nombre
let txtNumber = document.getElementById("Number"); //Cantidad
let btnAgregar = document.getElementById("btnAgregar");
let alertValidaciones = document.getElementById("alertValidaciones");

function validarCantidad(){
    if (txtNumber.value.length==0){
        return false;
    }// if length
    return true;
}//validarCantidad

btnAgregar.addEventListener("click", function(event){
    event.preventDefault();
    if (txtNombre.value.length<3) {
        alertValidaciones.innerHTML="El campo <strong>Nombre</strong> es requerido<br/>";
        alertValidaciones.style.display="block";
    }// txtNombre < 3
    if (! validarCantidad()){
        alertValidaciones.innerHTML+="El campo <strong>Cantidad</strong> es requerido<br/>";
        alertValidaciones.style.display="block";
    }//if ! validarCantidad
});