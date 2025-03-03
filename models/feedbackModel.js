const mongoose = require('mongoose');
const masterSchema = require('./mastermodel')

const feedbackSchema = new mongoose.Schema({
    ...masterSchema.obj,
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", require: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", require: true },

    batchId: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", require: true },
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    rating :{
        knowledge: { type: Number , min: 1, max: 5, required: true },
        communication: { type: Number , min: 1, max: 5, required: true },
        punctuality: { type: Number , min: 1, max: 5, required: true }
    },
    comment : { type: String}
    // 1 field missing



});

module.exports = mongoose.Schema("feedback",  feedbackSchema)