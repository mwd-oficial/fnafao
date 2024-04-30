document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
        console.log('Página minimizada!');
        if (telaNoite.style.display == "block") {
            telaPause.style.display = "flex"
        }
        if (!jogoPausado) {
            pausarJogo()
        }
    } else {
        console.log('Página visível!');
        if (telaNoite.style.display == "block") {
            telaPause.style.display = "flex"
        } else {
            despausarJogo()
        }
    }
})

function launchFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
        element.msRequestFullscreen();
    }
}

telaCheia.addEventListener("click", function () {
    // Ativar o modo de tela cheia para navegadores que suportam!
    launchFullscreen(document.documentElement); // a página inteira
    if (telaNoite.style.display == "block") {
        telaPause.style.display = "flex"
    } else {
        despausarJogo()
    }
})

document.addEventListener("fullscreenchange", function () {
    if (document.fullscreenElement) {
        console.log('O modo de tela cheia está ativado');
        if (telaNoite.style.display == "block") {
            telaPause.style.display = "flex"
        }
        telaCheia.style.display = "none"
    } else {
        console.log('O modo de tela cheia não está ativado');
        telaCheia.style.display = "flex"
        if (!jogoPausado) {
            pausarJogo()
        }
    }
})

window.addEventListener("load", jogoCarregadof)
function jogoCarregadof() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].onmousedown = function (e) {
            if (e.preventDefault) e.preventDefault();
            return false;
        }
    }
    setTimeout(() => {
        if (!document.fullscreenElement) {
            telaCheia.style.display = "flex"
        }
        telaCarregamento.style.display = "none"
        if (navigator.userAgentData != undefined && navigator.userAgentData.mobile) {
            console.log("é mobile");
            telaMobile.style.display = "flex"
        } else {
            console.log("não é mobile");
            aviso.style.display = "flex"
        }
    }, 1000);
}

ok.addEventListener("click", iniciaJogo)
function iniciaJogo() {
    aviso.style.display = "none"
    conteudo.style.display = "block"

    setTimeout(() => {
        voltarTelaIni()
    }, 1);
}

modelViewerImg.addEventListener("click", clickFofao)
fucinhoDiv.addEventListener("click", clickFofao)
fucinhoDiv.addEventListener("click", aparecerConfete)
fucinhoDiv.addEventListener("click", aparecerModelViewer)
function clickFofao() {
    fucinho.load()
    fucinho.play()
}

function aparecerConfete() {
    fucinhoDiv.removeEventListener("click", aparecerConfete)
    //confete.style.display = "block"
    confete = document.createElement("img")
    confete.src = "imagens/confete.gif"
    confete.id = "confete"
    document.body.appendChild(confete)
    timeoutConfete = setTimeout(() => {
        //confete.style.display = "none"
        document.body.removeChild(confete)
        fucinhoDiv.addEventListener("click", aparecerConfete)
    }, 4000);
}

function aparecerModelViewer() {
    modelViewer = document.createElement("model-viewer")
    telaInicial.appendChild(modelViewer)
    modelViewer.src = "../../outros/logomwdt.glb"
    modelViewer.cameraOrbit = "1.554433865057452rad 1.5135277107138336rad 3.2000531144371713m"
    modelViewer.minFieldOfView = "50deg"

    modelViewer.style.display = "block"
    modelViewerDiv.style.display = "block"
    xModelViewer.style.display = "block"
    
    if (!pelucia) {
        pelucia = true
        setTimeout(() => {
            modelViewerAlert.style.display = "block"
            modelViewerAlert.style.animation = "aparecer-alerta 5s linear"
            setTimeout(() => {
                modelViewerAlert.style.display = "none"
            }, 5000);
        }, 2000);
    }

    modelViewer.addEventListener("load", function () {
        modelViewer.autoRotate = true
        modelViewer.interactionPromptStyle = "basic"
        modelViewer.rotationPerSecond = "45deg"
        modelViewer.cameraControls = true
        modelViewer.disablePan = true
        modelViewer.disableZoom = true
    })
}

xModelViewer.addEventListener("click", function () {
    modelViewer.style.display = "none"
    modelViewerDiv.style.display = "none"
    this.style.display = "none"
    telaInicial.removeChild(modelViewer)
})


