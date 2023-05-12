function encriptar() {

    let intext = document.getElementById("txtEncriptar").value;
    let palabra = intext.split('');
    let encriptada = "";

    palabra.forEach(palabra => {
        let vc = vocal(palabra);
        if (palabra !== vc) {
            encriptada += palabra;
        }
        encriptada += lettersEncriptada(palabra);
    });

    document.getElementById("output").value = encriptada;
    document.getElementById("txtEncriptar").value = "";
}

function vocal(l) {
    let vc = "";
    v = ['a', 'e', 'i', 'o', 'u'];

    v.forEach(x => {
        if (l === x) {
            vc = x;
        }
    });
    return vc;
}

function lettersEncriptada(vocal) {
    let letter;
    switch (vocal) {
        case "a": letter = "ai"; break;
        case "e": letter = "enter"; break;
        case "i": letter = "imes"; break;
        case "o": letter = "ober"; break;
        case "u": letter = "ufat"; break;
            break;

        default: letter = "";
            break;
    }
    return letter;
}

function copiar() {
    input = document.getElementById("output").value;
    navigator.clipboard.writeText(input);
    swal("Good job!", "COPIADO!", "success");
    document.getElementById("output").value = "";
}


function lettersDesencriptada(vocal) {
    let letter;
    switch (vocal) {
        case "ai": letter = "a"; break;
        case "enter": letter = "e"; break;
        case "imes": letter = "i"; break;
        case "ober": letter = "o"; break;
        case "ufat": letter = "u"; break;
        break;
        
        default: letter = "";
        break;
    }
    return letter;
}

function desencriptar() {
    let intext = document.getElementById("txtEncriptar").value;
    let desencriptada = "";
    desencriptada = intext.replaceAll("ai","a").replaceAll("enter","e").replaceAll("ober","o").replaceAll("ufat","u");
    document.getElementById("output").value = desencriptada;
}


