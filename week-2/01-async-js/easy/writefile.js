// Using the fs library again, try to write to the contents of a file.
//You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');



console.log('This is before the write call');

fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

    // write to a file
    fs.writeFile('./example.txt', 'Hello World! this text is coming from writefile.js', (err) => {
        if (err) throw err;
        console.log('The file has been saved!');

        // Read the file again after writing
        fs.readFile('./example.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log('This is after the write call');
            console.log(data);
        });
    });
});