function voltarTelaIni() {

    cam9.style.display = "none"

    noitesAtivas = document.querySelectorAll(".noites.active")
    for (let i = 0; i < noitesAtivas.length; i++) {
        noitesAtivas[i].style.pointerEvents = "all"
    }

    balloonBoyImg.style.transform = `translateX(${0}%)`

    configAudio()

    // Vídeo tela inicial
    telaInicialVideo.style.display = "block"
    telaInicialVideo.play()

    // Áudio tela inicial
    musicaUcn.play()
    chiado.play()

    for (let i = 0; i < videoCam.length; i++) {
        videoCam[i].style.display = "none"
        videoCam[i].style.transform = `translate(0px, 0px) scale(1)`;
    }
    inputZoom.value = 50

    primeiraVezCam = true

    btnMusicBox.style.backgroundColor = "#444"

    telaInicial.style.display = "block"
    telaNoite.style.display = "none"

    telaPause.style.display = "none"
    controles.style.display = "none"
    btnMute.style.display = "block"

    videoVitoria.style.display = "none"
    vitoriaImg.style.display = "none"

    telaGameOver.style.display = "none"
    gameOverP.style.display = "none"

    btnVoltarVGm.style.display = "none"

    telaBalloonBoy.style.display = "none"
    divBalloonBoy.style.display = "none"

    jornalImg.style.opacity = 0

    p12.style.display = "block"

    for (let i = 0; i < videoVisao.length; i++) {
        videoVisao[i].style.display = "none"
    }
    videoVisaoNinguem.style.display = "block"

    reiniciaVariaveis()

    if (luzAcesa == true) {
        acenderApagarLuz()
    }

    if (camera == true) {
        abrindoFechandoCamera()
    }

    if (mascara == true) {
        colocandoTirandoMascara()
    }


    limparIntervalos()
}

function configAudio() {
    for (let i = 0; i < audioGeral.length; i++) {
        audioGeral[i].pause()
        audioGeral[i].currentTime = 0
        audioGeral[i].volume = 0.25
    }

    for (let i = 0; i < audioTelaInicial.length; i++) {
        audioTelaInicial[i].volume = 0.125
    }
    somAmbiente2.volume = 0.5

    manha6.volume = 0.25

    ventilador.volume = 0.125
    somAmbiente.volume = 0.125
    colocandoMascara.volume = 0.125
    tirandoMascara.volume = 0.125
    respirando.volume = 0.125
    abrirFecharCamera.volume = 0.125
    vitoria.volume = 0.125
    gritoFoxy.volume = 0.125
    movendoCamera.volume = 0.125
    ruidoMovCam.volume = 0.125

    carrossel.volume = 0.125
}

noites.forEach((n) => {
    n.addEventListener("mouseenter", function () {
        mudandoCamera.play()
    });
    n.addEventListener("click", function () {
        mudandoCamera.play()
    });
});

function defineNoite(numNoite) {
    noite = numNoite
    console.log("noite: " + noite)
    if (noite == 0) {
        noite = 1
        defineNoite(1)
        for (let i = 1; i < noites.length; i++) {
            if (i != 6) {
                noites[i].classList.remove("active")
            }
        }
    } else {
        for (let i = 0; i < pNoite.length; i++) {
            pNoite[i].innerHTML = `${noite}<sup>a</sup> Noite`
        }
        for (let i = 0; i < noites.length; i++) {
            noites[i].style.pointerEvents = "none"
        }
        setTimeout(() => {
            iniciaNoite()
        }, 1000);
    }
}

function iniciaNoite() {
    for (let i = 0; i < audioTelaInicial.length; i++) {
        audioTelaInicial[i].pause()
        audioTelaInicial[i].currentTime = 0
    }
    telaInicial.style.display = "none"
    telaInicialVideo.style.display = "none"
    telaNoite.style.display = "block"

    if (jogoPausado == false) {
        if (noite == 1) {
            telaJornal.style.display = "flex"
            setTimeout(() => {
                jornalImg.style.opacity = 1
                jornalImg.style.transform = "scale(1.01)"
            }, 1);
            setTimeout(() => {
                jornalImg.style.opacity = 0
                setTimeout(() => {
                    telaJornal.style.display = "none"
                    mudandoCamera.play()
                    videoChiadoCam.style.display = "block"
                    videoChiadoCam.play()
                    setTimeout(() => {
                        videoChiadoCam.style.display = "none"
                        telaTransicaoNoite.style.display = "flex"
                    }, 250);

                    setTimeout(() => {
                        reiniciaValoresNoite()
                        jornalImg.style.transform = "scale(1)"
                    }, 4000);
                }, 3000);
            }, 7000);

            setTimeout(() => {
                jornalImg.style.transform = "scale(1.02)"
            }, 3000);
            setTimeout(() => {
                jornalImg.style.transform = "scale(1.03)"
            }, 6000);
        } else {
            mudandoCamera.play()
            videoChiadoCam.style.display = "block"
            videoChiadoCam.play()
            setTimeout(() => {
                videoChiadoCam.style.display = "none"
                telaTransicaoNoite.style.display = "flex"
            }, 250);
            setTimeout(() => {
                reiniciaValoresNoite()
            }, 4000);
        }
    }

    if (noite == 5) {
        gritoNoite5.play()
        cam9.style.display = "block"
    }

    if (pelucia) {
        modelViewerImg.style.display = "block"
    }

    console.clear();

    defineTutorial()
    gerenciaNoite()
    setTimeout(() => {
        defineVideoVisao()
    }, 100);
}

