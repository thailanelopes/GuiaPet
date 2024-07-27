const Emergency = require('../models/emergencyModel');

const getEmergencies = async (req, res) => {
    try {
        const emergencies = await Emergency.find();
        res.json(emergencies);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createEmergency = async (req, res) => {
    const emergency = new Emergency({
        title: req.body.title,
        description: req.body.description,
        steps: req.body.steps,
    });

    try {
        const newEmergency = await emergency.save();
        res.status(201).json(newEmergency);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getEmergencies,
    createEmergency,
};
