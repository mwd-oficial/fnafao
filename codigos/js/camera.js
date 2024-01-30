btnCamera.addEventListener("mouseenter", clickCamera)
function clickCamera() {
    btnCamera.removeEventListener("mouseenter", clickCamera)
    btnCamera.addEventListener("mouseleave", mouseSaiuMC)
    btnCamera.style.pointerEvents = "none"
    setTimeout(() => {
        if (mascara == false) {
            btnCamera.style.pointerEvents = "all"
        }
    }, 1000);
    if (botoesBloqueados == false) {
        abrirFecharCamera.play()
        if (camera == false) {
            movendoCamera.play()
            abrindoFechandoCamera()
            setTimeout(() => {

                mapaAbsolute.style.display = "block"
                btnLuzCam.style.display = "flex"
                inputZoom.style.display = "block"

                if (numCam == 4) {
                    divMusicBox.style.display = "flex"
                    musicbox.play()
                    musicbox.volume = 1
                }

                if (primeiraVezCam == true) {
                    primeiraVezCam = false
                    cam(7)
                } else {
                    cam(numCam)
                }
            }, 250);
        } else {
            movendoCamera.pause()
            movendoCamera.currentTime = 0
            abrindoFechandoCamera()
        }

    } else {
        btnBloqueado.play()
    }
}

function abrindoFechandoCamera() {

    if (camera == false) {

        if (luzAcesa == true) {
            clickLuz()
        }

        btnMascara.style.pointerEvents = "none"
        btnMascara.style.opacity = 0
        divBtnLuz.style.display = "none"
        cameraImg.style.display = "block"

        setTimeout(() => {
            cameraImg.style.transform = "translateY(0%) rotateX(0deg)"
        }, 1);
        camera = true

    } else {

        if (luzCamAcesa == true) {
            clickLuzCam()
        }

        divMusicBox.style.display = "none"
        musicbox.volume = 0

        for (let i = 0; i < videoCam.length; i++) {
            videoCam[i].style.visibility = "hidden"
        }
        btnMascara.style.pointerEvents = "all"
        btnMascara.style.opacity = 1
        divBtnLuz.style.display = "block"
        mapaAbsolute.style.display = "none"
        btnLuzCam.style.display = "none"
        inputZoom.style.display = "none"

        cameraImg.style.transform = "perspective(400px) translateY(100%) rotateX(90deg)"
        setTimeout(() => {
            cameraImg.style.display = "none"
        }, 250);
        camera = false

    }
}

function cam(nc) {
    mudandoCamera.play()
    cameras.forEach((camera, index) => {
        if (index + 1 === nc) {
            camera.classList.add("active");
        } else {
            camera.classList.remove("active");
        }
    });
    movimentacao(nc)
}

