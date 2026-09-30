let tanulok = [

    {vNev:"János", kNev:"Kovács",  átlag:4.5, osztaly:"10.A"},
    {vNev:"Anna", kNev:"Szabó",  átlag:3.7, osztaly:"11.E"},
    {vNev:"Péter", kNev:"Nagy", átlag:4, osztaly:"9.D"},
    {vNev:"Eszter", kNev:"Tóth",  átlag:3.2, osztaly:"13.C"},
    {vNev:"Máté", kNev:"Nagy",  átlag:5, osztaly:"12.B"}, 
    {vNev:"Bence", kNev:"Horváth", átlag:4.2, osztaly:"9.A"},
    {vNev:"Lilla", kNev:"Varga", átlag:4.8, osztaly:"10.C"},
    {vNev:"Dávid", kNev:"Kiss", átlag:3.5, osztaly:"11.B"},
    {vNev:"Nóra", kNev:"Molnár", átlag:4.6, osztaly:"12.D"},
    {vNev:"Zoltán", kNev:"Németh", átlag:3.9, osztaly:"13.A"},
    {vNev:"Réka", kNev:"Farkas", átlag:4.1, osztaly:"9.E"},
    {vNev:"Ádám", kNev:"Balogh", átlag:3.8, osztaly:"10.B"},
    {vNev:"Petra", kNev:"Lakatos", átlag:4.7, osztaly:"11.D"},
    {vNev:"Marcell", kNev:"Papp", átlag:4.3, osztaly:"12.A"},
    {vNev:"Dóra", kNev:"Takács", átlag:3.6, osztaly:"13.E"},
    {vNev:"Gergő", kNev:"Oláh", átlag:4.9, osztaly:"10.D"},
    {vNev:"Viktória", kNev:"Simon", átlag:4.4, osztaly:"11.A"},
    {vNev:"Tamás", kNev:"Rácz", átlag:3.3, osztaly:"12.E"},
    {vNev:"Laura", kNev:"Fülöp", átlag:4.0, osztaly:"9.C"},
    {vNev:"Balázs", kNev:"Sipos", átlag:3.1, osztaly:"10.E"}

];

let vnev = document.getElementById("nev");
let knev = document.getElementById("knev");
let osztaly = document.getElementById("osztaly");
let tanulmanyiatlag = document.getElementById("tanulmanyiatlag");

let table = document.querySelector("table");
let betolt = document.getElementById("betolt");
let mentes = document.getElementById("mentes");
let torlesgomb = document.getElementById("torlesgomb");





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
        let osztaly_regex = /^(?:9|1[0-3])\.[A-Ea-e]$/;
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
        else if(!osztaly_regex.test(osztaly.value)){
            throw new Error("Hibás osztály formátum! Példa: 10.A");
        }


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


let tanulok_szama = document.getElementById("tanulok_szama");
let osztalyatlag = document.getElementById("osztalyatlag");
let legjobb_tanulo = document.getElementById("legjobb_tanulo");


tanulok_szama.textContent+= tanulok.length;

frissit.addEventListener("click", function() {
    tanulok_szama.textContent+= tanulok.length;
})











