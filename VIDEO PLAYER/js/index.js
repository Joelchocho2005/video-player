const $video = document.querySelector("#video")
const $play = document.querySelector("#play")
const $pause = document.querySelector("#pause")
const $backward = document.querySelector("#backward")
const $forward= document.querySelector("#forward")
const $progress = document.querySelector("#progress")
$pause.addEventListener("click",handlePause)

function handlePause(){
    $video.pause()
    console.log("le diste click al boton de pause", $video.currentTime)
    $play.hidden = false
    $pause.hidden = true
}
$play.addEventListener("click",handlePlay)


function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log("le diste click al boton de play", $video.currentTime)

}
$backward.addEventListener("click",handleBackward)
function handleBackward(){
    console.log("Para atras 10 segundos",$video.currentTime)
    $video.currentTime = $video.currentTime - 10
    /** $video.currentTime -= 10 **/


}
$forward.addEventListener("click",handleForward)
function handleForward(){
    console.log("Para adelante 10 segundos", $video.currentTime)
    $video.currentTime = $video.currentTime + 10

}

$video.addEventListener("loadedmetadata", handleLoaded)
$video.addEventListener("timeupdate", handleTimeuodate)

function handleLoaded(){
    $progress.max = $video.duration
    console.log("Ha cargado mi video", $video.duration)

}

function handleTimeuodate(){
    $progress.value = $video.currentTime
    console.log($video.currentTime)
}
$progress.addEventListener("input", handleInput)

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}