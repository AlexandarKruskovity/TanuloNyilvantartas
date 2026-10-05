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


let tanulokszama = () => {
    tanulok_szama.textContent = `A tanulók száma: ${tanulok.length}`;
}
tanulokszama();



let db=0;
let atlag= 0;
let osszes = 0;

let tanulokatlaga = () => {
    
    for(let i = 0; i < tanulok.length; i++)
    {
    db++;
    
    osszes += tanulok[i].átlag;
    
    
   
    }
    
    osztalyatlag.textContent = `Az osztály átlaga: ${Math.round(osszes / db * 100) / 100}`;
    osszes = 0;
    db = 0;
   
}

  tanulokatlaga();


let legjobbtanulo = () =>{
    for(let i = 0; i < tanulok.length; i++)
    {
    if(tanulok[i].átlag > tanulok[0].átlag)
    {
        tanulok[0] = tanulok[i];
        legjobb_tanulo.textContent = `A legjobb tanuló: ${tanulok[i].vNev} ${tanulok[i].kNev} - Átlag: ${tanulok[i].átlag}`;
    }
    }
    }

legjobbtanulo();


frissit.addEventListener("click", function() {
    tanulok_szama.textContent = ""
    tanulok_szama.textContent = `A tanulók száma: ${tanulok.length}`;
    legjobbtanulo();    
    tanulokatlaga();
    jeles_tanulok_szama();
    jo_tanulok_szama();
    kozepes_tanulok_szama();
    elgseges_tanulok_szama();
    elegtelen_tanulok_szama();
})


let jeles_tanulok_szama = () =>{
    let db = 0;
    for(let i = 0; i < tanulok.length; i++)
    {
        if(tanulok[i].átlag >= 4.5)
        {
            db++;
        }
    }
    document.getElementById("jo_tanulo").textContent = `Jeles tanulók száma: ${db}`;
}

jeles_tanulok_szama();



let jo_tanulok_szama = () =>{
    let db = 0;
    for(let i = 0; i < tanulok.length; i++){
        if(tanulok[i].átlag >= 3.5 && tanulok[i].átlag < 4.49){
            db++;
        }
    }
    document.getElementById("jo_tanulo").textContent = `Jó tanulók száma: ${db}`;
}

jo_tanulok_szama();


let kozepes_tanulok_szama = () =>{
    let db = 0;
    for(let i = 0; i < tanulok.length; i++){
        if(tanulok[i].átlag >= 2.5 && tanulok[i].átlag < 3.49){
            db++;
        }
    }
    document.getElementById("kozepes_tanulo").textContent = `Közepes tanulók száma: ${db}`;
}

kozepes_tanulok_szama();



let elgseges_tanulok_szama = () =>{
    let db = 0;
    for(let i = 0; i < tanulok.length; i++){
        if(tanulok[i].átlag >= 2 && tanulok[i].átlag < 2.49){
            db++;
        }
    }
    document.getElementById("elegseges_tanulo").textContent = `Elégséges tanulók száma: ${db}`;
}

elgseges_tanulok_szama();



let elegtelen_tanulok_szama = () =>{
    let db = 0;
    for(let i = 0; i < tanulok.length; i++){
        if(tanulok[i].átlag < 2){
            db++;
        }
    }
    document.getElementById("elegtelen_tanulo").textContent = `Elegtelen tanulók száma: ${db}`;
}
elegtelen_tanulok_szama();