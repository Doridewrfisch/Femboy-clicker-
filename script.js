
const image = document.getElementById('clickableImage');


const audio = document.getElementById('clickSound');


image.addEventListener('click', function() {
    audio.currentTime = 0;  
    audio.play();           
});