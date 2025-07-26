const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/iNoteBook';

const mongoConnect = () =>{
    mongoose.connect(mongoURI);
}

module.exports = mongoConnect;