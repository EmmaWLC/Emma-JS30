const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then(localMediaStream => {
        video.srcObject = localMediaStream;
        video.play();
      })
      .catch(err => {
        console.error(`OH NO!!!`, err);
      });
}
getVideo();

function paintToCanvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;
  
    return setInterval(() => {
      ctx.drawImage(,0,0,width, height)
    }, 16);video
}

function takePhoto(){
    snap.currentTime = 0;
    snap.play();
    const data = canvas.toDataURL('image/jpeg');
  
    // const link = document.createElement('a');
    // link.href = data;
    // link.setAttribute('download', 'handsome');
    // link.innerHTML = `<img src="${data}"></img>`;

    strip.innerHTML = `<a href='${data}' download='handsome' > <img src="${data}"> </a>`  + strip.innerHTML;
    
}

paintToCanvas();

video.addEventListener('canplay', paintToCanvas);