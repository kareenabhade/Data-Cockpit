const Data = require('../models/data.js');

// Get all data
const getAllData = async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



const getFilteredData = async (req, res) => {
  try {
    const { filter, filterValue, criteria, criteriaValue } = req.body;
    
    const query = {};
    query[criteria] = criteriaValue;

    const update = {};
    update[filter] = filterValue;

    await Data.updateMany(query, { $set: update });

    const updatedData = await Data.find();

      return res.json({
        filter, filterValue, criteria, criteriaValue,
        data: updatedData,
      });
    
    
     
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};


module.exports = {
    getAllData,
    getFilteredData,
};




