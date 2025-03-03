const mongoose = require('mongoose');
const masterSchema = require('./mastermodel')


const trainerSchema = new mongoose.Schema({
    ...masterSchema.obj,
    name : { type: String, required:true },
    subject : { type: String , required:true},
    email : { type: String , required: true, unique: true  }
});

module. exports = mongoose.model("Trainer", trainerSchema);