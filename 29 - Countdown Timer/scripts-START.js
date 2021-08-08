let displayTimeLeft = document.querySelector('.display__time-left');
let displayEndTime = document.querySelector('.display__end-time');
let btnList = document.querySelectorAll('.timer__button');
let currentInterval;
let currentTimeLeft = 0;

function countDownBtn(event) {
    currentTimeLeft = parseInt(event.target.dataset.time);
    countDown();    
}





function countDown(){

    clearInterval(currentInterval);
    const now = Date.now();
    
    let later = now + currentTimeLeft*1000;
    let dateObj = new Date(later);
    
    displayEndTime.innerHTML = `${dateObj.getHours()}:${dateObj.getMinutes()}`;

    let secs = currentTimeLeft % 60;
    if( parseInt(secs) < 10){
        secs = '0'+ secs;
        console.log(secs);
    } 
    displayTimeLeft.innerHTML = `${Math.floor(currentTimeLeft/60)}:${secs}`; 
    currentTimeLeft -= 1;

    currentInterval = setInterval(
        ()=>{ 
            
            let secs = currentTimeLeft % 60;
            if( parseInt(secs) < 10){
                secs = '0'+ secs;
                console.log(secs);
            } 
            displayTimeLeft.innerHTML = `${Math.floor(currentTimeLeft/60)}:${secs}`; 
            if(currentTimeLeft<=0){
                clearInterval(currentInterval);
            }
            currentTimeLeft -= 1;
        }
    ,1000);

    
}


btnList.forEach(ele => {
    ele.addEventListener('click', countDownBtn);
});

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const secs = parseInt(this.minutes.value) * 60;
    currentTimeLeft = secs;
    countDown();
    this.reset();
  });