function reiniciaValoresNoite() {
    telaTransicaoNoite.style.display = "none"
    controles.style.display = "block"

    atualizaBarras()

    if (noite == 5) {
        somAmbiente2.play()
    } else {
        somAmbiente.play()
    }
    ventilador.play()
    telefone.play()

    tempoRestanteHoras = tmpHoras
    tempoRestanteTotalHoras = tmpTotalHoras
    iniciarHoras()
    iniciarTotalHoras()
    iniciarBateria()
}

function reiniciaVariaveis() {
    horario = 12
    relogio.innerHTML = `${horario} AM`
    uso = 1
    bateria = 100
    bateriaP.innerHTML = `Bateria: ${bateria}%`

    passosFoxy = 0
    passosPuppet = 0
    passosChica = 0
    passosFofao = 0
    passosBalloonBoy = 0

    chiadoContagem = 0
    puppetContagem = 0

    balloonBoyTransform = 0

    sorteioSusto1 = sorteioSusto2 = sorteioSusto3 = sorteioSusto4 = sorteioSusto5 = sorteioSusto6 = undefined

    jogoPausado = false
    jogoPausadoTotalHoras = false
    jogoPausadoHoras = false
    ataquePausado = false
    mascaraPausada = false
    chicaPausada = false
    foxyPausado = false
    fofaoPausado = false
    balloonBoyPausado = false

    botoesBloqueados = false
    botoesBloqueadosPuppet = false
    venceu = false
    primeiraVezCam = true

    mouseUpFired = false;
    mouseDownFired = false;
    mouseDownInsideButton = false;

    alguemAtacou = false
    apareceuPortaTocou = false
    ataquePuppet = false
    ataqueChica = false
    ataqueFoxy = false
    ataqueFofao = false
    ataqueBalloonBoy = false

    angle = 360
    pie.endAngle(angle * (Math.PI / 180)); // Atualiza o ângulo final da fatia
    path = path.data(pie(data)); // Vincula os novos dados ao caminho
    path.attr("d", arc); // Redesenha o caminho com os novos dados

    videos = {
        'cameras1': Array.from(document.querySelectorAll('.cameras1')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
        'cameras2': Array.from(document.querySelectorAll('.cameras2')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
        'cameras3': Array.from(document.querySelectorAll('.cameras3')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
        'cameras4': Array.from(document.querySelectorAll('.cameras4')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
        'cameras5': Array.from(document.querySelectorAll('.cameras5')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
        'cameras6': Array.from(document.querySelectorAll('.cameras6')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
        'cameras7': Array.from(document.querySelectorAll('.cameras7')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
        'cameras8': Array.from(document.querySelectorAll('.cameras8')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
        'cameras9': Array.from(document.querySelectorAll('.cameras9')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 }))
    };
    keys = {};
    inputValues = {
        'cameras1': 50,
        'cameras2': 50,
        'cameras3': 50,
        'cameras4': 50,
        'cameras5': 50,
        'cameras6': 50,
        'cameras7': 50,
        'cameras8': 50,
        'cameras9': 50
    };
}

function defineVideoVisao() {
    videoVisaoNinguem.style.display = "block"
    for (let i = 0; i < videoVisao.length; i++) {
        videoVisao[i].currentTime = videoVisao[i].duration / 2
        novoCurrentTime = videoVisao[i].duration / 2
    }
}

function defineTutorial() {
    if (noite == 1) {
        for (let i = 0; i < elementosTutorial.length; i++) {
            elementosTutorial[i].style.opacity = 1
        }
    } else {
        for (let i = 0; i < elementosTutorial.length; i++) {
            elementosTutorial[i].style.opacity = 0
        }
    }
}

function gerenciaNoite() {
    if (noite == 1) {
        tmpEsperaAtaque = 15000
        tempoRestanteEsperaAtaque = tmpEsperaAtaque

        tmpEsperaMascara = 7500
        tempoRestanteEsperaMascara = tmpEsperaMascara

        tmpBateria = 7000

        tmpChica = 60000
        tempoRestanteChica = tmpChica
        chicaAtiva = true
        iniciarChica()

    } else if (noite == 2) {
        tmpEsperaAtaque = 12500
        tempoRestanteEsperaAtaque = tmpEsperaAtaque

        tmpEsperaMascara = 5000
        tempoRestanteEsperaMascara = tmpEsperaMascara

        tmpBateria = 6500
        tmpMusicBox = 1000

        tmpChica = 25000
        tempoRestanteChica = tmpChica
        chicaAtiva = true
        iniciarChica()

        puppetAtiva = true
        puppet()

    } else if (noite == 3) {
        tmpEsperaAtaque = 10000
        tempoRestanteEsperaAtaque = tmpEsperaAtaque

        tmpEsperaMascara = 7500
        tempoRestanteEsperaMascara = tmpEsperaMascara

        tmpBateria = 6000
        tmpMusicBox = 1250

        tmpChica = 20000
        tempoRestanteChica = tmpChica
        chicaAtiva = true
        iniciarChica()

        puppetAtiva = true
        puppet()

        tmpFoxy = 25000
        tempoRestanteFoxy = tmpFoxy
        foxyAtivo = true
        iniciarFoxy()

    } else if (noite == 4) {
        tmpEsperaAtaque = 7500
        tempoRestanteEsperaAtaque = tmpEsperaAtaque

        tmpEsperaMascara = 10000
        tempoRestanteEsperaMascara = tmpEsperaMascara

        tmpBateria = 6500
        tmpMusicBox = 1000

        tmpChica = 10000
        tempoRestanteChica = tmpChica
        chicaAtiva = true
        iniciarChica()

        puppetAtiva = true
        puppet()

        tmpFoxy = 15000
        tempoRestanteFoxy = tmpFoxy
        foxyAtivo = true
        iniciarFoxy()

        tmpFofao = 20000
        tempoRestanteFofao = tmpFofao
        fofaoAtivo = true
        iniciarFofao()
        sortearSustoFofao()

    } else if (noite == 5) {
        tmpEsperaAtaque = 7500
        tempoRestanteEsperaAtaque = tmpEsperaAtaque

        tmpEsperaMascara = 7000
        tempoRestanteEsperaMascara = tmpEsperaMascara

        tmpBateria = 8500
        tmpMusicBox = 1000

        tmpChica = 5750
        tempoRestanteChica = tmpChica
        chicaAtiva = true
        iniciarChica()

        puppetAtiva = true
        puppet()

        tmpFoxy = 6000
        tempoRestanteFoxy = tmpFoxy
        foxyAtivo = true
        iniciarFoxy()

        tmpFofao = 6250
        tempoRestanteFofao = tmpFofao
        fofaoAtivo = true
        iniciarFofao()
        sortearSustoFofao()

        tmpBalloonBoy = 6500
        tempoRestanteBalloonBoy = tmpBalloonBoy
        balloonBoyAtivo = true
        iniciarBalloonBoy()

    }
}

function pausarJogo() {
    jogoPausado = true
    audiosTocando = []; // Limpa o array
    videosRodando = []; // Limpa o array
    for (let i = 0; i < videoGeral.length; i++) {
        if (!videoGeral[i].paused) {
            videosRodando.push(i); // Armazena o índice do vídeo que estava tocando
            videoGeral[i].pause();
        }
    }
    for (let i = 0; i < audioGeral.length; i++) {
        if (!audioGeral[i].paused) {
            audiosTocando.push(i); // Armazena o índice do áudio que estava tocando
            audioGeral[i].pause();
        }
    }
    pausarHoras()
    pausarTotalHoras()
    pausarChica()
    pausarFofao()
    pausarFoxy()
    pausarBalloonBoy()
    if (alguemAtacou == true) {
        pausarEsperaAtaque()
        if (primeiraVezMasc == false) {
            pausarEsperaMascara()
        }
    }
    clearInterval(bateriaInterval)
    clearInterval(intervaloPuppet);
    clearInterval(sustoInterval)
    clearInterval(alarmeDelay)
}

function despausarJogo() {
    jogoPausado = false
    if (telaNoite.style.display == "block") {
        retomarHoras()
        retomarTotalHoras()
        iniciarBateria()
        if (alguemAtacou == true) {
            if (mascara == false) {
                retomarEsperaAtaque()
            }
            if (primeiraVezMasc == false) {
                if (mascara == true) {
                    retomarEsperaMascara()
                }
            }
        }
        if (chicaAtiva == true) {
            retomarChica()
        }
        if (puppetAtiva == true) {
            intervaloPuppet = setInterval(decreaseAngle, tmpMusicBox);
        }
        if (foxyAtivo == true) {
            retomarFoxy()
        }
        if (fofaoAtivo == true) {
            retomarFofao()
        }
        if (balloonBoyAtivo == true) {
            retomarBalloonBoy()
        }
    }
    for (let i of videosRodando) {
        videoGeral[i].play()
    }
    for (let i of audiosTocando) {
        audioGeral[i].play()
    }
}