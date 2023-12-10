// 1. Create a counter in Javascript (counts down from 30 to 0) and print on console

// print after every second (1000ms)
 const counter = ()  => {
        let count = 30;
        const interval = setInterval( () => {
            if(count === 0){
                clearInterval(interval);
            }
            console.log(count);
            count--;
        }, 1000);
    }

    counter();