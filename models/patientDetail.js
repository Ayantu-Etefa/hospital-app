const mongoose = require('mongoose')

const earlierDiagnosticSchema = new mongoose.Schema(
    {
        diagnosedWith : {
            type: String,
        },
        medicationGiven : {
            type: String,
        }
    },
    {
        timestamps: true
    })
const patientDetailSchema = new mongoose.Schema({
    patientName :{
        type: String, 
    },
    patientAge :{
        type: String,
    },
    patientWeight :{
        type: String,
    },
    patientHeight :{
        type: String,
    },
    patientBloodType :{
        type: String,
    },
    patientGender :{
        type: String,
    },
    earlierDiagnostic : [earlierDiagnosticSchema],
}, {
    timestamps: true
})

const PatientDetail = mongoose.model('PatientDetail', patientDetailSchema )

module.exports = PatientDetail