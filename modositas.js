
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
                <button class="megsegomb">Mégse</button>
            </td>
        </tr>
    `).join("");
}

tablazatfeltoltese();







let modositbtn = document.querySelectorAll(".modositgomb");
let megsegomb = document.querySelectorAll(".megsegomb");


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




megsegomb.forEach(megsegomb =>
    megsegomb.addEventListener("click", function () {
        document.querySelectorAll(".megsegomb").forEach(btn => {
            btn.style.visibility = "hidden";
        });
        tablazatfeltoltese();
    }))

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
function kereses() {
    let input = document.getElementById("myInput");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("mytable");
    let sorok = table.getElementsByTagName("tr");

    for (let i = 1; i < sorok.length; i++) {
        let cells = sorok[i].getElementsByTagName("td");
        if (cells.length > 0) {

            let vnev = cells[0].textContent.toUpperCase();
            let knev = cells[1].textContent.toUpperCase();
            let osztaly = cells[2].textContent.toUpperCase();
            let atlag = cells[3].textContent.toUpperCase();
            if (vnev.indexOf(filter) > -1 || knev.indexOf(filter) > -1 || osztaly.indexOf(filter) > -1 || atlag.indexOf(filter) > -1) {
                sorok[i].style.display = "";
            }
            else {
                sorok[i].style.display = "none";
            }
        }
    }
}



