const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");
const auth = require("../middleware/auth");


// create a student
router.post('/addStudent',auth(['Admin', 'OfficeStaff']),studentController.addStudent);
// get all students
router.get('/getAllStudents',auth(['Admin', 'OfficeStaff','Librarian']),studentController.getAllStudents);
// update a student
router.put('/updateStudent/:id',auth(['Admin', 'OfficeStaff']),studentController.updateStudent);
// delete a student
router.delete('/deleteStudent/:id',auth(['Admin', 'OfficeStaff']),studentController.deleteStudent)

module.exports = router;
