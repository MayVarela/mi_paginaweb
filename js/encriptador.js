function validateText() {
    var textoUsuario = document.getElementById('texto_usuario').value;
    var regex = /^[a-z\s]+$/; // Solo letras minúsculas y espacios

    if (!regex.test(textoUsuario)) {
        alert('El texto solo debe contener letras minúsculas y sin acentos.');
    } else {
        encriptarTexto();
    }
}

function encriptarTexto() {
    var textoUsuario = document.getElementById('texto_usuario').value;
    var textoEncriptado = encriptar(textoUsuario);
    document.getElementById('salida_texto').innerText = textoEncriptado;
    document.getElementById('imagen').classList.add('hidden');
}

function desencriptarTexto() {
    var textoUsuario = document.getElementById('texto_usuario').value;
    var textoDesencriptado = desencriptar(textoUsuario);
    document.getElementById('salida_texto').innerText = textoDesencriptado;
    document.getElementById('imagen').classList.add('hidden');
}

function encriptar(texto) {
    var textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
        return textoEncriptado;
}

function desencriptar(texto) {
    var textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
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