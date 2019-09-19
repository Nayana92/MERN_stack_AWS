const router = require('express').Router();
let Student = require('../models/student.model');

router.route('/').get((req,res)=>{
    Student.find()
    .then(students => res.json(students))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res) =>{
    const student_id = Number(req.body.student_id);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const address = req.body.address;
    const gpa = Number(req.body.gpa) ;

    const newStudent = new Student({
        student_id,
        first_name,
        last_name,
        email,
        address,
        gpa
    });

    newStudent.save()
    .then(() => res.json('Student added!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').get((req,res) =>{
    Student.findById(req.params.id)
        .then(student => res.json(student))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req,res) =>{
    Student.findByIdAndDelete(req.params.id)
        .then(() => res.json("Student deleted"))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req,res) =>{
    Student.findById(req.params.id)
        .then(student => {
            student.student_id = req.body.student_id;
            student.first_name = req.body.first_name;
            student.last_name = req.body.last_name;
            student.email = req.body.email;
            student.address = req.body.address;
            student.gpa = Number(req.body.gpa) ;

            student.save()
                .then(() => res.json("Student information updated"))
                .catch(err => res.status(400).json('Error:' + err));

        })
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;