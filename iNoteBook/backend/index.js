const express = require('express');
const app = express();

const mongoConnect = require('./db');
mongoConnect();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.get('/', (req,res) =>{
    res.send("Hello");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});