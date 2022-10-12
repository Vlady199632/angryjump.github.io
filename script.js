let character = document.getElementById("character");
let issue = document.getElementById("issue");
let counter = 0;
document.getElementById("counter").textContent = counter;
let counter2 = 0;
document.getElementById("counter2").textContent = counter2;

function count2 () {
    counter2++;
    document.getElementById("counter2").textContent = counter2;
}

function count () {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function lvlUp () {
    if (counter2 >= 3) {
        issue.classList.remove("run");
        issue.classList.add("runLvl");
    }
}



function start() {
    if(issue.classList != "run") {
        issue.classList.add("run");
    }
}

function pause (){
        issue.classList.remove("run");
        issue.classList.remove("runLvl");
}
document.addEventListener("keypress", function (e){
    jump();
})

function jump () {
    if (character.classList != "jump") {
        character.classList.add("jump");
        // count();
    }
    setTimeout(function (){
        character.classList.remove("jump");
    },700);
}

let isAlive = setInterval( function(){
    lvlUp();

    let redBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    let pigRight = parseInt(window.getComputedStyle(issue).getPropertyValue("right"));

    if (pigRight > 750 && pigRight < 800 && redBottom > 80 ) {
        count();
        count2();
    }


    if(pigRight > 750 && pigRight < 800 && redBottom < 60 ) {
        document.getElementById("over").style.opacity = "1";
        document.getElementById("game").style.opacity = "0";
        document.getElementById("menu").style.opacity = "0";
    }
}, 100);

