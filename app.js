// Declaramos las variables que utilizaremos para almacenar 
// el texto encriptado y desencriptado
let tencriptado = "";
let tdesencriptado = "";

let header = document.querySelector("header.header");
let main = document.querySelector("main.main");
let footer = document.querySelector("footer.footer");
let letras = document.querySelector("section.intro");
let imagen = document.getElementById('m_neco');

iniciador();
// Aqui iniciamos la pagina
function iniciador(){
    letras.setAttribute("style",'visibility: visible; height:100vh;');
    header.setAttribute("style",'visibility: hidden;height:0px;');
    main.setAttribute("style",'visibility: hidden;height:0px;');
    footer.setAttribute("style",'visibility: hidden;height:0px;');
    letras.setAttribute("style",'visibility: visible;');
    imagen.setAttribute("style",'visibility: hidden;');
    setTimeout(desiniciador, 8000);
}

// con esta funcion le adamos los valores iniciales a la pagina
function desiniciador(){
    header.setAttribute("style",'visibility: visible;');
    main.setAttribute("style",'visibility: visible;');
    footer.setAttribute("style",'visibility: visible;');
    letras.setAttribute("style",'visibility: hidden; height:0px;');
    // imagen.setAttribute("style",'visibility: visible;');
}


// declaramos la funcion de el boton encriptar
function btnEncriptar(text){
    // Adicionamos un filtro para evitar el ingreso de textos 
    // en blanco
    if(filtro(text)){
        if(encriptar(text)){
            // si cumple las condiciones cambiamos el texto con la
            // funcion textofinal()
            textofinal(tencriptado);
            // limpiamos la caja del texto
            limpiarCaja();
        }
    }
}


// declaramos la funcion de el boton desencriptar
function btnDesencriptar(text){
    // Adicionamos un filtro para evitar el ingreso de textos 
    // en blanco
    if(desencriptar(text)){
        // console.log("Si continua")
        // si cumple las condiciones cambiamos el texto con la
        // funcion textofinal()
        textofinal(tdesencriptado);
        // limpiamos la caja del texto
        limpiarCaja();
        // valoresIniciales();
    }
}


// Declaramos la funcion encriptar con el argumento text
function encriptar(text){
    // Adicionamos un filtro para evitar el ingreso de textos 
    // en blanco
    if(text != ""){
        // console.log(text);
        text = text.replaceAll("e", 'enter');
        text = text.replaceAll("i", 'imes');
        text = text.replaceAll("a", 'ai');
        text = text.replaceAll("o", 'ober');
        text = text.replaceAll("u", 'ufat');   
        // console.log(text);
        tencriptado = text;
        return tencriptado;
        
    }else{
        // mandamos un alert en caso de que no haya ningun texto
        // que encriptar
        return alert("Ingresa un mensaje"),true;
    }
}


// Declaramos la funcion desencriptar con el argumento text
function desencriptar(text){
    // Adicionamos un filtro para evitar el ingreso de textos 
    // en blanco
    if(text != ""){
        // console.log(text);
        text = text.replaceAll("enter", 'e');
        text = text.replaceAll("imes", 'i');
        text = text.replaceAll("ai", 'a');
        text = text.replaceAll("ober", 'o');
        text = text.replaceAll("ufat", 'u');   
        tdesencriptado = text;
        return console.log(text),true;   
    }else{
        // mandamos un alert en caso de que no haya ningun texto
        // que desencriptar
        return alert('Ingresa un mensaje');
    }
}

// Funcion para filtrar el texto y saber si tiene mayusculas o caracteres especiales
function filtro(text) {   
    if(text != "" & text != " "){
        let exeption = /[A-Za-z0-9]/;
        // let exeption = [":",",","."];
        let i = 0;

        while(i < text.length){
            let t = text.charAt(i);
            if(t == t.toUpperCase() & t != ' ' & t != exeption){
                alert("No pongas letras mayusculas, palabras con acento, ni caracteres especiales");
                limpiarCaja();
                break;
            }else{
                if(t == "á" || t == "é" || t == "í" || t == "ó" || t == "ú" || t == "à" || t == "è" || t == "ò"){
                    console.log('No aqui');
                    alert("No pongas letras mayusculas ni palabras con acento");
                    limpiarCaja();
                    break;
                }
            }
            i++;
        }    
        if(i == text.length){
            console.log("La palabra esta bien");
            return true;
        }
        
    }else{
        return alert('Ingresa un mensaje');
    }
     
}


// Declaramos la funcion que cambia el texto para mostrar
// los mensajes encriptados o desencriptados
function textofinal(text){
    // Agregar excepciones

    // Quitamos la visibilidad de la imagen que esta arriba del
    // boton
    let vista = document.getElementById("m_neco");
    vista.setAttribute("style",'visibility: hidden;');

    let texto1 = document.getElementById("texto3");
    texto1.setAttribute("style",'visibility: hidden;');

    let altura = document.getElementById("textofinalId");
    altura.setAttribute("style",'height:0;');

    let altura2 = document.getElementById("imagen2Id");
    altura2.setAttribute("style",'height:0;');

    let texto2 = document.getElementById("texto2");
    texto2.innerHTML = text;

    let texto2Acomodo =document.getElementById("textofinal2Id");

    texto2Acomodo.setAttribute("style",'botton:0;top:0');

    let btn = document.getElementById("input");
    btn.setAttribute("style",'visibility: visible;');


    return;
}

function valoresIniciales(){
    let vista = document.getElementById("m_neco");
    vista.setAttribute("style",'visibility: visible;');
    let header = document.querySelector('p.textfinal');
    header.innerHTML = "Ingresa el texto que deseas encriptar o desencriptar";
}

// Declaramos la funcion que limpia el textArea
function limpiarCaja() {
    // le asignamos un espacio en blanco al texto que tenga 
    // el textArea
    document.querySelector('#texto').value = '';
}


// Declaramos el boton de copiar
function copiarContenido() {
    // traemos los valores del texto y el boton
    let texto = document.getElementById("texto2");
    let botton = document.getElementById("input");
    // Hacemos uso de la API para copiar un texto al portapapeles
    navigator.clipboard.writeText(texto.textContent);
    alert("Copiado");
    // botton.textContent = "Copiado";
}