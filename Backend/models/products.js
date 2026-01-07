const mongoose = require('mongoose');
const Productschema = new mongoose.Schema({
    Name : {
        type: String ,
        required : true
    }, 
    Description : {
        type : String ,
        required : true
    },
    Mrp : Number ,
    Quantity : Number ,
    Expiry : String
});

module.exports = mongoose.model('product' ,  Productschema);