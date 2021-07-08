const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggleBtn = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


function togglePlay(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

function toggleIcon(){
    if(video.paused){
        toggleBtn.innerHTML = '►' ;
    } else{
        toggleBtn.innerHTML = '❚ ❚';
    }
}

function changeValue(){
    video[this.name] = this.value;
}

function changeVideoTime(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateBarProgress(){
    progressBar.style["flex-basis"] = (video.currentTime / video.duration)*100 + "%";
}
let isClick = false;

function handleMouseDown(){
    isClick = true;
}

function updateBarByMouse(e) {
    console.log(isClick);
    if(isClick){
        console.log(e.offsetX);
        video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
    }
    
}

toggleBtn.addEventListener('click', togglePlay);
video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);
video.addEventListener('click', togglePlay);
ranges.forEach( element => element.addEventListener('change', changeValue) );
skipButtons.forEach( element => element.addEventListener('click', changeVideoTime));
video.addEventListener('timeupdate', updateBarProgress);

progress.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', ()=>{ isClick = false; } );

progress.addEventListener('mousedown', updateBarByMouse);


progress.addEventListener('mousemove', updateBarByMouse);

