btnPause.addEventListener("click", function () {
    if (botoesBloqueados == false) {
        telaPause.style.display = "flex"
        pausarJogo()
    }
})
btnClosePause.addEventListener("click", function () {
    if (botoesBloqueados == false) {
        telaPause.style.display = "none"
        despausarJogo()
    }
})

btnVoltarTelaInicial.forEach(function (btn) {
    btn.addEventListener("click", voltarTelaIni)
});

btnParaBloquear.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (botoesBloqueados == true) {
            btnBloqueado.play()
        }
    })
})
btnParaBloquearPuppet.forEach(function (btn) {
    btn.addEventListener("click", function () {
        if (botoesBloqueadosPuppet == true) {
            btnBloqueado.play()
        }
    })
})

btnLeftLeftLeft.addEventListener("mouseenter", function () {
    velBtnLR = 75
    voltar()
});
btnLeftLeft.addEventListener("mouseenter", function () {
    velBtnLR = 125
    voltar()
});
function voltar() {
    if (botoesBloqueadosPuppet == false) {
        intervaloRight = setInterval(function () {
            if (videoVisaoNinguem.style.display == "block") {
                if (videoVisaoNinguem.currentTime >= 0) {
                    videoVisaoNinguem.currentTime -= 0.125;
                    novoCurrentTime = videoVisaoNinguem.currentTime
                    if ((videoVisaoNinguem.currentTime <= (videoVisaoNinguem.duration / 2)) && ataqueChica == true) {
                        videoVisaoChica.currentTime = novoCurrentTime
                        setTimeout(() => {
                            videoVisaoFofao.style.display = "none"
                            alterarVideoVisaoChica()
                        }, 10);
                    }
                    if ((videoVisaoNinguem.currentTime >= (videoVisaoNinguem.duration / 2)) && ataqueFofao == true) {
                        videoVisaoFofao.currentTime = novoCurrentTime
                        setTimeout(() => {
                            videoVisaoChica.style.display = "none"
                            alterarVideoVisaoFofao()
                        }, 10);
                    }
                }
            }
            if (videoVisaoPuppet.style.display == "block") {
                if (videoVisaoPuppet.currentTime >= 0) {
                    videoVisaoPuppet.currentTime -= 0.125;
                    novoCurrentTime = videoVisaoPuppet.currentTime
                }
            }
            if (videoVisaoChica.style.display == "block") {
                if (videoVisaoChica.currentTime >= 0) {
                    videoVisaoChica.currentTime -= 0.125;
                    novoCurrentTime = videoVisaoChica.currentTime
                    if ((videoVisaoChica.currentTime >= (videoVisaoChica.duration / 2)) && ataqueChica == true) {
                        videoVisaoNinguem.currentTime = novoCurrentTime
                        setTimeout(() => {
                            videoVisaoFofao.style.display = "none"
                            videoVisaoChica.style.display = "none"
                            videoVisaoNinguem.style.display = "block"
                        }, 10);
                    }
                }
            }
            if (videoVisaoFofao.style.display == "block") {
                if (videoVisaoFofao.currentTime >= 0) {
                    videoVisaoFofao.currentTime -= 0.125;
                    novoCurrentTime = videoVisaoFofao.currentTime
                    if ((videoVisaoFofao.currentTime <= (videoVisaoFofao.duration / 2)) && ataqueFofao == true) {
                        videoVisaoNinguem.currentTime = novoCurrentTime
                        setTimeout(() => {
                            videoVisaoChica.style.display = "none"
                            videoVisaoFofao.style.display = "none"
                            videoVisaoNinguem.style.display = "block"
                        }, 10);
                    }
                }
            }

            if (balloonBoyAtivo == true) {
                if (balloonBoyTransform >= 100) {
                    balloonBoyTransform = 100
                } else {
                    balloonBoyTransform += 10
                    balloonBoyImg.style.transform = `translateX(${balloonBoyTransform}%)`
                }
            }
        }, velBtnLR);
    }
}
btnRightRight.addEventListener("mouseenter", function () {
    velBtnLR = 125
    avancar()
});
btnRightRightRight.addEventListener("mouseenter", function () {
    velBtnLR = 75
    avancar()
});
function avancar() {
    if (botoesBloqueadosPuppet == false) {
        intervaloLeft = setInterval(function () {
            if (videoVisaoNinguem.style.display == "block") {
                if (videoVisaoNinguem.currentTime >= 0) {
                    videoVisaoNinguem.currentTime += 0.125;
                    novoCurrentTime = videoVisaoNinguem.currentTime
                    if ((videoVisaoNinguem.currentTime <= (videoVisaoNinguem.duration / 2)) && ataqueChica == true) {
                        videoVisaoChica.currentTime = novoCurrentTime
                        setTimeout(() => {
                            videoVisaoFofao.style.display = "none"
                            alterarVideoVisaoChica()
                        }, 10);
                    }
                    if ((videoVisaoNinguem.currentTime >= (videoVisaoNinguem.duration / 2)) && ataqueFofao == true) {
                        videoVisaoFofao.currentTime = novoCurrentTime
                        setTimeout(() => {
                            videoVisaoChica.style.display = "none"
                            alterarVideoVisaoFofao()
                        }, 10);
                    }
                }
            }
            if (videoVisaoPuppet.style.display == "block") {
                if (videoVisaoPuppet.currentTime >= 0) {
                    videoVisaoPuppet.currentTime += 0.125;
                    novoCurrentTime = videoVisaoPuppet.currentTime
                }
            }
            if (videoVisaoChica.style.display == "block") {
                if (videoVisaoChica.currentTime >= 0) {
                    videoVisaoChica.currentTime += 0.125;
                    novoCurrentTime = videoVisaoChica.currentTime
                    if ((videoVisaoChica.currentTime >= (videoVisaoChica.duration / 2)) && ataqueChica == true) {
                        videoVisaoNinguem.currentTime = novoCurrentTime
                        setTimeout(() => {
                            videoVisaoChica.style.display = "none"
                            videoVisaoFofao.style.display = "none"
                            videoVisaoNinguem.style.display = "block"
                        }, 10);
                    }
                }
            }
            if (videoVisaoFofao.style.display == "block") {
                if (videoVisaoFofao.currentTime >= 0) {
                    videoVisaoFofao.currentTime += 0.125;
                    novoCurrentTime = videoVisaoFofao.currentTime
                    if ((videoVisaoFofao.currentTime <= (videoVisaoFofao.duration / 2)) && ataqueFofao == true) {
                        videoVisaoNinguem.currentTime = novoCurrentTime
                        setTimeout(() => {
                            videoVisaoChica.style.display = "none"
                            videoVisaoFofao.style.display = "none"
                            videoVisaoNinguem.style.display = "block"
                        }, 10);
                    }
                }
            }

            if (balloonBoyAtivo == true) {
                if (balloonBoyTransform <= -100) {
                    balloonBoyTransform = -100
                } else {
                    balloonBoyTransform -= 10
                    balloonBoyImg.style.transform = `translateX(${balloonBoyTransform}%)`
                }
            }
        }, velBtnLR);
    }
}

