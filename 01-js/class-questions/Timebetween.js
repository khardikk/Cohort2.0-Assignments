// 2. Calculate the time it takes between a setTimeout call and the inner function actually running

 function calculateTime() {
    // write your code here
    const start = new Date().getTime();

    setTimeout(() => {
        const end = new Date().getTime();
        const timeTaken = `${(end-start)/1000} seconds`;
        console.log("time taken: ", timeTaken);
    }, 1000);
 }

    calculateTime();