function ataque() {
    if (passosChica === 3 && passosFofao !== 2 && passosPuppet !== 2 && passosFoxy !== 3 && passosBalloonBoy !== 1) {
        alguemAtacou = true
        ataqueChica = true
        clearInterval(chicaId)
        iniciarEsperaAtaque()
        if (mascara == true) {
            mascara = false
            verificaMascara()
        }
    } else if (passosChica !== 3 && passosFofao === 2 && passosPuppet !== 2 && passosFoxy !== 3 && passosBalloonBoy !== 1) {
        alguemAtacou = true
        ataqueFofao = true
        clearInterval(fofaoId)
        iniciarEsperaAtaque()
        if (mascara == true) {
            mascara = false
            verificaMascara()
        }
    } else if (passosChica !== 3 && passosFofao !== 2 && passosPuppet !== 2 && passosFoxy === 3 && passosBalloonBoy !== 1) {
        alguemAtacou = true
        ataqueFoxy = true
        clearInterval(foxyId)
        iniciarEsperaAtaque()
        if (mascara == true) {
            mascara = false
            verificaMascara()
        }
    } else if (passosChica !== 3 && passosFofao !== 2 && passosPuppet !== 2 && passosFoxy !== 3 && passosBalloonBoy === 1) {
        alguemAtacou = true
        ataqueBalloonBoy = true
        clearInterval(balloonBoyId)
        iniciarEsperaAtaque()
        alterarVideoVisaoBalloonBoy()
        if (mascara == true) {
            mascara = false
            verificaMascara()
        }
    }
}

function iniciarEsperaAtaque() {
    console.log("tempoRestanteEsperaAtaque: " + tempoRestanteEsperaAtaque)
    inicioEsperaAtaque = Date.now();
    if (ataqueBalloonBoy == true) {
        esperaAtaqueId = setTimeout(darJumpscare, 1500);
    } else {
        esperaAtaqueId = setTimeout(darJumpscare, tempoRestanteEsperaAtaque);
    }
}

function pausarEsperaAtaque() {
    console.log("Pausando espera ataque")
    clearTimeout(esperaAtaqueId);
    tempoRestanteEsperaAtaque -= Date.now() - inicioEsperaAtaque;
    ataquePausado = true;
}

function retomarEsperaAtaque() {
    if (ataquePausado) {
        console.log("Retomando espera ataque")
        iniciarEsperaAtaque();
        ataquePausado = false;
    }
}

function iniciarEsperaMascara() {
    console.log("tempoRestanteEsperaMascara: " + tempoRestanteEsperaMascara)
    inicioEsperaMascara = Date.now();
    if (ataqueChica == true) {
        esperaMascaraId = setTimeout(sumirChica, tempoRestanteEsperaMascara);
    }
    if (ataqueFofao == true) {
        esperaMascaraId = setTimeout(sumirFofao, tempoRestanteEsperaMascara);
    }
    if (ataqueFoxy == true) {
        esperaMascaraId = setTimeout(sumirFoxy, 1000);
    }
    if (ataqueBalloonBoy == true) {
        esperaMascaraId = setTimeout(sumirBalloonBoy, tempoRestanteEsperaMascara);
    }
}

function pausarEsperaMascara() {
    console.log("Pausando espera máscara")
    clearTimeout(esperaMascaraId);
    tempoRestanteEsperaMascara -= Date.now() - inicioEsperaMascara;
    mascaraPausada = true;
}

function retomarEsperaMascara() {
    if (mascaraPausada) {
        console.log("Retomando espera máscara")
        iniciarEsperaMascara();
        mascaraPausada = false;
    }
}