const mongoose = require('mongoose');

const empSchema = mongoose.Schema({

    fName : {
        type :String,
        required : true,
    },
    sName : {
        type :String,
        required : true,
    },
    age : {
        type :Number
    },
    title : {
        type : String,
        default : 'Software Engineer'
    }

});

module.exports = mongoose.model('Employee', empSchema);