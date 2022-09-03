const mongoose = require("mongoose");


const appoinmentSchema = new mongoose.Schema({
  bookingDate:{
    type: String,
    required: true,
  },
  name:{
    type: String,
    
  },

});

module.exports = mongoose.model("Appoinment", appoinmentSchema);