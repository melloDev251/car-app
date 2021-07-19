const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    carId: {
      type: String,
      required: true,
    },
    mark: {
      type: String,
      maxlength: 30,
      trim: true,
    },
    description: {
      type: String,
      maxlength: 2000,
      trim: true,
    },
    comments: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          text: String,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }  
);

module.exports = mongoose.model("car", carSchema);
 