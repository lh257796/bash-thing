



 module.exports = function () {


    const process = require('process');
    process.stdout.write('prompt > ');

    process.stdin.on('data', (data) => {
        const cmd = data.toString().trim();

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

    if (cmd === "pwd") {
        console.log("Current working directory: ",
        process.cwd());
    }}
    )};
