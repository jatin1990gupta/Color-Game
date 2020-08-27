// Generating Random RGB value
function randColor() {
    let arr = []
    for (let i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
}


//Initializing DOM Elements
const box = document.querySelectorAll('.box');
const title = document.getElementById('title');
const result = document.getElementById('strip_item2');
const resetBtn = document.querySelector('#strip_item1');
const easyBtn = document.getElementById('strip_item3');
const medBtn = document.getElementById('strip_item4');
const hardBtn = document.getElementById('strip_item5');


//Main Function
function reset() {
    
    if (easyBtn.className === 'active') {
        var lim = 3;
        showDisp(lim);
    } else if (medBtn.className === 'active') {
        var lim = 6;
        showDisp(lim);
    } else {
        var lim = 9;
        showDisp(lim);
    }
    
    let arrColor = []
    
    for (let i = 0; i < lim; i++) {
        arrColor.push(randColor());
        console.log(arrColor);
    }

    result.style.color = 'black';
    title.innerHTML = arrColor[Math.floor(Math.random() * lim)];
    
    if (resetBtn.innerHTML === 'Play Again?') {
        resetBtn.innerHTML = 'New Colors';
    }
    
    result.innerHTML = '';
    
    for (i = 0; i < lim; i++) {
        box[i].style.opacity = '1';
        box[i].style.backgroundColor = arrColor[i];
        box[i].style.cursor = 'pointer';
    }
}


//Selecting Element Count (3/6/9)
function showDisp(lim) {
    for (let i = 0; i < 9; i++) {
        if (i < lim) {
            box[i].style.display = 'block';
        } else {
            box[i].style.display = 'none';
        }
    }
}


// Check for color match
function check(elem) {
    let boxColor = elem.style.backgroundColor;
    let titleColor = title.innerHTML;
    
    if (boxColor !== titleColor) {
        elem.style.opacity = '0';
        result.innerHTML = 'try Again :(';
    } else {
        result.innerHTML = 'Correct!';
        result.style.color = boxColor;
        resetBtn.innerHTML = 'Play Again?';
        for (i = 0; i < 9; i++) {
            box[i].style.opacity = '1';
            box[i].style.backgroundColor = boxColor;
            box[i].style.cursor = 'default';
        }
    }
}


//Selecting Difficulty level
function classSwap(elem) {
    if (elem.className === " ") {
        if (elem === easyBtn) {
            easyBtn.className = "active";
            medBtn.className = " ";
            hardBtn.className = " ";
        } else if (elem === medBtn) {
            easyBtn.className = " ";
            medBtn.className = "active";
            hardBtn.className = " ";
        } else {
            easyBtn.className = " ";
            medBtn.className = " ";
            hardBtn.className = "active";
        }
        reset();
    }
}

