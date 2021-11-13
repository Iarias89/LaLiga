function getDataFetch(url) {
    
    fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token": "1bd6971d178b47a499541b474714b995"
        }
    }).then( response => {
        if (response.ok) {
            return response.json();
        }
    }).then(data => {
        console.log(data);
        let clasificacion = data;
        tablaclas(clasificacion.standings[0].table);
    })
};

getDataFetch("https://api.football-data.org/v2/competitions/2014/standings");

function tablaclas(table) {

    let clastabla = document.getElementById("tablaclas")

    for (let i = 0; i < table.length; i++) {

        const tr = document.createElement("tr");

        let posicion = document.createElement("p")
        posicion.innerText = table[i].position;
        if (table[i].position <= "4" ) {
            posicion.style.color = "blue"
        } if (table[i].position == "5") {
            posicion.style.color = "purple"
        } if (table[i].position == "6") {
            posicion.style.color = "purple"
        } if (table[i].position > "17") {
            posicion.style.color = "red"
        } if (table[i].position == "7") {
            posicion.style.color = "orange"
        }
        let equipo = document.createElement("p")
        equipo.innerText = table[i].team.name;

        let pJugados = document.createElement("p")
        pJugados.innerText = table[i].playedGames;

        let pGanados = document.createElement("p")
        pGanados.innerText = table[i].won;

        let pEmpatados = document.createElement("p")
        pEmpatados.innerText = table[i].draw;

        let pPerdidos = document.createElement("p")
        pPerdidos.innerText = table[i].lost;

        let pTotales = document.createElement("p")
        pTotales.innerText = table[i].points;

        let gFavor = document.createElement("p")
        gFavor.innerText = table[i].goalsFor;

        let gContra = document.createElement("p")
        gContra.innerText = table[i].goalsAgainst;

        let difGoles = document.createElement("p")
        difGoles.innerText = table[i].goalDifference;

        let equipoImg = document.createElement("img");
        equipoImg.setAttribute("src", table[i].team.crestUrl);
        equipoImg.classList.add("escudos")

        let datosClasificacion = [posicion, equipoImg, equipo, pTotales, pJugados, pGanados, pEmpatados, pPerdidos, gFavor, gContra, difGoles];

        for (let x = 0; x < datosClasificacion.length; x++) {

            const td = document.createElement("td")
            td.append(datosClasificacion[x]);
            tr.appendChild(td)

        }
        clastabla.appendChild(tr);
    }

};

window.addEventListener("load", function () {
    document.getElementById("load").classList.toggle("loader2")
});