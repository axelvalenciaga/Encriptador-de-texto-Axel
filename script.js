const botonEncriptar = document.querySelector(".boton__encriptar");
const entradaDeTexto = document.querySelector(".entrada__texto");
const aviso = document.querySelector(".texto__condicion");
const resultado =document.querySelector(".salida__texto");
const contenido = document.querySelector(".contenedor__derecha__contenido")
const botonCopiar = document.querySelector(".boton__copiar")
const botonDesencriptar = document.querySelector(".boton__desencriptar");


botonEncriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = entradaDeTexto.value; 
    let txt = texto.normalize("NFD") .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );


    if (texto =="") {
        aviso.textContent ="El campo de texto no debe estar vacio";
    }
    else if(texto !== txt){
        aviso.textContent ="No debe tener acentos ni caracteres especiales";
    }
    else if(texto !== texto.toLowerCase()){
        aviso.textContent ="El texto debe ser todo en minúsculas";

    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        resultado.innerHTML = texto;
        botonCopiar.style.visibility ="inherit";
        contenido.remove();

    }
   
});
botonDesencriptar.addEventListener("click", e=> {
    e.preventDefault();
    let texto = entradaDeTexto.value; 
    let txt = texto.normalize("NFD") .replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " );


    if (texto =="") {
        aviso.textContent ="El campo de texto no debe estar vacio";
    }
    else if(texto !== txt){
        aviso.textContent ="No debe tener acentos ni caracteres especiales";
    }
    else if(texto !== texto.toLowerCase()){
        aviso.textContent ="El texto debe ser todo en minúsculas";

    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        resultado.innerHTML = texto;
        botonCopiar.style.visibility ="inherit";
        contenido.remove();

    }
   
});
botonCopiar.addEventListener("click", e=> {
    e.preventDefault();
    let copiar = resultado;
    copiar.select();
    document.execCommand("copy")

    })