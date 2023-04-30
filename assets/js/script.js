const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__bar");
const counter = document.querySelector(".progress__counter");
const reloader = document.querySelector(".reloader");
let i = 0;

let progressInterval = setInterval(function(){
    progressBar.style.width = `${i}%`;
    counter.innerHTML = `${i}%`;
    i++
    if( i > progress.dataset.progress){
        clearInterval(progressInterval);
    }
}, progress.dataset.speed);

reloader.addEventListener("click", ()=> document.location.reload(true) )