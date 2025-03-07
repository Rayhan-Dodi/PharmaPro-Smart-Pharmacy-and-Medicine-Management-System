const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
    customerId: Number,
    doctorName: String,
    prescriptionFile: String,
    verified: Boolean,
});

module.exports = mongoose.model("Prescription", PrescriptionSchema);
