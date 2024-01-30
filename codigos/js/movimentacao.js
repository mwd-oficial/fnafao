function tocarAlarme() {
    alarme.currentTime = 0
    alarmeDelay = setTimeout(() => {
        alarme.play()
        clearInterval(alarmeDelay)
    }, 100);
}

// Puppet

var width = 75,
    height = 75,
    radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal()
    .range(["#ffffff", "transparent"]);

var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var pie = d3.pie()
    .sort(null)
    .startAngle(0)
    .endAngle(2 * Math.PI); // Início com um círculo completo

var svg = d3.select("#chart")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var data = [1]; // Isso representa uma única fatia.

var g = svg.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

var path = g.append("path")
    .attr("d", arc)
    .style("fill", function (d) { return color(d.data); });


function puppet() {
    btnMusicBox.addEventListener("mouseleave", leavePuppet)
    angle = 360
    btnMusicBox.style.pointerEvents = "all"
    intervaloPuppet = setInterval(decreaseAngle, tmpMusicBox)
}

function decreaseAngle() {
    if (angle <= 0) {
        clearInterval(intervaloPuppet);
        btnMusicBox.style.pointerEvents = "none"
        alerta.style.display = "none"
        alertaCam.style.display = "none"
        gameOverPuppetf()
    } else {
        if (angle <= 180) {
            if (passosPuppet == 0) {
                passosPuppet = 1
                if (numCam == 4) {
                    movimentacao(4)
                } else if (numCam == 5) {
                    movimentacao(5)
                }
            }
        } else {
            if (passosPuppet == 1) {
                passosPuppet = 0
                if (numCam == 4) {
                    movimentacao(4)
                } else if (numCam == 5) {
                    movimentacao(5)
                }
            }
        }
        if (angle <= 90) {
            alerta.style.display = "block"
            alertaCam.style.display = "block"
            alarme.play()
            alarme.addEventListener("ended", tocarAlarme)
        } else {
            alerta.style.display = "none"
            alertaCam.style.display = "none"
            alarme.pause()
            alarme.removeEventListener("ended", tocarAlarme)
        }
        angle -= 10
        pie.endAngle(angle * (Math.PI / 180)); // Atualiza o ângulo final da fatia
        path = path.data(pie(data)); // Vincula os novos dados ao caminho
        path.attr("d", arc); // Redesenha o caminho com os novos dados
    }
}

btnMusicBox.addEventListener("mousedown", function () {
    mouseDownInsideButton = true;
    adicionarAngulo()
})
btnMusicBox.addEventListener("touchstart", function () {
    mouseDownInsideButton = true;
    adicionarAngulo()
})
function adicionarAngulo() {
    mouseDownFired = true;
    mouseUpFired = false;
    btnMusicBox.style.backgroundColor = "#0f0"
    manivela.play()
    clearInterval(intervaloPuppet); // Limpa o intervalo que remove ângulos quando o botão é pressionado
    holdIntervalPuppet = setInterval(function () {
        if (angle >= 360) {
            clearInterval(holdIntervalPuppet);
        } else {
            angle += 10;
            pie.endAngle(angle * (Math.PI / 180)); // Adiciona 2 graus ao ângulo final da fatia
            path = path.data(pie(data)); // Vincula os novos dados ao caminho
            path.attr("d", arc); // Redesenha o caminho com os novos dados
        }
    }, tmpMusicBox / 4); // Ajuste este valor para alterar a velocidade da animação
}


btnMusicBox.addEventListener("mouseup", function () {
    if (mouseDownInsideButton) {
        musicboxup();
    }
    mouseDownInsideButton = false;
})
btnMusicBox.addEventListener("touchend", function () {
    if (mouseDownInsideButton) {
        musicboxup();
    }
    mouseDownInsideButton = false;
})
function musicboxup() {
    mouseDownFired = false;
    mouseUpFired = true;
    removerAngulo.call(this);
}

btnMusicBox.addEventListener("mouseleave", leavePuppet)
function leavePuppet() {
    mouseDownInsideButton = false;
    if (mouseDownFired && !mouseUpFired) {
        console.log(`mouseDownFired: ${mouseDownFired}, mouseUpFired: ${mouseUpFired}`)
        removerAngulo.call(this);
        mouseDownFired = false;
        mouseUpFired = true;
    }
}

