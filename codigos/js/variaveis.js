// Seleção geral
var telaCarregamento = document.querySelector("#tela-carregamento")
var aviso = document.querySelector("#aviso")
var ok = document.querySelector("#ok")
var conteudo = document.querySelector("#conteudo")

var telaMobile = document.querySelector("#tela-mobile")
var telaCheia = document.querySelector("#tela-cheia")
var telaJornal = document.querySelector("#tela-jornal")
var telaInicial = document.querySelector("#tela-inicial")
var telaNoite = document.querySelector("#tela-noite")
var telaPause = document.querySelector("#tela-pause")
var telaTransicaoNoite = document.querySelector("#tela-transicao-noite")
var telaGameOver = document.querySelector("#tela-game-over")
var telaBalloonBoy = document.querySelector("#tela-balloon-boy")
var divBalloonBoy = document.querySelector("#div-balloon-boy")

var p12 = document.querySelector("#p-12")
var pNoite = document.querySelectorAll(".p-noite")
var controles = document.querySelector("#controles")
var noites = document.querySelectorAll(".noites")
var noitesAtivas = document.querySelectorAll(".noites.active")

var gameOverP = document.querySelector("#game-over-p")

var alerta = document.querySelector("#alerta")
var alertaCam = document.querySelector("#alerta-cam")

var zoomCamera





// Seleção botões e envolvidos
var fucinhoDiv = document.querySelector("#fucinho-div")
var relogio = document.querySelector("#relogio")
var btnMute = document.querySelector("#btn-mute")
var btnPause = document.querySelector("#btn-pause")
var btnClosePause = document.querySelector("#btn-close-pause")
var btnVoltarTelaInicial = document.querySelectorAll(".btn-voltar-tela-inicial")

var elementosTutorial = document.querySelectorAll(".elementos-tutorial")

var btnLeftLeftLeft = document.querySelector("#btn-left-left-left")
var btnLeftLeft = document.querySelector("#btn-left-left")
var btnRightRight = document.querySelector("#btn-right-right")
var btnRightRightRight = document.querySelector("#btn-right-right-right")

var divBtnLuz = document.querySelector("#div-btn-luz")
var btnLuz = document.querySelector("#btn-luz")
var btnLuzCam = document.querySelector("#btn-luz-cam")
var btnMascara = document.querySelector("#btn-mascara")
var btnCamera = document.querySelector("#btn-camera")
var cameras = document.querySelectorAll(".cameras")
var inputZoom = document.querySelector("#input-zoom")
var mapaAbsolute = document.querySelector("#mapa-absolute")
var mapaP = document.querySelector("#mapa-p")

var btnParaBloquear = document.querySelectorAll(".btn-para-bloquear")
var btnParaBloquearPuppet = document.querySelectorAll(".btn-para-bloquear-puppet")

var bateriaP = document.querySelector("#bateria-p")
var barra = document.querySelectorAll(".barra")

var btnVoltarVGm = document.querySelector("#btn-voltar-v-gm")

var btnMusicBox = document.querySelector("#btn-music-box")
var divMusicBox = document.querySelector("#div-music-box")







// Seleção de vídeos
var videoGeral = document.querySelectorAll("video")
var jumpscare = document.querySelectorAll(".jumpscare")
var videoCam = document.querySelectorAll(".video-cam")
var divVideo = document.querySelector("#div-video")
var videoVisao = document.querySelectorAll(".video-visao")

var telaInicialVideo = document.querySelector("#tela-inicial-video")
var videoVisaoNinguem = document.querySelector("#video-visao-ninguem")
var videoVisaoPuppet = document.querySelector("#video-visao-puppet")
var videoVisaoChica = document.querySelector("#video-visao-chica")
var videoVisaoFofao = document.querySelector("#video-visao-fofao")

