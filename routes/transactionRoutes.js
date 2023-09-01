const express = require('express');
const { 
    addTransaction, 
    getAllTransactions,
    editTransaction,
    deleteTransaction 
} = require('../controllers/transactionCtrl');


//router object
const router = express.Router();

//routes

//addTransaction POST method
router.post('/add-transaction',addTransaction);

//editTransaction POST method
router.post('/edit-transaction',editTransaction);

//editTransaction POST method
router.post('/delete-transaction',deleteTransaction);

//getTransactions
router.post('/get-transaction',getAllTransactions);


module.exports = router;