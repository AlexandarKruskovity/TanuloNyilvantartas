
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


    vnevKi.innerHTML = `<input type="text" class="vnev_modify">`;
    knevKi.innerHTML = `<input type="text" class="knev_modify">`;
    osztalyKi.innerHTML = `<input type="text" class="osztaly_modify" >`;
    tanulmanyiatlagKi.innerHTML = `<input type="text" class="tanulmanyiatlag_modify">`;

 
    
}))



megsegomb.addEventListener("click", function () {
   megsebtn.style.display = "none";
   tablazatfeltoltese();
});



// document.getElementById("modositas_mentese").addEventListener("click", function () {


//     try{

//         if (vnevki_m.value == "" || knevki_m.value == "" || osztalyki_m.value == "" || tanulmanyiatlagki_m.value == "") {
//             throw new Error("Minden mezőt ki kell tölteni!");
//         }
//         else if(!isNaN(tanulmanyiatlagki_m.value)){
//             throw new Error("A tanulmányi átlag mezőbe csak számot lehet írni!");
//         }
//         else if(!isNaN(vnevki_m.value) || !isNaN(knevki_m.value)){
//             throw new Error("A név mezőbe nem lehet számot írni!");
//         }
//             let vnevki_m = document.getElementsByClassName("vnev_modify");
//             let knevki_m = document.getElementsByClassName("knev_modify");
//             let osztalyki_m = document.getElementsByClassName("osztaly_modify");
//             let tanulmanyiatlagki_m = document.getElementsByClassName("tanulmanyiatlag_modify");


//             console.log("Módosítás sikeres!");
//             document.getElementsByClassName("vnevKi").value+= vnev_modify.value;
//             document.getElementsByClassName("knevKi").value+= knev_modify.value;
//             document.getElementsByClassName("osztalyKi").value+= osztaly_modify.value;
//             document.getElementsByClassName("tanulmanyiatlagKi").value+= tanulmanyiatlag_modify.value;


//     }
//     catch(e){
//         console.log("Hiba: "+""+e.message)
//     }

            
// })





