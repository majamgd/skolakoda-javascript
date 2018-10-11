
const pasus1= document.getElementById("pera")

// function handleOnFocus(){
//     console.log('handleOnFocus ...');
// }

// function handleOnBlur(){
//     console.log('handleOnBlur ...');
// }


function izracunajDane() {
    var satiEkspert=10000;
    var satiPocetnik=2000;

    var brojSatiDnevnoPocetnik=document.getElementById("unos").value;
    var brojDanaPocetnik = satiPocetnik / brojSatiDnevnoPocetnik;
    console.log(brojDanaPocetnik);
    console.log("Broj dana ucenja do pocetnika je:",brojDanaPocetnik);
    var brojGodinaDoPocetnika=brojDanaPocetnik / 365;
    console.log("Broj godina ucenja do pocetnika je:",brojGodinaDoPocetnika.toFixed(2));
    pasus1.innerText = 'Broj dana ucenja do pocetnika je: ' + brojDanaPocetnik;
    brojSatiPraksa = 8;
    var brojDanaPraksa = (satiEkspert - satiPocetnik)/brojSatiPraksa;
    var brojGodinaPraksi = brojDanaPraksa / 365;
    console.log("Broj godina na praksi:",brojGodinaPraksi.toFixed(2));
    var brojGodinaPraksiGod = brojGodinaPraksi.toFixed(0);
    var brojMeseciNaPraksiX = (brojGodinaPraksi % 365)/30;
    var brojMeseciNaPraksi = brojMeseciNaPraksiX.toFixed(0);
    var brojdanaNaPraksiX = brojMeseciNaPraksi % 30;
    var brojdanaNaPraksi = brojdanaNaPraksiX.toFixed(0);

    console.log("Broj godina na praksi:",brojGodinaPraksiGod,"godina",brojMeseciNaPraksi,"meseci",brojdanaNaPraksi,"dana");



}

const dugme = document.getElementById("klikni")
console.log(dugme)

// dugme.onclick = izracunajDane
dugme.addEventListener("click", izracunajDane)

// document.getElementById("klikni").addEventListener("click", izracunajDane)


