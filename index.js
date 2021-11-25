const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Le diste Click al boton de Play')  
}
function handlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('Le diste Click al boton de Pause')
}

$backward.addEventListener('click', handlebackward)

function handlebackward() {
    $video.currentTime -= 10
    console.log('para atras 10 Segundos')
}

$forward.addEventListener('click', handleforward)

function handleforward() {
    $video.currentTime += 10
    console.log('para adelante 10 Segundos')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
   // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.vale
    console.log($progress.value)
}