const LibraryHistory = require("../models/LibraryHistory");

// Create a new library record
exports.createLibraryRecord = async (req, res) => {
  const { student, bookName, borrowDate, returnDate, status } = req.body;
  try {
    const libraryHistory = new LibraryHistory({
      student,
      bookName,
      borrowDate,
      returnDate,
      status,
    });
    await libraryHistory.save();
    res.status(200).json({
      message: "Library history created successfully",
      libraryHistory,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all library reccords
exports.getAllLibraryRecords = async (req, res) => {
  try {
    const history = await LibraryHistory.find().populate("student");
    // res.status(200).json({ message: "history record", history });
    res.json(history);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get library history of a student
exports.getLibraryHistoryByStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const libraryHistory = await LibraryHistory.find({
      student: id,
    }).populate('student', '_id');
    res.json(libraryHistory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// update a library record
exports.updateLibraryRecord = async (req, res) => {
  const { id } = req.params;
  const { student, bookName, borrowDate, returnDate, status } = req.body;
  try {
    const history = await LibraryHistory.findByIdAndUpdate(
      id,
      { student, bookName, borrowDate, returnDate, status },
      { new: true }
    );
    res.status(200).json({ history });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a library record
exports.deleteLibraryRecord = async (req, res) => {
  const { id } = req.params;
  try {
    await LibraryHistory.findByIdAndDelete(id);
    res.json({ message: "Library record deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
