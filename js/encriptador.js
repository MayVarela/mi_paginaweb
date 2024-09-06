function validateText() {
    var textoUsuario = document.getElementById('texto_usuario').value;
    textoUsuario = textoUsuario.toLowerCase().replace(/[^a-z\s]/g, '');
    //Reasigna el valor
    document.getElementById('texto_usuario').value = textoUsuario;

    if (textoUsuario === '') {
        alert('El texto solo debe contener letras minúsculas y sin acentos.');
    } else {
        encriptarTexto();
    }
}

// Variable global para almacenar el método seleccionado
var metodoSeleccionado = 'alura'; 
var metodoSeleccionado = 'mdv';// Método por defecto

// Función para alternar entre métodos con el switch
function toggleMetodo() {
    var isChecked = document.getElementById('metodoSwitch').checked;
    if (isChecked) {
        metodoSeleccionado = 'alura'; // Si el switch está activado, método MDV
        document.getElementById('metodoLabel').innerText = 'Encriptación: Alura';
    } else {
        metodoSeleccionado = 'mdv'; // Si el switch está desactivado, método Aluda
        document.getElementById('metodoLabel').innerText = 'Encriptación: MDV';
    }
}

function encriptarTexto() {
    var textoUsuario = document.getElementById('texto_usuario').value;
    var textoEncriptado;

    if (metodoSeleccionado === 'alura') {
        textoEncriptado = encriptarAlura(textoUsuario);
    } else if (metodoSeleccionado === 'mdv') {
        textoEncriptado = encriptarMDV(textoUsuario);
    }

    document.getElementById('salida_texto').innerText = textoEncriptado;
    document.getElementById('imagen').classList.add('hidden');
}

function desencriptarTexto() {
    var textoUsuario = document.getElementById('texto_usuario').value;
    var textoDesencriptado;

    if (metodoSeleccionado === 'alura') {
        textoDesencriptado = desencriptarAlura(textoUsuario);
    } else if (metodoSeleccionado === 'mdv') {
        textoDesencriptado = desencriptarMDV(textoUsuario);
    }

    document.getElementById('salida_texto').innerText = textoDesencriptado;
    document.getElementById('imagen').classList.add('hidden');
}

//ENCRIPTACION ALURA
function encriptarAlura(texto) {
    var textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        return textoEncriptado;
}

function desencriptarAlura(texto) {
    var textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return textoDesencriptado;
}

function encriptarMDV(texto){
    var textoEncriptadoMDV = texto
    .replace(/a/g, "9")
    .replace(/b/g, "~")
    .replace(/c/g, "6")
    .replace(/d/g, "!")
    .replace(/e/g, "3")
    .replace(/f/g, "#")
    .replace(/g/g, "2")
    .replace(/h/g, "°")
    .replace(/i/g, "5")
    .replace(/j/g, ",")
    .replace(/k/g, "8")
    .replace(/l/g, "<")
    .replace(/m/g, "7")
    .replace(/n/g, ">")
    .replace(/o/g, "4")
    .replace(/p/g, "¬")
    .replace(/q/g, "1")
    .replace(/r/g, "¿")
    .replace(/s/g, "0")
    .replace(/t/g, "¡")
    .replace(/u/g, ".")
    .replace(/v/g, "%")
    .replace(/w/g, "-")
    .replace(/x/g, "_")
    .replace(/y/g, "@")
    .replace(/z/g, "&");
    return textoEncriptadoMDV;
}
function desencriptarMDV(texto) {
    var textoDesencriptado = texto
    .replace(/9/g, "a")
    .replace(/~/g, "b")
    .replace(/6/g, "c")
    .replace(/!/g, "d")
    .replace(/3/g, "e")
    .replace(/#/g, "f")
    .replace(/2/g, "g")
    .replace(/°/g, "h")
    .replace(/5/g, "i")
    .replace(/,/g, "j")
    .replace(/8/g, "k")
    .replace(/</g, "l")
    .replace(/7/g, "m")
    .replace(/>/g, "n")
    .replace(/4/g, "o")
    .replace(/¬/g, "p")
    .replace(/1/g, "q")
    .replace(/¿/g, "r")
    .replace(/0/g, "s")
    .replace(/¡/g, "t")
    .replace(/\./g, "u")
    .replace(/%/g, "v")
    .replace(/-/g, "w")
    .replace(/_/g, "x")
    .replace(/@/g, "y")
    .replace(/&/g, "z");
    return textoDesencriptado;
}

function copiarTexto() {
    const texto = document.getElementById('salida_texto').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
function copiarTexto() {
    const texto = document.getElementById('salida_texto').innerText;
    if (texto.trim() !== "") { // Verifica si hay texto
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    } else {
        alert('No hay texto para copiar'); // Mensaje si no hay texto
    }
}


/*EFECTO LLUVIA*/
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var fontSize = 16;
var columns = Math.floor(canvas.width / fontSize);
var drops = Array(columns).fill(1);

var str = "JavaScript Hacking Effect";

function draw() {
    context.fillStyle = 'rgba(5, 0, 25, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#1D9';
    context.font = fontSize + 'px monospace';

    for (var i = 0; i < drops.length; i++) {
        var text = str[Math.floor(Math.random() * str.length)];
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33);