function movimentacao(nc) {
    if (camera == true) {
        numCam = nc
        let videoKey = 'cameras' + numCam;
        inputZoom.value = inputValues[videoKey]
        videoChiadoCam.style.display = "block"
        videoChiadoCam.play()
        setTimeout(() => {
            videoChiadoCam.style.display = "none"
        }, 250);
        if (nc === 1) {
            mapaP.innerHTML = "Corredor Sul"
            if (passosChica === 1) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam1Com.style.visibility = "visible"
                cam1Com.play()
            } else if (passosChica !== 1) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam1Sem.style.visibility = "visible"
                cam1Sem.play()
            } else {
                console.log("Vídeo não selecionado")
            }
        }
        if (nc === 2) {
            mapaP.innerHTML = "Entrada Oeste"
            if (passosChica === 2) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam2Com.style.visibility = "visible"
                cam2Com.play()
            } else if (passosChica !== 2) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam2Sem.style.visibility = "visible"
                cam2Sem.play()
            } else {
                console.log("Vídeo não selecionado")
            }
        }
        if (nc === 3) {
            mapaP.innerHTML = "Corredor Leste"
            if (passosFoxy === 3) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam3Com.style.visibility = "visible"
                cam3Com.play()
                corridaFoxy.play()
                cam3Com.addEventListener("ended", function () {
                    if (camera == true) {
                        cam3Com.style.visibility = "hidden"
                        cam3Sem.style.visibility = "visible"
                        cam3Sem.play()
                    }
                })
            } else if (passosFoxy !== 3) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam3Sem.style.visibility = "visible"
                cam3Sem.play()
            } else {
                console.log("Vídeo não selecionado")
            }
        }
        if (nc === 4) {
            mapaP.innerHTML = "Teatro"
            if (passosPuppet === 0) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam4Com.style.visibility = "visible"
                cam4Com.play()
            } else if (passosPuppet !== 0) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam4Sem.style.visibility = "visible"
                cam4Sem.play()
            } else {
                console.log("Vídeo não selecionado")
            }
            if (camera == true) {
                divMusicBox.style.display = "flex"
                musicbox.play()
                musicbox.volume = 0.25
            }
        } else {
            if (camera == true) {
                divMusicBox.style.display = "none"
                musicbox.volume = 0
            }
        }
        if (nc === 5) {
            mapaP.innerHTML = "Entrada Norte"
            if (passosPuppet === 1) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam5Com.style.visibility = "visible"
                cam5Com.play()
            } else if (passosPuppet !== 1) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam5Sem.style.visibility = "visible"
                cam5Sem.play()
            } else {
                console.log("Vídeo não selecionado")
            }
            musicbox.volume = 0.125
        }
        if (nc === 6) {
            mapaP.innerHTML = "Entrada Leste"
            if (passosFofao === 1) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam6Com.style.visibility = "visible"
                cam6Com.play()
            } else if (passosFofao !== 1) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam6Sem.style.visibility = "visible"
                cam6Sem.play()
            } else {
                console.log("Vídeo não selecionado")
            }
        }
        if (nc === 7) {
            mapaP.innerHTML = "Palco"
            if (passosChica === 0 && passosFofao === 0) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam7Comfc.style.visibility = "visible"
                cam7Comfc.play()
            } else if (passosChica !== 0 && passosFofao === 0) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam7Comf.style.visibility = "visible"
                cam7Comf.play()
            } else if (passosChica === 0 && passosFofao !== 0) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam7Comc.style.visibility = "visible"
                cam7Comc.play()
            } else if (passosChica !== 0 && passosFofao !== 0) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam7Sem.style.visibility = "visible"
                cam7Sem.play()
            } else {
                console.log("Vídeo não selecionado")
            }

        }
        if (nc === 8) {
            mapaP.innerHTML = "Sala do Pirata"
            if (passosFoxy === 0) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam8Sem.style.visibility = "visible"
                cam8Sem.play()
            } else if (passosFoxy === 1) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam8Sem2.style.visibility = "visible"
                cam8Sem2.play()
            } else if (passosFoxy === 2) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam8Com.style.visibility = "visible"
                cam8Com.play()
            } else if (passosFoxy === 3) {
                for (let i = 0; i < videoCam.length; i++) {
                    videoCam[i].style.visibility = "hidden"
                }
                cam8Sem3.style.visibility = "visible"
                cam8Sem3.play()
            } else {
                console.log("Vídeo não selecionado")
            }

        }
    }
}


document.addEventListener("keydown", function (event) {
    if (jogoPausado == false && event.code === 'Space' && camera == true && spaceLuzCam == false) {
        spaceLuzCam = true
        if (luzCamAcesa == false) {
            clickLuzCam()
        }
    }
})
document.addEventListener("keyup", function (event) {
    if (event.code === 'Space') {
        spaceLuzCam = false
        if (luzCamAcesa == true) {
            clickLuzCam()
        }
    }
})
btnLuzCam.addEventListener("mousedown", function () {
    if (luzCamAcesa == false && spaceLuzCam == false) {
        clickLuzCam()
    }
})
btnLuzCam.addEventListener("mouseup", function () {
    if (luzCamAcesa == true && spaceLuzCam == false) {
        clickLuzCam()
    }
})
btnLuzCam.addEventListener("mouseleave", function () {
    if (luzCamAcesa == true && spaceLuzCam == false) {
        clickLuzCam()
    }
})
function clickLuzCam() {
    if (luzCamAcesa == false) {
        uso++
        atualizaBarras()
        buzzlight.play()
        acenderApagarLuzCam()
    } else {
        uso--
        atualizaBarras()
        if (!btnLuz.classList.contains("active")) {
            buzzlight.pause()
        }
        acenderApagarLuzCam()
    }
}

function acenderApagarLuzCam() {
    if (luzCamAcesa == false) {
        for (let i = 0; i < videoCam.length; i++) {
            videoCam[i].style.filter = "brightness(0.75)"
        }
        luzCamAcesa = true
    } else {
        for (let i = 0; i < videoCam.length; i++) {
            videoCam[i].style.filter = "brightness(0.05)"
        }
        luzCamAcesa = false
    }
}