btnLeftLeftLeft.addEventListener("mouseleave", clearVoltar);
btnLeftLeft.addEventListener("mouseleave", clearVoltar);
function clearVoltar() {
    clearInterval(intervaloRight);
    clearInterval(intervaloLeft);
    atualizaCurrentTime()
}

btnRightRight.addEventListener("mouseleave", clearAvancar);
btnRightRightRight.addEventListener("mouseleave", clearAvancar);
function clearAvancar() {
    clearInterval(intervaloRight);
    clearInterval(intervaloLeft);
    atualizaCurrentTime()
}

function atualizaCurrentTime() {
    if (ataquePuppet == true) {
        videoVisaoPuppet.currentTime = novoCurrentTime
        setTimeout(() => {
            alterarVideoVisaoPuppet()
        }, 1);
    } else {
        if (ataqueChica == true) {
            if (luzAcesa == true) {
                videoVisaoChica.currentTime = novoCurrentTime
            } else {
                videoVisaoNinguem.currentTime = novoCurrentTime
            }
            setTimeout(() => {
                videoVisaoFofao.style.display = "none"
                alterarVideoVisaoChica()
            }, 1);
        } else if (ataqueFofao == true) {
            if (luzAcesa == true) {
                videoVisaoFofao.currentTime = novoCurrentTime
            } else {
                videoVisaoNinguem.currentTime = novoCurrentTime
            }
            setTimeout(() => {
                videoVisaoChica.style.display = "none"
                alterarVideoVisaoFofao()
            }, 1);
        } else {
            videoVisaoNinguem.currentTime = novoCurrentTime
        }
    }
}