var cam1Com = document.querySelector("#cam1-com")
var cam1Sem = document.querySelector("#cam1-sem")
var cam2Com = document.querySelector("#cam2-com")
var cam2Sem = document.querySelector("#cam2-sem")
var cam3Com = document.querySelector("#cam3-com")
var cam3Sem = document.querySelector("#cam3-sem")
var cam4Com = document.querySelector("#cam4-com")
var cam4Sem = document.querySelector("#cam4-sem")
var cam5Com = document.querySelector("#cam5-com")
var cam5Sem = document.querySelector("#cam5-sem")
var cam6Com = document.querySelector("#cam6-com")
var cam6Sem = document.querySelector("#cam6-sem")
var cam7Comc = document.querySelector("#cam7-comc")
var cam7Comf = document.querySelector("#cam7-comf")
var cam7Comfc = document.querySelector("#cam7-comfc")
var cam7Sem = document.querySelector("#cam7-sem")
var cam8Com = document.querySelector("#cam8-com")
var cam8Sem = document.querySelector("#cam8-sem")
var cam8Sem2 = document.querySelector("#cam8-sem2")
var cam8Sem3 = document.querySelector("#cam8-sem3")
var cam9Com = document.querySelector("#cam9-com")
var cam9Sem = document.querySelector("#cam9-sem")

var videoChiadoCam = document.querySelector("#video-chiado-cam")
var videoChiado = document.querySelector("#video-chiado")
var souEu = document.querySelector("#sou-eu")
var manha6 = document.querySelector("#manha6")
var videoVitoria = document.querySelector("#video-vitoria")

var gameOverFofaoVideo = document.querySelector("#game-over-fofao-video")
var jumpscareChica = document.querySelector("#jumpscare-chica")
var jumpscarePuppet = document.querySelector("#jumpscare-puppet")
var jumpscareFofao = document.querySelector("#jumpscare-fofao")
var jumpscareFoxy = document.querySelector("#jumpscare-foxy")
var jumpscareBalloonBoy = document.querySelector("#jumpscare-balloon-boy")






// Seleção de áudios
var audioGeral = document.querySelectorAll("audio")
var audioTelaInicial = document.querySelectorAll(".audio-tela-inicial")

var abrirFecharCamera = document.querySelector("#abrir-fechar-camera")
var alarme = document.querySelector("#alarme")
var apareceuPorta = document.querySelector("#apareceu-porta")
var batidas = document.querySelector("#batidas")
var btnBloqueado = document.querySelector("#btn-bloqueado")
var buzzlight = document.querySelector("#buzzlight")
var carrossel = document.querySelector("#carrossel")
var chiado = document.querySelector("#chiado")
var choque = document.querySelector("#choque")
var colocandoMascara = document.querySelector("#colocando-mascara")
var corridaFoxy = document.querySelector("#corrida-foxy")
var energiaVoltou = document.querySelector("#energia-voltou")
var fucinho = document.querySelector("#fucinho")
var gameOverFofaoAudio = document.querySelector("#game-over-fofao-audio")
var gameOverPuppet = document.querySelector("#game-over-puppet")
var gritoFofao = document.querySelector("#grito-fofao")
var gritoFoxy = document.querySelector("#grito-foxy")
var gritoNoite5 = document.querySelector("#grito-noite-5")
var hello = document.querySelector("#hello")
var hi = document.querySelector("#hi")
var manivela = document.querySelector("#manivela")
var movendoCamera = document.querySelector("#movendo-camera")
var mudandoCamera = document.querySelector("#mudando-camera")
var musicaUcn = document.querySelector("#musica-ucn")
var musicbox = document.querySelector("#musicbox")
var portaAudio = document.querySelector("#porta-audio")
var pulo = document.querySelector("#pulo")
var quedaEnergia = document.querySelector("#queda-energia")
var respiracaoOfegante = document.querySelector("#respiracao-ofegante")
var respirando = document.querySelector("#respirando")
var risada = document.querySelector("#risada")
var ruidoMovCam = document.querySelector("#ruido-mov-cam")
var risadaLoop = document.querySelector("#risada-loop")
var somAmbiente = document.querySelector("#som-ambiente")
var somAmbiente3 = document.querySelector("#som-ambiente3")
var somAmbiente2 = document.querySelector("#som-ambiente2")
var telefone = document.querySelector("#telefone")
var terraria = document.querySelector("#terraria")
var tirandoMascara = document.querySelector("#tirando-mascara")
var ventilador = document.querySelector("#ventilador")
var vitoria = document.querySelector("#vitoria")
var zumbido = document.querySelector("#zumbido")



