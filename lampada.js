var lamp = window.document.getElementById('lampada')

function Quebrada(){

    return lamp.src.indexOf('quebrada')  >-1


}

function Ligar(){
    if(!Quebrada()){
    lamp.src = "./images/ligada.png"}

}

function Desligar(){
    if(!Quebrada()){
    lamp.src = "./images/desligada.png"}

}
lamp.addEventListener('click', Quebrar)
function Quebrar(){
    lamp.src = "./images/quebrada.png"
}