document.addEventListener("keydown", function (event) {
    if (!jogoPausado && event.code === 'Space' && !camera && !spaceLuz && telaNoite.style.display == "block") {
        spaceLuz = true
        if (luzAcesa == false) {
            clickLuz()
        }
    }
})
document.addEventListener("keyup", function (event) {
    if (event.code === 'Space') {
        spaceLuz = false
        if (luzAcesa == true) {
            clickLuz()
        }
    }
})

btnLuz.addEventListener("mousedown", function () {
    if (luzAcesa == false && spaceLuz == false) {
        clickLuz()
    }
})
btnLuz.addEventListener("mouseup", function () {
    if (luzAcesa == true && spaceLuz == false) {
        clickLuz()
    }
})
btnLuz.addEventListener("mouseleave", function () {
    if (luzAcesa == true && spaceLuz == false) {
        clickLuz()
    }
})
function clickLuz() {
    if (botoesBloqueados == false) {
        if (luzAcesa == false) {
            uso++
            atualizaBarras()
            buzzlight.play()
            acenderApagarLuz()
        } else {
            uso--
            atualizaBarras()
            buzzlight.pause()
            acenderApagarLuz()
        }
    } else {
        btnBloqueado.play()
    }
}

function acenderApagarLuz() {
    if (luzAcesa == false) {
        btnLuz.classList.add("active")
        videoVisaoNinguem.style.filter = "brightness(2)"
        luzAcesa = true
        atualizaCurrentTime()
    } else {
        btnLuz.classList.remove("active")
        videoVisaoNinguem.style.filter = "brightness(0.25)"
        luzAcesa = false
        atualizaCurrentTime()
    }

}


// mutar
telefone.addEventListener("ended", mutar)
btnMute.addEventListener("click", mutar)
function mutar() {
    telefone.pause()
    btnMute.style.display = "none"
}

function mouseSaiuMC() {
    btnMascara.removeEventListener("mouseleave", mouseSaiuMC)
    btnMascara.addEventListener("mouseenter", clickMascara)

    btnCamera.removeEventListener("mouseleave", mouseSaiuMC)
    btnCamera.addEventListener("mouseenter", clickCamera)
}

btnMascara.addEventListener("mouseenter", clickMascara)
function clickMascara() {
    btnMascara.removeEventListener("mouseenter", clickMascara)
    btnMascara.addEventListener("mouseleave", mouseSaiuMC)
    btnMascara.style.pointerEvents = "none"
    setTimeout(() => {
        if (camera == false) {
            btnMascara.style.pointerEvents = "all"
        }
    }, 1000);
    if (botoesBloqueados == false) {
        if (mascara == false) {
            uso++
            atualizaBarras()
            colocandoTirandoMascara()

            colocandoMascara.play()
            setTimeout(() => {
                respirando.play()
            }, 100);
        } else {
            uso--
            atualizaBarras()
            colocandoTirandoMascara()

            tirandoMascara.play()
            respirando.pause()
            respirando.currentTime = 0
        }
    } else {
        btnBloqueado.play()
    }
}
function colocandoTirandoMascara() {
    if (mascara == false) {
        mascaraImg.style.display = "block"
        setTimeout(() => {
            mascaraImg.style.transform = "translateY(0%) rotateX(0deg)"
        }, 1);
        btnCamera.style.pointerEvents = "none"
        btnCamera.style.opacity = 0
        divBtnLuz.style.display = "none"
        verificaMascara()
    } else {
        mascaraImg.style.transform = "translateY(-100%) rotateX(45deg)"
        setTimeout(() => {
            mascaraImg.style.display = "none"
        }, 250);
        btnCamera.style.pointerEvents = "all"
        btnCamera.style.opacity = 1
        divBtnLuz.style.display = "block"
        verificaMascara()
    }
}

function verificaMascara() {
    if (mascara == false) {
        if (alguemAtacou == true) {
            if (primeiraVezMasc == true) {
                iniciarEsperaMascara()
                primeiraVezMasc = false
            } else {
                retomarEsperaMascara()
            }
            pausarEsperaAtaque()
        }
        mascara = true
    } else {
        if (alguemAtacou == true) {
            retomarEsperaAtaque()
            pausarEsperaMascara()
        }
        mascara = false
    }
}