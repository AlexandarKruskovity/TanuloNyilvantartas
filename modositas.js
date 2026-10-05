
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
                <button class="megsegomb" onclick="tablazatfeltoltese()">Mégse</button>
            </td>
        </tr>
    `).join("");
}

tablazatfeltoltese();






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