function removerAngulo() {
    btnMusicBox.style.backgroundColor = "#444"
    manivela.pause()
    clearInterval(holdIntervalPuppet); // Limpa o intervalo que adiciona ângulos quando o botão é solto
    intervaloPuppet = setInterval(decreaseAngle, tmpMusicBox); // Reinicia o intervalo que remove ângulos
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Chica

function chica() {
    sorteio = Math.round(Math.random() * 4)
    console.log("sorteio chica: " + sorteio)
    if (sorteio == 0) {
        if (passosChica <= 0) {
            passosChica = 0
        } else {
            passosChica--
            console.log("passosChica: " + passosChica)
        }
    } else if (sorteio == 1) {
        // Ficar onde está
    } else {
        if (passosChica >= 2) {
            if (passosChica === 2 && passosFofao !== 2 && passosPuppet !== 2 && passosFoxy !== 3 && passosBalloonBoy !== 1) {
                console.log("chica atacou")
                passosChica++
                console.log("passosChica: " + passosChica)
                ataque()
            } else {
                passosChica = 2
            }
        } else {
            passosChica++
            console.log("passosChica: " + passosChica)
        }
    }

    if ((passosChica == 0 && sorteio > 1) || (passosChica == 1 && sorteio != 1)) {
        if (numCam == 7) {
            movimentacao(7)
        }
    }
    if ((passosChica == 0 && sorteio != 1) || (passosChica == 1 && sorteio != 1) || (passosChica == 2 && sorteio != 1)) {
        if (numCam == 1) {
            movimentacao(1)
        }
    }
    if ((passosChica == 1 && sorteio != 1) || (passosChica == 2 && sorteio != 1) || passosChica == 3) {
        if (numCam == 2) {
            movimentacao(2)
        }
    }


    tempoRestanteChica = tmpChica // Reset the remaining time after the function is executed
    clearInterval(chicaId);
    if (ataqueChica == false) {
        iniciarChica()
    }
}

function iniciarChica() {
    if (jogoPausado == false) {
        console.log("tempoRestanteChica: " + tempoRestanteChica)
        inicioChica = Date.now();
        chicaId = setInterval(chica, tempoRestanteChica);
    }
}

function pausarChica() {
    clearInterval(chicaId);
    tempoRestanteChica -= Date.now() - inicioChica;
    chicaPausada = true;
}

function retomarChica() {
    if (chicaPausada) {
        iniciarChica();
        chicaPausada = false;
    }
}

function alterarVideoVisaoChica() {
    if (luzAcesa == true && ataqueChica == true) {
        if (apareceuPortaTocou == false && videoVisaoNinguem.currentTime <= (videoVisaoNinguem.duration / 2) && camera == false) {
            apareceuPorta.play()
            apareceuPortaTocou = true
        }
        if (videoVisaoNinguem.currentTime <= (videoVisaoNinguem.duration / 2)) {
            videoVisaoChica.style.display = "block"
            videoVisaoNinguem.style.display = "none"
        }
    } else {
        videoVisaoChica.style.display = "none"
        videoVisaoNinguem.style.display = "block"
    }
}

function sumirChica() {
    console.log("Chica sumiu")
    passosChica = 0
    ataqueChica = false
    iniciarChica()
    sumirAnimatronic()
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Fofao

function fofao() {
    sorteio = Math.round(Math.random() * 4)
    console.log("sorteio fofão: " + sorteio)
    if (sorteio == 0) {
        if (passosFofao <= 0) {
            passosFofao = 0
        } else {
            passosFofao--
            console.log("passosFofao: " + passosFofao)
        }
    } else if (sorteio == 1) {
        // Ficar onde está
    } else {
        if (passosFofao >= 1) {
            if (passosChica !== 3 && passosFofao === 1 && passosPuppet !== 2 && passosFoxy !== 3 && passosBalloonBoy !== 1) {
                console.log("Fofao atacou")
                passosFofao++
                console.log("passosFofao: " + passosFofao)
                ataque()
            } else {
                passosFofao = 1
            }
        } else {
            passosFofao++
            console.log("passosFofao: " + passosFofao)
            if (passosFofao == 1) {
                gritoFofao.play()
            }
        }
    }

    if ((passosFofao == 0 && sorteio > 1) || (passosFofao == 1 && sorteio != 1)) {
        if (numCam == 7) {
            movimentacao(7)
        }
    }
    if ((passosFofao == 0 && sorteio != 1) || (passosFofao == 1 && sorteio != 1) || (passosFofao == 2 && sorteio != 1)) {
        if (numCam == 6) {
            movimentacao(6)
        }
    }



    tempoRestanteFofao = tmpFofao // Reset the remaining time after the function is executed
    clearInterval(fofaoId);
    if (ataqueFofao == false) {
        iniciarFofao()
    }
}

function iniciarFofao() {
    if (jogoPausado == false) {
        console.log("tempoRestanteFofao: " + tempoRestanteFofao)
        inicioFofao = Date.now();
        fofaoId = setInterval(fofao, tempoRestanteFofao);
    }
}

function pausarFofao() {
    clearInterval(fofaoId)
    tempoRestanteFofao -= Date.now() - inicioFofao;
    fofaoPausado = true;
}

function retomarFofao() {
    if (fofaoPausado) {
        iniciarFofao();
        fofaoPausado = false;
    }
}

function alterarVideoVisaoFofao() {
    if (luzAcesa == true && ataqueFofao == true) {
        if (apareceuPortaTocou == false && videoVisaoNinguem.currentTime >= (videoVisaoNinguem.duration / 2) && camera == false) {
            apareceuPorta.play()
            apareceuPortaTocou = true
        }
        if (videoVisaoNinguem.currentTime >= (videoVisaoNinguem.duration / 2)) {
            videoVisaoFofao.style.display = "block"
            videoVisaoNinguem.style.display = "none"
        }
    } else {
        videoVisaoFofao.style.display = "none"
        videoVisaoNinguem.style.display = "block"
    }
}

function sumirFofao() {
    console.log("Fofao sumiu")
    passosFofao = 0
    ataqueFofao = false
    iniciarFofao()
    sumirAnimatronic()
}

function sortearSustoFofao() {
    if (fofaoAtivo == true) {
        sorteioSusto1 = Math.round(Math.random() * 360)
        sorteioSusto2 = Math.round(Math.random() * 360)
        sorteioSusto3 = Math.round(Math.random() * 360)
        if (noite == 5) {
            sorteioSusto4 = Math.round(Math.random() * 360)
            sorteioSusto5 = Math.round(Math.random() * 360)
            sorteioSusto6 = Math.round(Math.random() * 360)
        }
        console.log(`sorteioSusto1: ${sorteioSusto1}, sorteioSusto2: ${sorteioSusto2}, sorteioSusto3: ${sorteioSusto3}, sorteioSusto3: ${sorteioSusto3}, sorteioSusto4: ${sorteioSusto4}, sorteioSusto5: ${sorteioSusto5}, sorteioSusto6: ${sorteioSusto6}`)
    }
}

function sustoFofao() {
    if (venceu == false) {
        if (tempoTotal == sorteioSusto1 || tempoTotal == sorteioSusto2 || tempoTotal == sorteioSusto3 || tempoTotal == sorteioSusto4 || tempoTotal == sorteioSusto5 || tempoTotal == sorteioSusto6) {
            souEuContagem = 0
            sustoInterval = setInterval(() => {
                if (souEuContagem < 3) {
                    souEu.style.display = "block"
                    souEu.play()
                    setTimeout(() => {
                        souEu.style.display = "none"
                        souEu.pause()
                        souEu.currentTime = 0
                    }, ((tmpSusto / 2) / 3) * 2);
                    souEuContagem++
                } else {
                    clearInterval(sustoInterval)
                }
            }, (tmpSusto / 3) * 2);
        }
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Foxy

function foxy() {
    sorteio = Math.round(Math.random() * 2)
    console.log("sorteio foxy: " + sorteio)
    if (sorteio >= 1) {
        if (passosFoxy >= 2) {
            if (passosChica !== 3 && passosFofao !== 2 && passosPuppet !== 2 && passosFoxy === 2 && passosBalloonBoy !== 1) {
                console.log("Foxy atacou")
                passosFoxy++
                console.log("passosFoxy: " + passosFoxy)
                ataque()
            } else {
                passosFoxy = 2
            }
        } else {
            passosFoxy++
            console.log("passosFoxy: " + passosFoxy)
            if (passosFoxy == 1) {
                gritoFoxy.play()
            }
        }
    }

    if (sorteio != 0) {
        if (numCam == 8) {
            movimentacao(8)
        }
        if (passosFoxy == 3) {
            if (numCam == 3) {
                movimentacao(3)
            }
        }
    }


    tempoRestanteFoxy = tmpFoxy // Reset the remaining time after the function is executed
    clearInterval(foxyId);
    if (ataqueFoxy == false) {
        iniciarFoxy()
    }
}

function iniciarFoxy() {
    if (jogoPausado == false) {
        console.log("tempoRestanteFoxy: " + tempoRestanteFoxy)
        inicioFoxy = Date.now();
        foxyId = setInterval(foxy, tempoRestanteFoxy);
    }
}

function pausarFoxy() {
    clearInterval(foxyId)
    tempoRestanteFoxy -= Date.now() - inicioFoxy;
    foxyPausado = true;
}

function retomarFoxy() {
    if (foxyPausado) {
        iniciarFoxy();
        foxyPausado = false;
    }
}

function sumirFoxy() {
    console.log("Foxy sumiu")
    batidas.play()
    passosFoxy = 0
    ataqueFoxy = false
    iniciarFoxy()
    sumirAnimatronic()
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Balloon Boy


function balloonBoy() {
    sorteio = Math.round(Math.random() * 1)
    console.log("sorteio balloon boy: " + sorteio)
    if (sorteio == 1) {
        if (passosChica !== 3 && passosFofao !== 2 && passosPuppet !== 2 && passosFoxy !== 3 && passosBalloonBoy === 0) {
            console.log("balloon boy atacou")
            passosBalloonBoy++
            console.log("passosBalloonBoy: " + passosBalloonBoy)
            ataque()
        }
    } else {
        sorteioFalaBalloonBoy = Math.round(Math.random() * 2)
        if (sorteioFalaBalloonBoy == 0) {
            hi.play()
        } else if (sorteioFalaBalloonBoy == 1) {
            hello.play()
        } else if (sorteioFalaBalloonBoy == 2) {
            risada.play()
        }
    }

    tempoRestanteBalloonBoy = tmpBalloonBoy // Reset the remaining time after the function is executed
    clearInterval(balloonBoyId);
    if (ataqueBalloonBoy == false) {
        iniciarBalloonBoy()
    }
}

function iniciarBalloonBoy() {
    if (jogoPausado == false) {
        console.log("tempoRestanteBalloonBoy: " + tempoRestanteBalloonBoy)
        inicioBalloonBoy = Date.now();
        balloonBoyId = setInterval(balloonBoy, tempoRestanteBalloonBoy);
    }
}

function pausarBalloonBoy() {
    clearInterval(balloonBoyId)
    tempoRestanteBalloonBoy -= Date.now() - inicioBalloonBoy;
    balloonBoyPausado = true;
}

function retomarBalloonBoy() {
    if (balloonBoyPausado) {
        iniciarBalloonBoy();
        balloonBoyPausado = false;
    }
}

function alterarVideoVisaoBalloonBoy() {
    telaBalloonBoy.style.display = "block"
    divBalloonBoy.style.display = "flex"
    zumbido.play()
    risadaLoop.play()
}

function sumirBalloonBoy() {
    console.log("BalloonBoy sumiu")
    passosBalloonBoy = 0
    ataqueBalloonBoy = false

    telaBalloonBoy.style.display = "none"
    divBalloonBoy.style.display = "none"

    zumbido.pause()
    zumbido.currentTime = 0
    risadaLoop.pause()
    risadaLoop.currentTime = 0

    iniciarBalloonBoy()
    sumirAnimatronic()
}