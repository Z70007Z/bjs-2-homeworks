
class AlarmClock {

    constructor() {
        
        // if (timerId === null) {            
        //     throw new Error("Ошибка!!!");
        // };
        this.alarmCollection = [];
        this.timerId = null;       
    }

    addClock(id, time, callback) {

        if (typeof id === 'undefined') {
            throw new Error('error text');
        }
        else if (typeof this.alarmCollection.find(clock => clock.id === id) !== 'undefined') {
            return console.log('The Alert already exist.');
        }
        return this.alarmCollection.push({id, time, callback});

    }

    removeClock(id) {

        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].id === id) {
                this.alarmCollection.splice(this.alarmCollection.indexOf(this.alarmCollection[i]), 1);
                return true;               
            }  
        } 
        return false;
    }

    getCurrentFormattedTime() {

        let timeM = new Date();
        let hour = timeM.getHours().toString().length < 2 ? '0' + timeM.getHours() : timeM.getHours();
        let min = timeM.getMinutes().toString().length < 2 ? '0' + timeM.getMinutes() : timeM.getMinutes();

        return `${hour}:${min}`;
    }

    start() {
        let checkClock = (clock) => {
            let alarm = this.getCurrentFormattedTime();
            if (clock.time === alarm) {
                return callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(clock => checkClock(clock));
            }, 1000);
        }
        return;
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            return this.timerId = null;
        }
    }

    printAlarms() {
        return this.alarmCollection.forEach(function(item) {
            console.log(`${item.id}: ${item.time}`);
        })
    }

    clearAlarms() {
        this.stop(); 
        return this.alarmCollection.forEach((item, i) => { 
            this.alarmCollection.splice(i, 1);
        }) 
    }
}


// * `constructor` - выделяет память для объекта. 
// 	* Создайте свойство для хранения коллекции звонков `alarmCollection` с начальным значением пустого массива. 
// 	* Создайте свойство `timerId` для хранения `id` таймера без начального значения.