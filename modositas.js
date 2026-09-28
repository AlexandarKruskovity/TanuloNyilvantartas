let modositgbtn = document.getElementById("modositgomb");

let modositertek;

let vnev = document.getElementById("nev");
let knev = document.getElementById("knev");
let osztaly = document.getElementById("osztaly");   
let tanulmanyiatlag = document.getElementById("tanulmanyiatlag");




let vnevKi = document.getElementById("vnevKi");
let knevKi = document.getElementById("knevKi");
let osztalyKi = document.getElementById("osztalyKi");   
let tanulmanyiatlagKi = document.getElementById("tanulmanyiatlagKi");



modositgbtn.addEventListener("click", function () {

    try{
        if (vnevKi.value == "" || knevKi.value == "" || osztalyKi.value == "" || tanulmanyiatlagKi.value == "") {
            throw new Error("Minden mezőt ki kell tölteni!");
        }
        else if(isNaN(tanulmanyiatlagKi.value)){
            throw new Error("A tanulmányi átlag mezőbe csak számot lehet írni!");
        }
        else if(!isNaN(vnevKi.value) || !isNan(knev.value)){
            throw new Error("A név mezőbe nem lehet számot írni!");
        }
       


    console.log("Módosítás sikeres!");
    document.getElementById("nev").value+= vnevKi.value;
    document.getElementById("knev").value+= knevKi.value;
    document.getElementById("osztaly").value+= osztalyKi.value
    document.getElementById("tanulmanyiatlag").value+= tanulmanyiatlagKi.value

    vnevki=document.getElementById("vnev").value;
    knevki=document.getElementById("knev").value;
    osztalyki=document.getElementById("osztaly").value;
    tanulmanyiatlagki=document.getElementById("tanulmanyiatlag").value;





    }
    catch(e){
        console.log(e.message)
    }

    
    
})

mentes.addEventListener("click", function () {

        tanulok.push({
            vNev: vnevki,
            kNev: knevki,
            kor: 0, 
            atlag: tanulmanyiatlagki,
            osztaly: osztalyki
        });
        console.log(mentve);
})
