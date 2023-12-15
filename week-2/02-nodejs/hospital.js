const express = require('express');
const app = express();


const users = [{
    name: "ben",
    kidneys: [{
        healthy: false

    }]
}];

app.use(express.json());

app.get('/', (req, res) => {
    // write logic
    const benKidneys = users[0].kidneys;
    const numberOfKidneys = benKidneys.length;
    const healthyKidneys = benKidneys.filter(kidney => kidney.healthy);
    const numberOfHealthyKidneys = healthyKidneys.length;
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    });
});

app.post('/', (req,res) => {

    console.log(req.body);
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy: ishealthy
    })
    res.json({
        message: "kidney added"
    })
})

app.put('/', (req,res) => {

    for (let i = 0; i < users[0].kidneys.length; i++) {
         users[0].kidneys[i].healthy = true;
    }
    res.json({
        message: "all kidneys are healthy"
    })
});

app.delete('/', (req,res) => {
 
    let atLeastOneHealthy = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (users[0].kidneys[i].healthy) {
            atLeastOneHealthy = true;
        }
    }

    users[0].kidneys = users[0].kidneys.filter(kidney => kidney.healthy);
    res.json({
        message: "all unhealthy kidneys removed"
    })


});

app.listen(3000);