// Seleção de imagens
var jornalImg = document.querySelector("#jornal-img")
var mascaraImg = document.querySelector("#mascara-img")
var cameraImg = document.querySelector("#camera-img")
var vitoriaImg = document.querySelector("#vitoria-img")
var balloonBoyImg = document.querySelector("#balloon-boy-img")







// Valores numéricos
var noite, numCam = 7, tmpMusicBox, tmpBateria,
inicioHoras, tmpHoras = 60000, tempoRestanteHoras = tmpHoras, horasId,
inicioTotalHoras, tmpTotalHoras = 1000, tempoRestanteTotalHoras = tmpTotalHoras, totalHorasId, tempoTotal = 360,
inicioEsperaAtaque, tmpEsperaAtaque, tempoRestanteEsperaAtaque = tmpEsperaAtaque, esperaAtaqueId,
inicioEsperaMascara, tmpEsperaMascara, tempoRestanteEsperaMascara = tmpEsperaMascara, esperaMascaraId,
inicioChica, tmpChica, tempoRestanteChica = tmpChica, chicaId,
inicioFofao, tmpFofao, tempoRestanteFofao = tmpFofao, fofaoId,
inicioFoxy, tmpFoxy, tempoRestanteFoxy = tmpFoxy, foxyId,
inicioBalloonBoy, tmpBalloonBoy, tempoRestanteBalloonBoy = tmpBalloonBoy, balloonBoyId



var horario = 12
var passosPuppet = 0
var passosChica = 0
var passosFoxy = 0
var passosFofao = 0
var passosBalloonBoy = 0
var uso = 1
var usoMaximo = 3

var alarmeDelay
var balloonBoyTransform = 0

var souEuContagem = 0
var chiadoContagem = 0
var puppetContagem = 0
var angle = 360

var bateria = 100
var consumo = 1

var sorteio, sorteioFalaBalloonBoy, sustoInterval, sorteioSusto1, sorteioSusto2, sorteioSusto3, sorteioSusto4, sorteioSusto5, sorteioSusto6
var tmpSusto = 500

var novoCurrentTime

var velBtnLR







// Valores booleanos
var jogoPausado = false
var jogoPausadoTotalHoras = false
var jogoPausadoHoras = false
var ataquePausado = false
var mascaraPausada = false
var chicaPausada = false
var foxyPausado = false
var fofaoPausado = false
var balloonBoyPausado = false

var luzAcesa = false
var luzCamAcesa = false
var mascara = false
var camera = false
var botoesBloqueados = false
var botoesBloqueadosPuppet = false
var venceu = false
var primeiraVezCam = true
var primeiraVezMasc = true

var mouseUpFired = false
var mouseDownFired = false
var mouseDownInsideButton = false

var chicaAtiva = false
var puppetAtiva = false
var foxyAtivo = false
var fofaoAtivo = false
var balloonBoyAtivo = false

var alguemAtacou = false
var apareceuPortaTocou = false
var ataquePuppet = false
var ataqueChica = false
var ataqueFoxy = false
var ataqueFofao = false
var ataqueBalloonBoy = false

var spaceLuz = false
var spaceLuzCam = false







// Outros
var audiosTocando = []
var videosRodando = []
var intervaloLeft, intervaloRight, bateriaInterval, intervaloPuppet, holdIntervalPuppet
var cores = ["green", "yellow", "red"];