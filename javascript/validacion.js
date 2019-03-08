
		
function validarFormulario(){

    var txtNombre = document.getElementById('nombre').value;
    var txtApellido = document.getElementById('apellido').value;
    var txtCorreo = document.getElementById('correo').value;
    var rbtEstado = document.getElementsByName('gusto');
    var txtArea = document.getElementById('comentario').value;
    var banderaRBTN = false;

    //Test campo obligatorio
    if(txtNombre == null || txtNombre.length == 0 || /^\s+$/.test(txtNombre)){
        alert('ERROR: El campo NOMBRE no debe ir vacío o lleno de solamente espacios en blanco');
        return false;
    }

    if(txtApellido == null || txtApellido.length == 0 || /^\s+$/.test(txtApellido)){
        alert('ERROR: El campo APELLIDO no debe ir vacío o lleno de solamente espacios en blanco');
        return false;
    }

    //Test correo
    if(!(/\S+@\S+\.\S+/.test(txtCorreo))){
        alert('ERROR: Debe escribir un CORREO válido');
        return false;
    }
    

    //Test RadioButtons
    for(var i = 0; i < rbtEstado.length; i++){
        if(rbtEstado[i].checked){
            banderaRBTN = true;
            break;
        }
    }
    if(!banderaRBTN){
        alert('ERROR: Debe indicar si le gustó la página');
        return false;
    }

    if(txtArea == null || txtArea.length == 0 || /^\s+$/.test(txtArea)){
        alert('ERROR: Valoramos mucho tu comentario,no lo dejes en blanco :(');
        return false;
    }
  
}

