const dizaineHeure = document.querySelector(".chooseDizaineHeure")
const uniteHeure = document.querySelector (".chooseUniteHeure")
const dizaineMinute = document.querySelector(".chooseDizaineMinute")
const uniteMinute = document.querySelector (".chooseUniteMinute")
const btn = document.querySelector (".btn")
const pause = document.querySelector(".btnStop")
const reset = document.querySelector(".reset")
const audio = document.querySelector(".sound")
const n = new Notification ("Temps écoulé !")
const bv = document.querySelector(".barrevert")

function lancement (){
const stopped = setInterval (()=>{
        if (uniteMinute.value > 0) {
            uniteMinute.value = uniteMinute.value - 1
        }
        else if (dizaineMinute.value > 0 && uniteMinute.value == 0) {    
            uniteMinute.value = 9
            dizaineMinute.value = dizaineMinute.value -1
        }
        else if ( dizaineMinute.value == 0 && uniteHeure.value > 0) {
            dizaineMinute.value = 5
            uniteMinute.value = 9
            uniteHeure.value = uniteHeure.value - 1
        }
        else if (dizaineHeure.value > 0 && uniteHeure.value == 0 && dizaineMinute.value == 0 && uniteMinute.value == 0){
            dizaineHeure.value = dizaineHeure.value - 1
            uniteHeure.value = 9
            dizaineMinute.value = 5
            uniteMinute.value = 9
        }
        else if (dizaineHeure.value == 0 && dizaineMinute.value == 0 && uniteHeure.value == 0 && uniteMinute.value == 0) {
            audio.play();
            n;
            reseted()

        }
        }, 1000 )
    pause.addEventListener("click", stop)
    reset.addEventListener("click", reseted)
    function stop () {
            clearInterval(stopped)
            btn.style.display = "flex";
            pause.style.display = "none";
            reset.style.display = "none"
        }
        function reseted() {
            clearInterval(stopped)
            dizaineMinute.value = null
            uniteMinute.value = null
            dizaineHeure.value = null
            uniteHeure.value = null
            btn.style.display = "flex";
            pause.style.display = "none";
            reset.style.display = "none"
            dizaineHeure.focus();
            
        }
btn.style.display = "none";
pause.style.display = "flex";
reset.style.display = "flex"
let seconde = Number(uniteMinute.value)
let dizaineSeconde = Number(dizaineMinute.value*10)
let minute = Number(uniteHeure.value*60)
let dizaineMinutes = Number(dizaineHeure.value*600)
bv.style.animation = `defil ${dizaineMinutes + minute + dizaineSeconde + seconde}s linear forwards`
}

btn.addEventListener( "click", lancement)


dizaineHeure.addEventListener("keyup",() => {
    if (dizaineHeure.value !== "") {
    uniteHeure.focus()
    if (dizaineHeure.value > 5) {
        dizaineHeure.value = 5
    }
}})
uniteHeure.addEventListener("keyup",() => {
    if (uniteHeure.value !== "") {
    dizaineMinute.focus()
    if (uniteHeure.value > 9 ) {
        uniteHeure.value = 9
    }
}})
dizaineMinute.addEventListener("keyup",() => {
    if (dizaineMinute.value !== "") {
    uniteMinute.focus()
    if (dizaineMinute.value > 5) {
        dizaineMinute.value = 5
    }
}})
uniteMinute.addEventListener("keyup",() => {
    if (uniteMinute.value !== "") {
        btn.focus()
    if (uniteMinute.value > 9) {
        uniteMinute.value = 9
    }
}})
window.addEventListener("DOMContentLoaded", () => {
   dizaineHeure.focus()
  });


//  dizaineHeure.addEventListener('keydown', (e) => { if (input.value.length >= 1) e.preventDefaults() })
//  dizaineMinute.addEventListener('keydown', (e) => { if (input.value.length >= 1) e.preventDefaults() })
//  uniteHeure.addEventListener('keydown', (e) => { if (input.value.length >= 1) e.preventDefaults() })
//  uniteMinute.addEventListener('keydown', (e) => { if (input.value.length >= 1) e.preventDefaults() })
