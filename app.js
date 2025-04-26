const express = require('express');

// Express App 

const app = express();

// listen for requests 

app.listen(3000);
app.get('/', (req, res) => {
    // sending a text in html 
    // res.send('<h1>Hello World</h1>')

    // sending a html file
    res.sendFile('./views/index.html', {root: __dirname}) //root is the directory where the file is located
});

app.get('/about', (req, res) => {
    // sending a text in html 
    // res.send('<h1>Hello World</h1>')

    // sending a html file
    res.sendFile('./views/about.html', {root: __dirname}) //root is the directory where the file is located
})

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// 404 Page
app.use((req, res) => {
    res.status(404).sendFile('./views/invalid.html', {root: __dirname})
})

console.log(
)