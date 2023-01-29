var fotos = ["foto1.png", "foto2.png", "foto3.png", "foto4.png"];

var frases = ["Minha linda familia 🥰", "EM frente a igreja", "foto 3", "foto 4"];

var i = 0;

function proxima() {
    i++;
    var numeroFamilia = fotos.length = 4;
    if (i > numeroFamilia){
        i=0;
    }
    var updateImage = fotos[1];
    var updateFrases = frases[i];
    
    document.getElementById("fotos").src=updateImage;
    document.getElementById("Legenda").innerHTML=updateFrases;
}