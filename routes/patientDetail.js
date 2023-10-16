const express = require('express')
const PatientDetail = require('../models/patientDetail')
const router = express.Router()

router.post('/addPatientDetail', (req, res) =>{
    const pateintDetail = new PatientDetail(req.body)
    console.log(req.body);

    pateintDetail.save().then(() => {
        res.status(201).send(pateintDetail)
    }).catch((e) =>{
        res.sendStatus(400)
    })
})

router.get('/fetchPatientsList/', async (req, res) =>{
    try{
        const patientDetail = await PatientDetail.find()
        console.log(patientDetail)
        res.status(201).send(patientDetail)
    }catch(e){
        res.status(502)
        console.log(res)
    }
})

module.exports = router