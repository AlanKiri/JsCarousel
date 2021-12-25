function renderCarousel(value) {
    let carouselSize = [];
    let tempImg = [];
for(let i = 0; i<value; i++){

    tempImg[i] = new Image();
    tempImg[i].onload = function(){
        saveImages();
    }
    let tryLoadImage = function(){  
        return (tempImg[i].src = 'images/' + i + '.jpg');
    }
    let saveImages = function(){
        carouselSize[i]=tryLoadImage();
    }
    console.log(tryLoadImage(i));
    console.log(carouselSize[i]);

}
}
  
renderCarousel(10);