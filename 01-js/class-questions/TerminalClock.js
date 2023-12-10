// 3. Create a terminal clock (HH:MM:SS) which tells the current time and updates every second

const clock = () => {
    const interval = setInterval(() => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        console.log(`${hours}:${minutes}:${seconds}`);
    }, 1000);
}

clock();