const mongoose = require('mongoose');

const FeesHistorySchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  feeType: { type: String, required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, required: true },
  remarks: { type: String }
});

module.exports = mongoose.model('FeesHistory', FeesHistorySchema);
