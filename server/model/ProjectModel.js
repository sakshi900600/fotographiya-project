const { Schema, model } = require("mongoose");

const Projectschema = new Schema({
    wedding_name: String,
    Package: String,
    Date: Date,
    Mobile_Number: Number,
    months: Number,
    days: Number,
    hours: Number,
    miniutes: Number,
    pin: Number,
})

const Project = model('project', Projectschema)
module.exports = Project