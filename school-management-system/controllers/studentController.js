const Student = require("../models/Student");

// create a student
exports.addStudent = async (req, res) => {
  const { name, age, standard } = req.body;
  try {
    const student = new Student({ name, age, standard });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find()
    res.json(students);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update a student
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, age, standard } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(
      id,
      { name, age, standard },
      { new: true }
    );
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




// delete a student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findByIdAndDelete(id); 
    if (student) {
      res.status(200).json({ message: "Student and associated fee history records deleted successfully", student });
    } else {
      res.status(404).json({ message: "Student not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


