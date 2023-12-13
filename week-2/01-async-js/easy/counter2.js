// counter without using setInterval - use setTimeout instead

const counter = () => {
    let count = 0; 

    // using i as a multiplier for setTimeout 
    for(let i = 0; i < 10; i++) {
        setTimeout(()=> {
            console.log(count);
            count++;
        },1000*i);
    }

}

counter();