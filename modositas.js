
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

const tabla = document.getElementById("student-table-body");

tabla.addEventListener("click", function (e) {

    // TÖRLÉS
    if (e.target.classList.contains("torlesgomb")) {

        let sor = e.target.closest("tr");
        let sorIndex = sor.rowIndex - 1;

        tanulok.splice(sorIndex, 1);

        tablazatfeltoltese();

        alert("A tanuló törölve!");
    }


    // MÓDOSÍTÁS
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


    // MENTÉS
    if (e.target.classList.contains("modositas_mentese")) {

        let sor = e.target.closest("tr");

        let vnev = sor.querySelector(".vnev_modify");
        let knev = sor.querySelector(".knev_modify");
        let osztaly = sor.querySelector(".osztaly_modify");
        let atlag = sor.querySelector(".tanulmanyiatlag_modify");

        if (!vnev || !knev || !osztaly || !atlag) {
            return;
        }

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









