
class DonutMaker {
    constructor(){
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.donutMultiplier = 0;
        this.donutsEarned = 1;
        this.autoClickerCost = 100;
        this.donutMultiplierCost = 10;
        this.setIntervalId = undefined;
    }

    getMake(){
        return this.donutCount;
    }

    getAutoClickerCount(){
        return this.autoClickerCount;
    }

    getClickCost(){
        return this.autoClickerCost;
    }

    getDonutMultiplierCount(){
        return this.donutMultiplier;

    }

    getMultiplierCost(){
        return this.donutMultiplierCost;
    }

    getDonutsPerClick(){
        return this.donutsEarned;
    }

    bake(){
        this.donutCount += this.donutsEarned;
    }

    auto = () => {
        console.log("count" + this.donutCount + " earned "+ this.donutsEarned);
        for(let i = 0; i < this.autoClickerCount; i++){
            this.bake();
        }
    }

    buyAutoClicker(){
        if(this.donutCount > this.autoClickerCost){
            this.donutCount -= this.autoClickerCost;
            console.log('count' + this.donutCount);
            this.autoClickerCount++;
            this.autoClickerCost = Math.round(this.autoClickerCost * 1.1);
            if(this.setIntervalId == undefined){
                this.setIntervalId = self.setInterval(this.auto, 1000);
            }
        }
    }


    buyDonutMultiplier(){
        if(this.donutCount > this.donutMultiplierCost){
            this.donutCount -= this.donutMultiplierCost;
            this.donutMultiplier++;
            this.donutMultiplierCost = Math.pow(1.2, this.donutMultiplier);
            this.donutMultiplier += this.autoClickerCost;
        }
    }

    resetGame(){
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 5;
        this.donutMultiplier = 0;
        this.donutMultiplierCost = 10;
        this.donutsEarned = 1;
    }
}
