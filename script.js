document.addEventListener("DOMContentLoaded", function () {
    const mijnForm = document.getElementById("mijnForm");
    const genereerTekstKnop = document.getElementById("genereerTekst");
    const lopendeTekst = document.getElementById("lopendeTekst");

    genereerTekstKnop.addEventListener("click", function () {
        const naam = document.getElementById("naam").value;
        const leeftijd = document.getElementById("leeftijd").value;
        const beroep = document.getElementById("beroep").value;
        const bedrijfsnaam = document.getElementById("bedrijfsnaam").value;
        const collega = document.getElementById("collega").value;
        const beroepcollega = document.getElementById("beroepcollega").value;
        const genre = document.getElementById("genre").value;
        const hobby = document.getElementById("hobby").value;

        const tekst = `Schrijf een kerstverhaal over ${naam}, die werkt als ${beroep} bij het bedrijf ${bedrijfsnaam}. Schrijf het verhaal in het genre ${genre}. Verwerk ook een bijrol voor ${collega}, die werkt als ${beroepcollega}. Benoem het bedrijf eenmalig, niet vaker. Verwerk ook ${hobby} in het verhaal.`;
        
        lopendeTekst.textContent = tekst;
    });
});