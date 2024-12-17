const express = require("express");
const auth = require("../middleware/auth");
const libraryController = require('../controllers/libraryController')
const router = express.Router();

// create library history
router.post('/addLibrary',auth(['Admin','Librarian']),libraryController.createLibraryRecord);
// get all library records
router.get('/getLibrary',auth(['Admin','Librarian','OfficeStaff']),libraryController.getAllLibraryRecords);
// get library record by student
router.get('/getHistory/:id', auth(['Admin', 'Librarian', 'OfficeStaff']),libraryController.getLibraryHistoryByStudent );
// update a library record
router.put('/updateLibrary/:id',auth(['Admin','Librarian']),libraryController.updateLibraryRecord);
// delete a record
router.delete('/deleteLibrary/:id',auth(['Admin','Librarian']),libraryController.deleteLibraryRecord);

module.exports = router;
