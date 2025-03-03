const mongoose = require('mongoose');
const masterSchema = new mongoose.Schema({

    createdAt: { type : Date, default : Date.now},
    createdBy : { type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: function() {
            return this.role != "admin";
        }
     },
     updatedAt : { type: Date, default : Date.now},
     UpdatedBy : {type : mongoose.Schema.Types.ObjectId ,
        ref: "User"
     },
     isActive : { type : Boolean, default: true},

},  { timestamps : false});

module.exports = masterSchema;