let modositgbtn = document.getElementById("modositgomb");

let modositertek;
let vnevKi = document.getElementById("vnevKi");
let knevKi = document.getElementById("knevKi");
let osztalyKi = document.getElementById("osztalyKi");   
let tanulmanyiatlagKi = document.getElementById("tanulmanyiatlagKi");

modositgbtn.addEventListener("click", function () {
    document.getElementById("nev").value+= vnevKi.value;
    document.getElementById("knev").value+= knevKi.value;
    document.getElementById("osztaly").value+= osztalyKi.value
    document.getElementById("tanulmanyiatlag").value+= tanulmanyiatlagKi.value
    


    
})

