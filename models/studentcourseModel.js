const mongoose = require('mongoose');
const masterSchema = require('./mastermodel')

const studentCourseBatchSchema = new mongoose.Schema({
    ...masterSchema.obj,
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", require: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: "Course", require: true },

    batchId: { type: mongoose.Schema.Types.ObjectId, ref: "Batch", require: true },
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },

});

module.exports = mongoose.model("StudentCourseBatch", studentCourseBatchSchema);