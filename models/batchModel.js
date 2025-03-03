const mongoose = require('mongoose');
const masterSchema = require('./mastermodel')
const trainerSchema = require('./trainerModel')


const batchSchema = new mongoose.Schema({
    ...masterSchema.obj,
    courseId : { type: mongoose.Schema.Types.ObjectId , ref:"Course", require: true },
    batchname : { type: String, required:true },
    startDate : { type: Date },
    endDate : { type: Date  },
    trainerId : { type: mongoose.Schema.Types.ObjectId , ref:"User", require: true },

});

module. exports = mongoose.model("Batch", batchSchema);