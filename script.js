let tanulok = [

    {vNev:"János", kNev:"Kovács", kor:16, átlag:4.5, osztaly:"10.A"},
    {vNev:"Anna", kNev:"Szabó", kor:17, átlag:3.7, osztaly:"11.E"},
    {vNev:"Péter", kNev:"Nagy", kor:15, átlag:4, osztaly:"9.D"},
    {vNev:"Eszter", kNev:"Tóth", kor:16, átlag:3.2, osztaly:"13.C"},
    {vNev:"Máté", kNev:"Nagy", kor:17, átlag:5, osztaly:"12.B"}

];

let vnev = document.getElementById("nev");
let knev = document.getElementById("knev");
let osztaly = document.getElementById("osztaly");
let tanulmanyiatlag = document.getElementById("tanulmanyiatlag");

let table = document.querySelector("table");
let betolt = document.getElementById("betolt");
let mentes = document.getElementById("mentes");
let torlesgomb = document.getElementById("torlesgomb");


vnev.addEventListener("input", function()
{
    this.value = this.value.replace(
        /[^a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]/g,
        ""
    );
});


knev.addEventListener("input", function()
{
    this.value = this.value.replace(
        /[^a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]/g,
        ""
    );
});
osztaly.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9A-Ea-e.]/g,
         ""
        );
});

function osztalyBe()
{
    let osztalySzam = Number(osztaly.value.split(".")[0]);
    
    if (isNaN(osztalySzam))
    {
        throw new Error("Hibás osztály formátum!");
    }

    if (osztalySzam < 9 || osztalySzam > 13)
    {
        throw new Error("Az osztály számának 9 és 13 között kell lennie!");
    }

    return osztaly.value;
}


function TanuloAtlag()
{
    let atlag = Number(tanulmanyiatlag.value);

    if (isNaN(atlag))
    {
        throw new Error("Nem számot adtál meg!");
    }

    if (atlag < 1 || atlag > 5)
    {
        throw new Error("Az átlag 1 és 5 között kell lennie!");
    }

    return atlag;
}



mentes.addEventListener("click", function()
{
    try{

        let nev_regex = /^[A-ZÁÉÍÓÖŐÚÜŰ][a-záéíóöőúüű]+$/;
        //let osztaly_regex = /^[9-1]/;
        TanuloAtlag();
        
        if(vnev.value === "" || knev.value === "" || osztaly.value === "" || tanulmanyiatlag.value === ""){
            throw new Error("Minden mezőt ki kell tölteni!");   
        }
        else if(!nev_regex.test(vnev.value) ){
            throw new Error("Nagybetűvel kell kezdődnie a vezetéknévnek");
        }
        else if(!nev_regex.test(knev.value)){
            throw new Error("Nagybetűvel kell kezdődnie a keresztnévnek");
        }
        // else if(!osztaly_regex.test(osztaly.value)){
        //     throw new Error("Hibás osztály formátum!");
        // }




        tanulok.push({
            vNev: vnev.value,
            kNev: knev.value,
            osztaly: osztaly.value,
            átlag: TanuloAtlag()
        });
        tablazatfeltoltese();
        vnev.value = "";
        knev.value = "";
        osztaly.value = "";
        tanulmanyiatlag.value = "";

    }
    catch (error)
    {
        alert(error.message);
        return;
    }



})













