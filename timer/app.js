class Timer {
    constructor(durationInput, startButton, pauseButton){
        // catch two buttons and one numeric input
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        /* setInterval waits one second before starting first time 
        so we manualy call method for the first time */
        this.tick();
        this.timerId = setInterval(this.tick, 1000); // setInterval returns an ID
    };
    
    tick = () => {
        console.log("tick");
    };

    pause = () => {
        clearInterval(this.timerId);
    };
}

// select elements and and instantiate a new object
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const timer = new Timer(durationInput, startButton, pauseButton);