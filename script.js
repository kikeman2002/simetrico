function cipherRot13(str) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, rot13);
  
    function rot13(correspondance) {
      const charCode = correspondance.charCodeAt();
      //A = 65, Z = 90
      return String.fromCharCode(
              ((charCode + 13) <= 90) ? charCode + 13
                                      : (charCode + 13) % 90 + 64
             );
      
    }
  }


document.addEventListener('DOMContentLoaded', (event) => {
    const textoPlano = document.getElementById("texto");
    const textoEncriptado = document.getElementById("encriptado");

    const btnEncriptador = document.getElementById("encriptador");
    const btnDesEncriptador = document.getElementById("desencriptador");

    btnEncriptador.addEventListener("click", () => {
        if (textoPlano.value === '') {
            alert("introduce un valor");
        } else{
            textoEncriptado.value = cipherRot13(textoPlano.value)
        }
    })

    btnDesEncriptador.addEventListener("click", () => {
        if (textoEncriptado.value === '') {
            alert("introduce un valor");
        } else{
            textoPlano.value = cipherRot13(textoEncriptado.value)
        }
    })

});
