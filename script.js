let currentSlide=0;
let totalSlides = document.querySelectorAll('.slider--item').length;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.controls').style.height = `${document.querySelector('.slider').clientHeight}px`;
function goPrev(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide= totalSlides -1;
    }

    updateMargin();
    
}
function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides -1)){
        currentSlide= 0;
    }
    updateMargin();
}

function updateMargin(){
    let newMargin = (currentSlide * document.body.clientWidth);
    document.querySelector('.slider--width').style.marginLeft = `${newMargin}px`;
}