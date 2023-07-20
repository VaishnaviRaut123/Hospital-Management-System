const express = require('express');
const router = express.Router();
const Patient = require('../Models/patient.js');

// Create a new patient
router.post('/patients', (req, res) => {
  const newPatient = new Patient(req.body);
  newPatient.save((err, patient) => {
    if (err) {
      res.status(500).json({ error: 'Failed to save the patient' });
    } else {
      res.status(201).json(patient);
    }
  });
});

// Get all patients
router.get('/patients', (req, res) => {
  Patient.find({}, (err, patients) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch patients' });
    } else {
      res.status(200).json(patients);
    }
  });
});

// Add more routes for updating and deleting patients

module.exports = router;
