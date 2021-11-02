window.onload = function(){
    document.getElementById("stop").disabled=true;
}


    let fonts = {
        tiny:"7pt",
        small:"10pt",
        medium:"12pt",
        large:"16pt",
        extra:"24pt",
        xxl:"32pt"
    }

    function changeFont(){
        let sizes = document.getElementById("size").value;
        document.getElementById("animations").style.fontSize = fonts[sizes];
    }

    function chooseAnimation(){
        let anime = document.getElementById("animation").value;
        document.getElementById("animations").value = ANIMATIONS[anime];
    }


let frameArr;
let i=0;
let interval = null;
var speed = 250;

function start(){
    let anime = document.getElementById("animations").value;
    frameArr = anime.split("=====\n");
    interval = setInterval(animate, speed);
    document.getElementById("stop").disabled = false;
    document.getElementById("animation").disabled = true;
    inProgress();
}

    
function inProgress(){
    if(interval !== null){
        document.getElementById("start").disabled= true;
        document.getElementById("animations").disabled=true;
    }
}

function animate(){
    if(i == frameArr.length){
        i=0;
    } else{
        document.getElementById("animations").value = frameArr[i++];
    }
}

function increaseSpeed(){
    let speedy = document.getElementById("fast");
    if(frameArr !== undefined){
        if(speedy.checked){
            speed = 50;
            clearInterval(interval);
            interval = setInterval(animate, speed);
        } else{
            speed = 250;
            clearInterval(interval);
            interval = setInterval(animate, speed);
        }
    }
}

function stop(){
    clearInterval(interval);
    interval = null;
    chooseAnimation();
    document.getElementById("start").disabled = false;
    document.getElementById("fast").checked=false;
}