module.exports = function() {


    const fs = require('fs');
    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();

        // cmd: cat bash.js

        let cmdArr = cmd.split(' ');

        // [cat, bash.js]

        let fileName = cmdArr[1];

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

      if (cmdArr[0] === "cat") {

            fs.readFile('./',(err, data) => {
                if (err) throw err;
                console.log(data);
                done(data);
            })

          ;
    }});



}



/*

    fs.readFile('./',(err, data)) => {
        if (err) throw err;
        console.log(data);
    }


*/
