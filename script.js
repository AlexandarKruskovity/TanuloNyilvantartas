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


function tablazatfeltoltese() {
    document.getElementById("student-table-body").innerHTML = tanulok.map((tanulo) => `
        <tr>
            <td class="vnevKi">${tanulo.vNev}</td>
            <td class="knevKi">${tanulo.kNev}</td>
            <td class="osztalyKi">${tanulo.osztaly}</td>
            <td class="tanulmanyiatlagKi">${tanulo["átlag"]}</td>
            <td class="actions">
                <button class="modositgomb">Módosítás</button>
                <button class="torlesgomb">Törlés</button>
                <button class="modositas_mentese">Mentés</button>
                <button class="megsegomb" onclick="tablazatfeltoltese()" >Mégse</button>
            </td>
        </tr>
    `).join("");
}

tablazatfeltoltese();






const tabla = document.getElementById("student-table-body");

tabla.addEventListener("click", function (e) {

   
    if (e.target.classList.contains("torlesgomb")) {

        let sor = e.target.closest("tr");
        let sorIndex = sor.rowIndex - 1;

        tanulok.splice(sorIndex, 1);

        tablazatfeltoltese();

        alert("A tanuló törölve!");
    }


    
    if (e.target.classList.contains("modositgomb")) {

       
        let sor = e.target.closest("tr");
       
        let vnevKi = sor.querySelector(".vnevKi");
        let knevKi = sor.querySelector(".knevKi");
        let osztalyKi = sor.querySelector(".osztalyKi");
        let tanulmanyiatlagKi = sor.querySelector(".tanulmanyiatlagKi");

        vnevKi.innerHTML =
            `<input type="text" class="vnev_modify" value="${vnevKi.textContent}">`;

        knevKi.innerHTML =
            `<input type="text" class="knev_modify" value="${knevKi.textContent}">`;

        osztalyKi.innerHTML =
            `<input type="text" class="osztaly_modify" value="${osztalyKi.textContent}">`;

        tanulmanyiatlagKi.innerHTML =
            `<input type="text" class="tanulmanyiatlag_modify" value="${tanulmanyiatlagKi.textContent}">`;
    }


    
    if (e.target.classList.contains("modositas_mentese")) {

        let sor = e.target.closest("tr");

        let vnev = sor.querySelector(".vnev_modify");
        let knev = sor.querySelector(".knev_modify");
        let osztaly = sor.querySelector(".osztaly_modify");
        let atlag = sor.querySelector(".tanulmanyiatlag_modify");

       

        if (
            vnev.value === "" ||
            knev.value === "" ||
            osztaly.value === "" ||
            atlag.value === ""
        ) {
            alert("Minden mezőt ki kell tölteni!");
            return;
        }

        if (isNaN(atlag.value)) {
            alert("A tanulmányi átlag mezőbe csak számot lehet írni!");
            return;
        }

        let sorIndex = sor.rowIndex - 1;

        tanulok[sorIndex] = {
            vNev: vnev.value,
            kNev: knev.value,
            osztaly: osztaly.value,
            átlag: Number(atlag.value)
        };

        tablazatfeltoltese();

        alert("A módosítás sikeres!");
    }

});





function kereses(event) {
    
    const searchTerm = event.target.value.trim().toLowerCase();
    const items = document.querySelectorAll("#student-table-body tr");

    items.forEach(item => {
        if(item.textContent.toLowerCase().includes(searchTerm)) {
            item.style.display = "";
        }
        else{
            item.style.display = "none";
        }
    })

    
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
        let osztaly_regex = /^(?:9|1[0-3])\.[A-Ea-e]$/;
        TanuloAtlag();
        
        if(vnev.value === "" || knev.value === "" || osztaly.value === "" || tanulmanyiatlag.value === ""){
            throw new Error("Minden mezőt ki kell tölteni!");   
        }
        else if(!nev_regex.test(vnev.value) ){
            vnev.value = "";
            
            throw new Error("Nagybetűvel kell kezdődnie a vezetéknévnek");
            
        }
        else if(!nev_regex.test(knev.value)){
            
            knev.value = "";
            
            throw new Error("Nagybetűvel kell kezdődnie a keresztnévnek");
        }
        else if(!osztaly_regex.test(osztaly.value)){
            
            osztaly.value = "";
            
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

let osztalyatlag_fgv = () => {
    let osztaly= document.querySelector("#osztalyatlag");
    for(let i = 0; i < osztaly.length; i++)
    {
        if(osztaly[i].contains("A")){
            osztalyatlag.textContent = `Az osztály átlaga: ${Math.round(osszes / db * 100) / 100}`;
        }   
       
        
        
        
    
    }
    
    
    
    // osszes = 0;
    // db = 0;
   
}

  osztalyatlag_fgv();


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
    osztalyatlag_fgv();
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




document.getElementById("rendezes-atlag-szerint").addEventListener("click", function() {
    tanulok.sort((a, b) => b.átlag - a.átlag);
    tablazatfeltoltese();
});

document.getElementById("rendezes-nev-szerint").addEventListener("click", function() {
    tanulok.sort((a, b) => {
        let nevA = a.vNev.toLowerCase();
        let nevB = b.vNev.toLowerCase();
        if (nevA < nevB) return -1;
        if (nevA > nevB) return 1;
        return 0;
    });
    tablazatfeltoltese();
});

document.getElementById("csak-kitunok").addEventListener("click", function() {
    let kitunok = tanulok.filter(tanulo => tanulo.átlag >= 4.5);
    document.getElementById("student-table-body").innerHTML = kitunok.map((tanulo) => `<tr>
        <td>${tanulo.kNev}</td>
        <td>${tanulo.vNev}</td>
        <td>${tanulo.osztaly}</td>
        <td>${tanulo.átlag}</td>
        <td>
            <button onclick="modositas(${tanulo.id})">Módosítás</button>
            <button onclick="torles(${tanulo.id})">Törlés</button>
        </td>
    </tr>`).join("");  })



document.getElementById("beszinezes").addEventListener("click", function() {
    for (let i = 0; i < tanulok.length; i++) {
        if(tanulok[i].átlag >= 4.5){
            document.getElementById("student-table-body").rows[i].style.backgroundColor = "green";
        }
        else if(tanulok[i].átlag <2){
            document.getElementById("student-table-body").rows[i].style.backgroundColor = "red";
        }
    }
    


})