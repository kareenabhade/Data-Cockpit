const mongoose = require("mongoose");
const express = require('express');
const { getAllData, getFilteredData } = require("../Controller/dataController");
const router = express.Router();

router.get('/', getAllData);
router.post('/filter', getFilteredData);

module.exports = router;