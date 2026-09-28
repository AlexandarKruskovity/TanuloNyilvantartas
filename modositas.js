function tablazatfeltoltese() {
    document.getElementById("student-table-body").innerHTML = tanulok.map((tanulo) => `
        <tr>
            <td id="vnevKi">${tanulo.vNev}</td>
            <td id="knevKi">${tanulo.kNev}</td>
            <td id="osztalyKi">${tanulo.osztaly}</td>
            <td id="tanulmanyiatlagKi">${tanulo["átlag"]}</td>
            <td class="actions">
                <button id="modositgomb">Módosítás</button>
                <button id="torlesgomb">Törlés</button>
                <button id="mentesgomb">Mentés</button>
            </td>
        </tr>
    `).join("");
}

tablazatfeltoltese();

let modositbtn = document.getElementById("modositgomb");
let megsebtn = document.getElementById("megsegomb");
megsebtn.style.display = "none";

modositbtn.addEventListener("click", function () {

    megsebtn.style.display = "block";
    let vnev = document.getElementById("vnev");
    let knev = document.getElementById("knev");
    let osztaly = document.getElementById("osztaly");
    let tanulmanyiatlag = document.getElementById("tanulmanyiatlag");


    document.getElementById("vnevKi").innerHTML = `<input type="text" id="vnev_modify" >`;
    document.getElementById("knevKi").innerHTML = `<input type="text" id="knev_modify" >`;
    document.getElementById("osztalyKi").innerHTML = `<input type="text" id="osztaly_modify" >`;
    document.getElementById("tanulmanyiatlagKi").innerHTML = `<input type="text" id="tanulmanyiatlag_modify" >`;

    document.getElementById("body").innerHTML = `<button id="megsegomb">Mégse</button>`;



    try{

        if (nev.value == "" || knev.value == "" || osztaly.value == "" || tanulmanyiatlag.value == "") {
            throw new Error("Minden mezőt ki kell tölteni!");
        }
        else if(!isNaN(tanulmanyiatlagKi.value)){
            throw new Error("A tanulmányi átlag mezőbe csak számot lehet írni!");
        }
        else if(!isNaN(vnevKi.value) || !isNaN(knev.value)){
            throw new Error("A név mezőbe nem lehet számot írni!");
        }
       


            console.log("Módosítás sikeres!");
            document.getElementById("nev").value+= vnevKi.value;
            document.getElementById("knev").value+= knevKi.value;
            document.getElementById("osztaly").value+= osztalyKi.value
            document.getElementById("tanulmanyiatlag").value+= tanulmanyiatlagKi.value

            vnevki=document.getElementById("vnev").value;
            knevki=document.getElementById("knev").value;
            osztalyki=document.getElementById("osztaly").value;
            tanulmanyiatlagki=document.getElementById("tanulmanyiatlag").value;





    }
    catch(e){
        console.log("Hiba: "+""+e.message)
    }

    
    
})

megsebtn.addEventListener("click", function () {
    megsebtn.style.display = "none";
    tablazatfeltoltese();
});









