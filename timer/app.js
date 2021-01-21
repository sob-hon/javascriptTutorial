// select elements and and instantiate a new object
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * Math.PI * 2;
circle.setAttribute("stroke-dasharray", perimeter);
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalTime){
        duration = totalTime;
    },

    onTick(presentTime){
        circle.setAttribute("stroke-dashoffset", 
        ((perimeter * presentTime) / duration) - perimeter);
    },

    onComplete(){
        
    }
});