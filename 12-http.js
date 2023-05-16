const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to the home page')
        return
    }
    if(req.url==='/about'){
        res.end('This is the about page')
        return
    }
    res.write(`
    <h3>Oops Resource not available</h3>
    <a href="/">Home page</a>
    `);
    res.end();
});

server.listen(5000);