var videos = {
    'cameras1': Array.from(document.querySelectorAll('.cameras1')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
    'cameras2': Array.from(document.querySelectorAll('.cameras2')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
    'cameras3': Array.from(document.querySelectorAll('.cameras3')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
    'cameras4': Array.from(document.querySelectorAll('.cameras4')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
    'cameras5': Array.from(document.querySelectorAll('.cameras5')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
    'cameras6': Array.from(document.querySelectorAll('.cameras6')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
    'cameras7': Array.from(document.querySelectorAll('.cameras7')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 })),
    'cameras8': Array.from(document.querySelectorAll('.cameras8')).map(element => ({ element: element, zoom: 1, x: 0, y: 0 }))
};

var keys = {};

var inputValues = {
    'cameras1': 50,
    'cameras2': 50,
    'cameras3': 50,
    'cameras4': 50,
    'cameras5': 50,
    'cameras6': 50,
    'cameras7': 50,
    'cameras8': 50
};

window.addEventListener('wheel', function (e) {
    if (jogoPausado == false && camera == true) {
        var videoKey = 'cameras' + numCam;
        var videoArray = videos[videoKey];
        videoArray.forEach(video => {
            var oldZoom = video.zoom;
            if (e.deltaY < 0) {
                if (video.zoom <= 2) {
                    video.zoom += 0.1;
                    inputZoom.value = (video.zoom * 50)
                    inputValues[videoKey] = inputZoom.value
                }
            } else {
                if (video.zoom > 1) {
                    video.zoom -= 0.1;
                    inputZoom.value = (video.zoom * 50)
                    inputValues[videoKey] = inputZoom.value
                }
            }

            if (oldZoom != video.zoom) {
                var maxX = Math.max(0, (video.zoom - 1) * video.element.offsetWidth / 2);
                var maxY = Math.max(0, (video.zoom - 1) * video.element.offsetHeight / 2);
                video.x = Math.min(maxX, Math.max(-maxX, video.x));
                video.y = Math.min(maxY, Math.max(-maxY, video.y));
            }

            video.element.style.transform = `translate(${video.x}px, ${video.y}px) scale(${video.zoom})`;
        });
    }
});

inputZoom.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        this.blur()
    }
});

window.addEventListener('keydown', function (e) {
    if (jogoPausado == false && camera == true) {
        keys[e.key] = true
    }
});

window.addEventListener('keyup', function (e) {
    if (jogoPausado == false && camera == true) {
        keys[e.key] = false;
        ruidoMovCam.pause()
    }
});

setInterval(function () {
    var videoKey = 'cameras' + numCam;
    var videoArray = videos[videoKey];
    videoArray.forEach(video => {
        var maxX = Math.max(0, (video.zoom - 1) * video.element.offsetWidth / 2);
        var maxY = Math.max(0, (video.zoom - 1) * video.element.offsetHeight / 2);
        var speed = 10 * video.zoom;

        if (keys['w'] || keys['W'] || keys['ArrowUp']) {
            video.y = Math.min(maxY, video.y + speed);
            ruidoMovCam.play()
        }
        if (keys['a'] || keys['A'] || keys['ArrowLeft']) {
            video.x = Math.min(maxX, video.x + speed);
            ruidoMovCam.play()
        }
        if (keys['s'] || keys['S'] || keys['ArrowDown']) {
            video.y = Math.max(-maxY, video.y - speed);
            ruidoMovCam.play()
        }
        if (keys['d'] || keys['D'] || keys['ArrowRight']) {
            video.x = Math.max(-maxX, video.x - speed);
            ruidoMovCam.play()
        }


        video.element.style.transform = `translate(${video.x}px, ${video.y}px) scale(${video.zoom})`;
    });
}, 50);

inputZoom.addEventListener("input", function () {
    if (jogoPausado == false && camera == true) {
        var videoKey = 'cameras' + numCam;
        var videoArray = videos[videoKey];
        inputValues[videoKey] = inputZoom.value;
        videoArray.forEach(video => {
            var oldZoom = video.zoom;
            video.zoom = (inputValues[videoKey] / 50);

            if (oldZoom != video.zoom) {
                var maxX = Math.max(0, (video.zoom - 1) * video.element.offsetWidth / 2);
                var maxY = Math.max(0, (video.zoom - 1) * video.element.offsetHeight / 2);
                video.x = Math.min(maxX, Math.max(-maxX, video.x));
                video.y = Math.min(maxY, Math.max(-maxY, video.y));
            }

            video.element.style.transform = `translate(${video.x}px, ${video.y}px) scale(${video.zoom})`;
        });
    }
})