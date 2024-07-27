const Activity = require('../models/activityModel');

const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        res.json(activities);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createActivity = async (req, res) => {
    const activity = new Activity({
        title: req.body.title,
        description: req.body.description,
        tutorials: req.body.tutorials,
    });

    try {
        const newActivity = await activity.save();
        res.status(201).json(newActivity);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getActivities,
    createActivity,
};
