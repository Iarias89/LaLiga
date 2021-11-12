
function getFetch() {
    const url = "https://api.football-data.org/v2/competitions/2014/matches"
    fetch(url, {
        method: "GET",
        headers: {
            "X-Auth-Token": "1bd6971d178b47a499541b474714b995"
        }
    }).then(function (response) {
        if (response.ok == true) {
            return response.json();
        }
    }).then(function (data) {
        let partidos = data

        tablaPartidos(partidos.matches);

        /////////////////////////// Filtro equipo////////////////////////////////

        let datoInput1 = document.getElementById("equipo")
        datoInput1.addEventListener("keyup", function () {
            crearTabla.innerHTML = ""
            datosFiltrados(partidos.matches);
        });

        function datosFiltrados(filtrados) {
            let datoInput = document.querySelector("input").value;

            let partidosFiltro = filtrados.filter((p) => {
                if (p.homeTeam.name.toLowerCase().includes(datoInput.toLowerCase()) ||
                    p.awayTeam.name.toLowerCase().includes(datoInput.toLowerCase())) {
                    return true;
                } else {
                    return false;
                }
            })
            tablaPartidos(partidosFiltro);
        };

        ///////////////////////Filtro Jornada///////////////////////////////////////////////////

        let jornada1 = document.getElementById("srcJornada1")
        jornada1.addEventListener("keyup", function () {
            crearTabla.innerHTML = ""
            datosJornada(partidos.matches);
        });

        function datosJornada(jornadas) {
            let jornada = document.getElementById("srcJornada1").value;

            let jornadaFiltro = jornadas.filter((p) => {
                if (p.matchday == jornada) {
                    return true;
                } else {
                    return false;
                }
            })
            if (jornada == "") {
                return tablaPartidos(partidos.matches)
            }
            tablaPartidos(jornadaFiltro);

        };

        /////////////////////////////////Filtro equipo local ////////////////////////////////

        let local1 = document.getElementById("srcLocal1")
        local1.addEventListener("keyup", function () {
            crearTabla.innerHTML = ""
            datosLocal(partidos.matches);
        });

        function datosLocal(locales) {
            let local = document.querySelector("[name=srcLocal]").value;

            let localFiltro = locales.filter((p) => {
                if (p.homeTeam.name.toLowerCase().includes(local)) {
                    return true;
                } else {
                    return false;
                }
            })
            tablaPartidos(localFiltro);

        };

        //////////////////////////////Filtro equipo visitante///////////////////////////////////

        let visit1 = document.getElementById("srcVisit1")
        visit1.addEventListener("keyup", function () {
            crearTabla.innerHTML = ""
            datosVisit(partidos.matches);
        });

        function datosVisit(visitantes) {
            let visit = document.querySelector("[name=srcVisit]").value;

            let localFiltro = visitantes.filter((p) => {
                if (p.awayTeam.name.toLowerCase().includes(visit)) {
                    return true;
                } else {
                    return false;
                }
            })
            tablaPartidos(localFiltro);

        };

        /////////////////////////////////Filtro resultados////////////////////////////////////

        let result1 = document.getElementById("srcResul1")
        result1.addEventListener("keyup", function () {
            crearTabla.innerHTML = ""
            datosResult(partidos.matches);
        });

        function datosResult(resultados) {
            let resul = document.querySelector("[name=srcResul]").value;

            let resulFiltro = resultados.filter((p) => {
                if (p.score.fullTime.homeTeam + "-" + p.score.fullTime.awayTeam == resul) {
                    return true;
                } else {
                    return false;
                }
            })
            if (resul == "") {
                return tablaPartidos(partidos.matches)
            }
            tablaPartidos(resulFiltro);

        };

        /////////////////////////////Filtro fecha///////////////////////////////////////

        let fecha1 = document.getElementById("srcFecha1")
        fecha1.addEventListener("keyup", function () {
            crearTabla.innerHTML = ""
            datosFecha(partidos.matches);
        });

        function datosFecha(fechas) {
            let fecha = document.querySelector("[name=srcFecha]").value;

            let fechaFiltro = fechas.filter((p) => {
                if (p.utcDate.includes(fecha)) {
                    return true;
                } else {
                    return false;
                }
            })
            tablaPartidos(fechaFiltro);

        };

    })

}

let crearTabla = document.getElementById("tabla")

function tablaPartidos(partido) {

    for (let i = 0; i < partido.length; i++) {

        const tr = document.createElement("tr")

        let nameEquipLocal = document.createElement("p")
        nameEquipLocal.innerHTML = partido[i].homeTeam.name;

        let nameEquipVisit = document.createElement("p")
        nameEquipVisit.innerHTML = partido[i].awayTeam.name;

        let results = partido[i].score.fullTime.homeTeam + "-" + partido[i].score.fullTime.awayTeam;
        if (results === "null-null") {
            results = "Pendiente"
        } else {
            results.innerHTML = partido[i].score.fullTime.homeTeam + "-" + partido[i].score.fullTime.awayTeam;
        }

        let fechaPartido = document.createElement("p")
        fechaPartido.innerHTML = partido[i].utcDate;

        let jornadaPartido = document.createElement("p")
        jornadaPartido.innerHTML = partido[i].matchday;

        let imgLocal = document.createElement("img")
        imgLocal.setAttribute("src", "https://crests.football-data.org/" + partido[i].homeTeam.id + ".svg")
        imgLocal.classList.add("escudos");

        let imgVisit = document.createElement("img")
        imgVisit.setAttribute("src", "https://crests.football-data.org/" + partido[i].awayTeam.id + ".svg")
        imgVisit.classList.add("escudos");

        let datosPartidos = [jornadaPartido, imgLocal, nameEquipLocal, results, nameEquipVisit, imgVisit, fechaPartido];

        for (let x = 0; x < datosPartidos.length; x++) {
            const td = document.createElement("td")
            td.append(datosPartidos[x]);
            tr.appendChild(td)
        }

        crearTabla.appendChild(tr);

    }

};

window.addEventListener("load", function () {
    document.getElementById("load").classList.toggle("loader2")
});

getFetch();