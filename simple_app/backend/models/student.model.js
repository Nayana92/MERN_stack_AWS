const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    student_id: {type: Number, require: true, unique: true},
    first_name: {type: String, require: true,trim:true},
    last_name: {type: String, required: true,trim:true},
    email: {type: String, require: true, unique: true,trim:true},
    address: {type: String,trim:true},
    gpa: {type: Number, required: true},
});

const Student = mongoose.model('Student',studentSchema);

module.exports  = Student;