// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');


fs.readFile('examplefile.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

    // changing the data
    let newData = data.replace(/\s+/g,' ').trim();
    // write to a file
    fs.writeFile('examplefile.txt', newData, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

    // Read the file again after writing
    fs.readFile('examplefile.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
});
