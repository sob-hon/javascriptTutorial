class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        // catch two buttons and one numeric input
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        if(callbacks) {//making callbacks optional
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        /* setInterval waits one second before starting first time 
        so we manualy call method for the first time */
        if(this.onStart) {  //check if callback is passed
            this.onStart(this.presentTime);
        }
        this.tick();
        this.timerId = setInterval(this.tick, 20); // setInterval returns an ID
    };
    
    tick = () => {
        // old way of implementing this code
            // this.timeRemaining = parseFloat(this.durationInput.value);
            // this.durationInput.value = this.timeRemaining - 1;
        // newer approach get and set
            // this.timeRemaining = this.presentTime;
            // this.presentTime = this.timeRemaining - 1;
        // very newer approach
        if(this.onTick) {
            this.onTick(this.presentTime);
        }
        this.presentTime = this.presentTime - 0.02;
        if(!this.presentTime){
            this.pause();
            if(this.onComplete) {
                this.onComplete();
            }
        }
    };

    get presentTime() {
        return parseFloat(this.durationInput.value);
    }

    set presentTime(time) {
        return this.durationInput.value = time.toFixed(2);
    }

    pause = () => {
        clearInterval(this.timerId);
    };
}