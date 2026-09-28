let tanulok = [
    { vNev: "János", kNev: "Kovács", kor: 16, "átlag": 4.53, osztaly: "10.A" },
    { vNev: "Anna", kNev: "Szabó", kor: 17, "átlag": 3.7, osztaly: "11.E" },
    { vNev: "Péter", kNev: "Nagy", kor: 15, "átlag": 4.02, osztaly: "9.D" },
    { vNev: "Eszter", kNev: "Tóth", kor: 16, "átlag": 3.22, osztaly: "13.C" },
    { vNev: "Máté", kNev: "Nagy", kor: 17, "átlag": 5.0, osztaly: "12.B" }
];

let vnev = document.getElementById("nev");
let knev = document.getElementById("knev");
let osztaly = document.getElementById("osztaly");
let tanulmanyiatlag = document.getElementById("tanulmanyiatlag");
let betolt = document.getElementById("betolt");
let mentes = document.getElementById("mentes");
let tbody = document.getElementById("tablazat");

vnev.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]/g, "");
});

knev.addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]/g, "");
});

function osztalyBe() {
    let osztalySzam = Number(osztaly.value.split(".")[0]);

    if (isNaN(osztalySzam)) {
        throw new Error("Hibás osztály formátum!");
    }

    if (osztalySzam < 9 || osztalySzam > 13) {
        throw new Error("Az osztály számának 9 és 13 között kell lennie!");
    }

    return osztaly.value;
}

function TanuloAtlag() {
    let atlag = Number(tanulmanyiatlag.value);

    if (isNaN(atlag)) {
        throw new Error("Nem számot adtál meg!");
    }

    if (atlag < 1 || atlag > 5) {
        throw new Error("Az átlag 1 és 5 között kell lennie!");
    }

    return atlag;
}

function renderTable() {
    tbody.innerHTML = "";

    tanulok.forEach((tanulo) => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${tanulo.vNev}</td>
            <td>${tanulo.kNev}</td>
            <td>${tanulo.osztaly}</td>
            <td>${Number(tanulo["átlag"]).toFixed(2)}</td>
            <td class="actions">
                <button type="button">Mentés</button>
                <button type="button">Törlés</button>
                <button type="button">Módosít</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

betolt.addEventListener("click", renderTable);

mentes.addEventListener("click", function () {
    try {
        let tanuloTorles = tanulok.findIndex(
            (tanulo) => tanulo.vNev === vnev.value && tanulo.kNev === knev.value && tanulo.osztaly === osztalyBe()
        );

        if (tanuloTorles !== -1) {
            tanulok.splice(tanuloTorles, 1);
            renderTable();
        }
    } catch (e) {
        alert(e.message);
    }
});

renderTable();
