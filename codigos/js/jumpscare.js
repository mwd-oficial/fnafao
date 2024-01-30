// Game Over

function limparIntervalos() {
    pausarHoras()
    pausarTotalHoras()

    clearInterval(bateriaInterval)

    clearTimeout(esperaAtaqueId);

    clearInterval(alarmeDelay)
    musicbox.pause()
    alarme.pause()
    alerta.style.display = "none"
    alertaCam.style.display = "none"
    musicbox.currentTime = 0

    tempoRestanteChica -= Date.now() - inicioChica;
    clearInterval(chicaId);

    btnMusicBox.removeEventListener("mouseleave", leavePuppet)
    clearInterval(intervaloPuppet);

    tempoRestanteFofao -= Date.now() - inicioFofao;
    clearInterval(fofaoId);

    tempoRestanteFoxy -= Date.now() - inicioFoxy;
    clearInterval(foxyId);

    tempoRestanteBalloonBoy -= Date.now() - inicioBalloonBoy;
    clearInterval(balloonBoyId);
}

function mostrarTelaGameOver() {
    limparIntervalos()
    for (let i = 0; i < jumpscare.length; i++) {
        jumpscare[i].style.display = "none"
        jumpscare[i].pause()
    }
    chiado.play()
    videoChiado.style.display = "block"
    videoChiado.play()
    videoChiado.addEventListener("ended", chiadof)
    function chiadof() {
        chiadoContagem++;
        if (chiadoContagem < 10) {
            videoChiado.play()
        } else {
            videoChiado.style.display = "none";
            btnVoltarVGm.style.display = "block"
            gameOverP.style.display = "block"
            telaGameOver.style.display = "block"
            telaGameOver.play()
            videoChiado.removeEventListener("ended", chiadof)
        }
    }
}


function gameOverFofaof() {
    limparIntervalos()
    clearTimeout(esperaMascaraId);
    clearTimeout(esperaAtaqueId);

    if (luzAcesa == true) {
        clickLuz()
    }

    if (camera == true) {
        clickCamera()
    }

    if (mascara == true) {
        clickMascara()
    }

    for (let i = 0; i < audioGeral.length; i++) {
        audioGeral[i].pause();
    }

    for (let i = 0; i < barra.length; i++) {
        barra[i].style.display = "none"
    }

    quedaEnergia.play()
    botoesBloqueados = true
    botoesBloqueadosPuppet = true
    for (let i = 0; i < videoVisao.length; i++) {
        videoVisao[i].style.display = "none"
    }
    videoVisaoNinguem.style.display = "block"

    quedaEnergia.addEventListener("ended", function () {
        videoVisaoNinguem.style.display = "none"
        gameOverFofaoAudio.play()
        gameOverFofaoVideo.style.display = "block"
        gameOverFofaoVideo.play()
        gameOverFofaoAudio.addEventListener("ended", jumpscareFofaof)
    })
}

function alterarVideoVisaoPuppet() {
    for (let i = 0; i < videoVisao.length; i++) {
        videoVisao[i].style.display = "none"
    }
    videoVisaoPuppet.style.display = "block"
}

function gameOverPuppetf() {
    limparIntervalos()
    clearTimeout(esperaMascaraId);
    clearTimeout(esperaAtaqueId);

    if (luzAcesa == false) {
        clickLuz()
    }

    if (camera == true) {
        clickCamera()
    }

    if (mascara == true) {
        clickMascara()
    }

    for (let i = 0; i < audioGeral.length; i++) {
        audioGeral[i].pause();
    }


    gameOverPuppet.play()
    botoesBloqueados = true
    ataquePuppet = true

    atualizaCurrentTime()

    gameOverPuppet.addEventListener("ended", gmpuppetf)
    function gmpuppetf() {
        puppetContagem++
        if (puppetContagem < 3) {
            gameOverPuppet.play()
        } else {
            videoVisaoNinguem.style.display = "none"
            telaNoite.style.display = "none"
            jumpscarePuppet.style.display = "block"
            jumpscarePuppet.play()
            jumpscarePuppet.addEventListener("ended", mostrarTelaGameOver)
        }
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Jumpscare

function darJumpscare() {
    if (ataqueBalloonBoy == false) {
        for (let i = 0; i < audioGeral.length; i++) {
            audioGeral[i].pause()
        }
    }
    clearTimeout(esperaAtaqueId);
    if (ataqueChica == true) {
        jumpscareChicaf()
    }
    if (ataqueFofao == true) {
        jumpscareFofaof()
    }
    if (ataqueFoxy == true) {
        jumpscareFoxyf()
    }
    if (ataqueBalloonBoy == true) {
        jumpscareBalloonBoyf()
    }
}

function sumirAnimatronic() {
    apareceuPortaTocou = false
    alguemAtacou = false
    primeiraVezMasc = true
    tempoRestanteEsperaAtaque = tmpEsperaAtaque
    tempoRestanteEsperaMascara = tmpEsperaMascara
    for (let i = 0; i < videoVisao.length; i++) {
        videoVisao[i].style.display = "none"
    }
    videoVisaoNinguem.style.display = "block"
    if (luzAcesa == true) {
        luzAcesa = false
        acenderApagarLuz()
    }
}

function jumpscareFofaof() {
    clearInterval(alarmeDelay)
    telaNoite.style.display = "none"
    jumpscareFofao.style.display = "block"
    jumpscareFofao.play()
    jumpscareFofao.addEventListener("ended", mostrarTelaGameOver)
}

function jumpscareChicaf() {
    clearInterval(alarmeDelay)
    telaNoite.style.display = "none"
    jumpscareChica.style.display = "block"
    jumpscareChica.play()
    jumpscareChica.addEventListener("ended", mostrarTelaGameOver)
}

function jumpscareFoxyf() {
    clearInterval(alarmeDelay)
    telaNoite.style.display = "none"
    jumpscareFoxy.style.display = "block"
    jumpscareFoxy.play()
    jumpscareFoxy.addEventListener("ended", mostrarTelaGameOver)
}

function jumpscareBalloonBoyf() {
    if (camera == true) {
        clickCamera()
    }
    sumirBalloonBoy()
    jumpscareBalloonBoy.style.display = "block"
    jumpscareBalloonBoy.play()
    jumpscareBalloonBoy.removeEventListener("ended", aposJumpscareBalloonBoy)
    jumpscareBalloonBoy.addEventListener("ended", aposJumpscareBalloonBoy)
}

function aposJumpscareBalloonBoy() {
    jumpscareBalloonBoy.style.display = "none"
    jumpscareBalloonBoy.pause()
    respiracaoOfegante.play()
    if (bateria <= 10) {
        bateria = 0
        consumirEnergia(0);
    } else {
        consumirEnergia(10);
    }
}
