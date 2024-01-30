// Relógio
function horas() {
    relogio.innerHTML = `${horario} AM`
    if (horario == 1 || horario == 3) {
        carrossel.play()
    }
    if (noite == 5) {
        if (horario == 2) {
            somAmbiente3.play()
        }
    }
    if (horario == 12) {
        horario = 1
        relogio.innerHTML = `${horario} AM`
        for (let i = 0; i < elementosTutorial.length; i++) {
            elementosTutorial[i].style.opacity = 0
        }
    } else {
        if (horario == 5) {
            venceuf()
            venceu = true
        } else {
            horario++
            relogio.innerHTML = `${horario} AM`
        }
    }
    tempoRestanteHoras = tmpHoras // Reset the remaining time after the function is executed
    clearInterval(horasId);
    if (venceu == false) {
        iniciarHoras();
    }
}

function iniciarHoras() {
    console.log("tempoRestanteHoras: " + tempoRestanteHoras)
    inicioHoras = Date.now();
    horasId = setInterval(horas, tempoRestanteHoras);
}

function pausarHoras() {
    clearInterval(horasId);
    tempoRestanteHoras -= Date.now() - inicioHoras;
    jogoPausadoHoras = true;
}

function retomarHoras() {
    if (jogoPausadoHoras) {
        iniciarHoras();
        jogoPausadoHoras = false;
    }
}

function totalHoras() {
    tempoTotal--
    sustoFofao()
    tempoRestanteTotalHoras = tmpTotalHoras // Reset the remaining time after the function is executed
    clearInterval(totalHorasId);
    if (venceu == false) {
        iniciarTotalHoras();
    }
}

function iniciarTotalHoras() {
    inicioTotalHoras = Date.now();
    totalHorasId = setInterval(totalHoras, tempoRestanteTotalHoras);
}

function pausarTotalHoras() {
    clearInterval(totalHorasId);
    tempoRestanteTotalHoras -= Date.now() - inicioTotalHoras;
    jogoPausadoTotalHoras = true;
}

function retomarTotalHoras() {
    if (jogoPausadoTotalHoras) {
        iniciarTotalHoras();
        jogoPausadoTotalHoras = false;
    }
}

function venceuf() {
    telaNoite.style.display = "none"
    divMusicBox.style.display = "none"

    limparIntervalos()
    clearTimeout(esperaMascaraId);
    clearTimeout(esperaAtaqueId);

    for (let i = 0; i < audioGeral.length; i++) {
        audioGeral[i].pause();
    }

    manha6.style.display = "block"
    manha6.play()
    manha6.addEventListener("ended", fim6manha)
}

function fim6manha () {
    manha6.style.display = "none"
    if (noite == 5) {
        vitoria.play()
        videoVitoria.style.display = "block"
        videoVitoria.play()
        vitoriaImg.style.display = "block"
        btnVoltarVGm.style.display = "block"
    } else {
        noite++
        console.log("noite++: " + noite)
        for (let i = 0; i <= noite; i++) {
            noites[i].classList.add("active")
        }
        manha6.removeEventListener("ended", fim6manha)
        voltarTelaIni()
    }
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Queda de energia


// Inicia um intervalo para consumir energia
function iniciarBateria() {
    bateriaInterval = setInterval(function () {
        //console.log("tmpBateria: " + tmpBateria)
        consumo = 1
        if (luzAcesa == true) {
            consumo += 3
        }
        if (luzCamAcesa == true) {
            consumo += 3
        }
        if (mascara == true) {
            consumo += 2
        }
        consumirEnergia(consumo);
    }, tmpBateria);
}

// Função para consumir energia
function consumirEnergia(qtdeConsumo) {
    bateria -= qtdeConsumo;
    if (bateria <= 0) {
        bateria = 0
        gameOverFofaof()
    }
    bateriaP.innerHTML = `Bateria: ${bateria}%`
}

function atualizaBarras() {
    if (uso < 1) {
        uso = 1
    }
    for (let i = 0; i < usoMaximo; i++) {
        barra[i].style.backgroundColor = cores[i];
        barra[i].style.display = (i <= (uso - 1)) ? "block" : "none";
    }
}

