const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    end_year: { type: String, default: '' },
    intensity: { type: Number },
    sector: { type: String, default: '' },
    topic: { type: String, default: '' },
    insight: { type: String, default: '' },
    url: { type: String, default: '' },
    region: { type: String, default: '' },
    start_year: { type: String, default: '' },
    impact: { type: String, default: '' },
    added: { type: Date, default: Date.now },
    published: { type: Date, default: Date.now },
    country: { type: String, default: '' },
    relevance: { type: Number },
    pestle: { type: String, default: '' },
    source: { type: String, default: '' },
    title: { type: String, default: '' },
    likelihood: { type: Number }
}, { collection: 'dataVis' }); 

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;
