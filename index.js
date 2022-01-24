const fs = require('fs');
function writeHTML5() {
    const filename = process.argv[2];
    fs.writeFileSync(`${process.cwd()}/${filename}`, "<html><body></body></html>")
}

writeHTML5();

// دستور زیر را در کنسول بزنید تا یک فایل برایتان بسازد
// node index.js file.html