const express = require('express');
const path = require('path');

const PORT = 8088;
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send('<h2>Hello, World!</h2>');
})

// API handler
app.get('/api/posts', (req, res) => {
    // Return dummy data
    res.send([{ id: 1, content: "Something important" }, { id: 2, content: "Another data" }]);
});

app.listen(PORT, () => {
    console.log('Server is running...');
});
