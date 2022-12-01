const egg = document.querySelector(".egg");
const basket = document.querySelector(".basket");
const scoreElement = document.querySelector("span");
const startEle = document.querySelector(".start");
const closeEle = document.querySelector("h3");
let el = 45;
let et = 0;
let bl = 40;
let score = 0;
let myInterval;
startEle.addEventListener("click",function(){
    myInterval = setInterval(dropHandel,25);
    startEle.style.display = "none"
    closeEle.style.display = "inline-block"
    score = 0;
    scoreElement.textContent = score;
    egg.style.top = `0%`
    egg.style.left = `45%`
})
closeEle.addEventListener("click",function(){
    clearInterval(myInterval)
    startEle.style.display = "flex"
    closeEle.style.display = "none"

})

document.onkeydown = checkKey;


function dropHandel(){
    if (et == 90 ) {
        if(el >= (bl-2) && el <= (bl+5) ){
            score = score + 1;
            scoreElement.textContent = score;
        }
        et = 0;
        el = Math.floor(Math.random() * 90)
        egg.style.left = el+"%"
    }else{
        et = et + 1;
    }
    egg.style.top = `${et}%`
}

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37' && bl > 0) {
       bl = bl - 5
    }
    else if (e.keyCode == '39' && bl < 90) {
       bl = bl + 5
    }
    basket.style.left = `${bl}%`

}