const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const msgSchema = new Schema({
    message: String,
    author: String,
    datetime: String
});


const msgModel = mongoose.model('Msg', msgSchema);

module.exports = msgModel;