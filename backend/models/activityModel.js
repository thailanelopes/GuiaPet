const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tutorials: { type: [String], required: true },
});

module.exports = mongoose.model('Activity', activitySchema);
