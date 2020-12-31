const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static(__dirname + '/build'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/build/index.html");
})

app.use('/api', createProxyMiddleware({ target: 'https://exertrak-api-server.herokuapp.com', changeOrigin: true }));

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000")
});
