import { makeElementInvisible } from "./util";
import { makeElementVisible } from "./util";


class System {

   count=7;
   timer = 60

    tries = document.getElementById("tries");
    timer = document.getElementById("timer");
    resetButton = document.getElementById("reset-button");
    restartButton = document.getElementById("restartButton");
    startButton = document.getElementById("startButton");
    failText = document.getElementById("failText");
    successText = document.getElementById("successText");
    overText = document.getElementById("overText");
    startText = document.getElementById("startText");



    tries가 0 -> overText 나옴
    
    틀릴때마다 행맨 7요소인데, 6개이후 7개 나오는 순간 실패했습니다다 failText

    
    

    constructor() {
        
        
        this.startButton.addEventListener('click', this.start)
        this.restartButton.addEventListener('click', this.restart)
        this.resetButton.addEventListener('click', this.reset)
    }
    




    
    start () {
        makeElementInvisible(this.startText);
        makeElementInvisible(this.overText);
        makeElementInvisible(this.failText);
        this.count--
        this.timer = 60;
        this.tries.textContent = this.count

        if (tries===0) {
            makeElementVisible(this.overText);
        }
        
    }

    restart() {
        makeElementInvisible(this.failText);
        this.count--
        this.timer = 60;
        
    }

    reset() {
        makeElementVisible(this.startText);
        makeElementInvisible(this.successText);
        makeElementInvisible(this.overText);
        makeElementInvisible(this.failText);
    }




    
    

    const timeFunction = setInterval(()=>{
        timer--
        timer.textContent = timer;

        if(timer === 0){
            makeElementVisible(this.failText);
        }
    }, 1000)
    

    
}