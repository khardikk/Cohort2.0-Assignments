// create a counter in js that goes up by 1 every second

const counter = () => {
    let count = 0; 
    setInterval(()=> {
        
        console.log(count);
        count++;

    },1000);
}

counter();