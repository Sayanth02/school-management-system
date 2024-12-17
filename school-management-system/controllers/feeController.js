const FeeHistory = require("../models/FeeHistory");

// add a history record
exports.addFeeHistory = async (req, res) => {
  const { student, feeType, amount, paymentDate, remarks } = req.body;
  try {
    const feeHistory = new FeeHistory({
      student,
      feeType,
      amount,
      paymentDate,
      remarks,
    });
    await feeHistory.save();
    res.status(200).json({ Message: "Fee record added", feeHistory });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get all fee history
exports.getAllFeeHistory = async (req, res) => {
  try {
    const feeHistory = await FeeHistory.find().populate("student")
    res.json(feeHistory);
    // res.status(200).json({ message: "history record", feeHistory });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get FeesHistory By Student
exports.getFeesHistoryByStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const feeHistory = await FeeHistory.find({ student: id }).populate(
      "student",
      "_id"
    );
    res.status(200).json({ message: "history record", feeHistory });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a fees record
exports.updateFeesRecord = async (req, res) => {
  const { id } = req.params;
  const { feeType, amount, paymentDate, remarks } = req.body;
  try {
    const feesHistory = await FeeHistory.findByIdAndUpdate(
      id,
      { feeType, amount, paymentDate, remarks },
      { new: true }
    );
    res.json(feesHistory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a fees record
exports.deleteFeesRecord = async (req, res) => {
  const { id } = req.params;
  try {
    await FeeHistory.findByIdAndDelete(id);
    res.json({ message: "Fees record deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
