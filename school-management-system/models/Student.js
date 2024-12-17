const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  standard: { type: String, required: true },
});

// Middleware to remove fee history records when a student is removed
studentSchema.pre('findOneAndDelete', async function (next) {
  try {
    const studentId = this.getQuery()["_id"];
    await mongoose.model('FeesHistory').deleteMany({ student: studentId });
    await mongoose.model('LibraryHistory').deleteMany({ student: studentId });
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = mongoose.model("Student", studentSchema);
