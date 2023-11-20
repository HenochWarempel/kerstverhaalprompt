document.addEventListener("DOMContentLoaded", function () {
    const mijnForm = document.getElementById("mijnForm");
    const genereerTekstKnop = document.getElementById("genereerTekst");
    const lopendeTekst = document.getElementById("lopendeTekst");

    genereerTekstKnop.addEventListener("click", function () {
        const naam = document.getElementById("naam").value;
        const beroep = document.getElementById("beroep").value;
        const bedrijfsnaam = document.getElementById("bedrijfsnaam").value;
        const collega = document.getElementById("collega").value;
        const beroepcollega = document.getElementById("beroepcollega").value;
        const genre = document.getElementById("genre").value;
        
        const tekst = `Schrijf een kerstverhaal met als hoofdpersonen ${naam}, een ${beroep} bij ${bedrijfsnaam}, en ${collega}, een ${beroepcollega} bij hetzelfde bedrijf. Dit verhaal moet zich afspelen tijdens de kersttijd en een sterk gevoel van saamhorigheid en de kerstgedachte uitstralen. Schrijf echter ook subtiel in het genre ${genre}. Zorg ervoor dat het verhaal altijd eindigt met een positieve noot en een moraal die de lezers herinnert aan de ware betekenis van Kerstmis.`;
        
        lopendeTekst.textContent = tekst;
    });
});
