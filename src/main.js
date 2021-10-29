const http = require('http');
const fs = require('fs')

const port = 3000;
//read www folder
const mkserver = (dir, code, res) => {
    fs.readdir(dir, (err, file) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end("sorry error");
        } else {
            res.statusCode = code;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end('<h1>please check your terminal</h1>')
            const file_num = file.length;
            let i = 0;
            while (file_num > i) {
                if (i == 0) {
                    console.log('there is the file in www\n');
                }
                console.log(file[i] + "\n");
                i++;
            }
        }
    })
}
//read file
const send = (file, code, res) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end = "error please try again.";
        } else {
            res.statusCode = code;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(data);
        }
    })
}
//http server
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == "/") {
        send(__dirname + "/index.html", 200, res);
    } else {
        send('./'+ url, 200, res);
    }
});
//console log
server.listen(port, () => {
    console.log(`server is working port:3000`);
});