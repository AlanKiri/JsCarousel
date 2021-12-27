'use strict';
let index = 1;

function renderCarousel () {
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img3 = document.getElementById('img3');
  //  img1.title = "index"

    
    console.log("1-" + +(index-1), "2-" + index, "3-" + (index+1));

    if (index-1 == -1) {
        img1.src = "images/" + 8 + ".jpg";
        console.log('a');
        img1.title = 8;

    }
    else{
        img1.src = "images/" + +(index-1) + ".jpg";
        console.log('b');
        img1.title = index-1;
    }
    img2.src = "images/" + index + ".jpg";
    img2.title = index;

    if (index+1 == 9) {
        img3.src = "images/" + 0 + ".jpg";
        console.log('c');
        img3.title = 0;;

    }
    else{
        img3.src = "images/" + +(index+1) + ".jpg";
        console.log('d');
        img3.title = index+1;

    }
}

let btn1 = document.getElementById('btn1');
btn1.onclick = function () {
    index--;
    index == -1? index=8 : null;
    renderCarousel();
    
}

let btn2 = document.getElementById('btn2');
btn2.onclick = function () {
    index ++;
    index == 9? index=0 : null;
    renderCarousel();
    
}
renderCarousel(6);


