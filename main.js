
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
    var brojSatiDnevno=document.getElementById("unos").value;
    var brojDana = satiPocetnik / brojSatiDnevno;
    console.log(brojDana);
    console.log("Broj dana ucenja do pocetnika je:",brojDana);
    var brojGodinaDoPocetnika=brojDana / 365;
    console.log("Broj godina ucenja do pocetnika je:",brojGodinaDoPocetnika.toFixed(2));
    pasus1.innerText = 'Broj dana ucenja do pocetnika je: ' + brojDana;
}

const dugme = document.getElementById("klikni")
console.log(dugme)

// dugme.onclick = izracunajDane
dugme.addEventListener("click", izracunajDane)

// document.getElementById("klikni").addEventListener("click", izracunajDane)


