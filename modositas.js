
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
            </td>
        </tr>
    `).join("");
}

tablazatfeltoltese();







let modositbtn = document.querySelectorAll(".modositgomb");



modositbtn.forEach(modositbtn => 
    
    modositbtn.addEventListener("click", function () {
    
    let sor=modositbtn.closest("tr");
    let vnevKi = sor.querySelector(".vnevKi");
    let knevKi = sor.querySelector(".knevKi");
    let osztalyKi = sor.querySelector(".osztalyKi");
    let tanulmanyiatlagKi = sor.querySelector(".tanulmanyiatlagKi");


    vnevKi.innerHTML = `<input type="text" id="vnev_modify">`;
    knevKi.innerHTML = `<input type="text" id="knev_modify">`;
    osztalyKi.innerHTML = `<input type="text" id="osztaly_modify" >`;
    tanulmanyiatlagKi.innerHTML = `<input  id="tanulmanyiatlag_modify">`;

    
}))

// let megsegomb = document.getElementById("megsegomb");

// megsegomb.addEventListener("click", function () {
//    megsegomb.style.display = "none";
//    tablazatfeltoltese();
// });
mentes.addEventListener("click", function()
{
    try
    {
        if (vnev.value === "" || knev.value === "")
        {
            throw new Error("A név megadása kötelező!");
        }

        let ujTanulo = {
            vNev: vnev.value,
            kNev: knev.value,
            osztaly: osztalyBe(),
            átlag: TanuloAtlag()
        };

        tanulok.push(ujTanulo);

        alert("A tanuló sikeresen mentve!");

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
            </td>
        </tr>
    `).join("");
}

tablazatfeltoltese();

        vnev.value = "";
        knev.value = "";
        osztaly.value = "";
        tanulmanyiatlag.value = "";
    }
    catch (e)
    {
        alert(e.message);
    }
});

let modositas_mentese = document.querySelectorAll(".modositas_mentese");

modositas_mentese.forEach(modositas_mentese => modositas_mentese.addEventListener("click", function () {

    try{
        let vnevki_m = document.getElementById("vnev_modify");
        let knevki_m = document.getElementById("knev_modify");
        let osztalyki_m = document.getElementById("osztaly_modify");
        let tanulmanyiatlagki_m = document.getElementById("tanulmanyiatlag_modify");


        if (vnevki_m.value == "" || knevki_m.value == "" || osztalyki_m.value == "" || tanulmanyiatlagki_m.value == "") {
            throw new Error("Minden mezőt ki kell tölteni!");
        }
        else if(isNaN(tanulmanyiatlagki_m.value)){
            throw new Error("A tanulmányi átlag mezőbe csak számot lehet írni!");
        }
        else if(!isNaN(vnevki_m.value) || !isNaN(knevki_m.value)){
            throw new Error("A név mezőbe nem lehet számot írni!");
        }
  


            console.log("Módosítás sikeres!");
            console.log("Vezetéknév: " + vnevki_m.value);
            console.log("Keresztnév: " + knevki_m.value);
            console.log("Osztály: " + osztalyki_m.value);
            console.log("Tanulmányi átlag: " + tanulmanyiatlagki_m.value);




            


            
            let vnevki_mvalue = vnevki_m.value;
            let knevki_mvalue = knevki_m.value;
            let osztalyki_mvalue = osztalyki_m.value;
            let tanulmanyiatlagki_mvalue = tanulmanyiatlagki_m.value;

            
            

            modositas_mentese.closest("tr").innerHTML =`
                
                    <td class="vnevKi">${vnevki_mvalue}</td>
                    <td class="knevKi">${knevki_mvalue}</td>
                    <td class="osztalyKi">${osztalyki_mvalue}</td>
                    <td class="tanulmanyiatlagKi">${tanulmanyiatlagki_mvalue}</td>
                    <td class="actions">
                        <button class="modositgomb" >Módosítás</button>
                        <button class="torlesgomb" >Törlés</button>
                        <button class="modositas_mentese" >Mentés</button>
                    </td>
               
            `;

           

            

    }
    catch(e){
        console.log("Hiba: "+""+e.message)
    }

            
}))
const torlesGomb = document.querySelectorAll('.torlesgomb');
try {
        knev.value = "";
        osztaly.value = "";
        tanulmanyiatlag.value = "";
} catch (e) {
        alert(e.message);
}


torlesGomb.forEach(gomb => {

    gomb.addEventListener("click", function () {

        let sor = gomb.closest("tr");

        let sorIndex = sor.rowIndex - 1;

        tanulok.splice(sorIndex, 1);

        sor.remove();

        alert("A tanuló törölve!");
    });

});








