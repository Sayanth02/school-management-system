const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();
const feeController = require('../controllers/feeController')

// add a fee record
router.post('/addFee',auth(['Admin','OfficeStaff']),feeController.addFeeHistory)
// get all fee history
router.get('/getAllFees', auth(['Admin', 'OfficeStaff','Librarian']),feeController.getAllFeeHistory)
// get fee history by student
router.get('/getFeeHistory/:id',auth(['Admin','OfficeStaff']),feeController.getFeesHistoryByStudent)
// update a fee history
router.put('/updateFee/:id',auth(['Admin','OfficeStaff']),feeController.updateFeesRecord)
// delete a fee record
router.delete('/deleteFee/:id',auth(['Admin','OfficeStaff']),feeController.deleteFeesRecord)

module.exports = router;