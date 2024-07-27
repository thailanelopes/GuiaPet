const express = require('express');
const router = express.Router();
const { getEmergencies, createEmergency } = require('../controllers/emergencyController');

router.get('/', getEmergencies);
router.post('/', createEmergency);

module.exports = router;
