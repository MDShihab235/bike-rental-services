const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter service Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter service Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter service Price"],
    maxLength: [6, "Price cannot exceed 6 characters"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    required: [true, "Please Enter service Category"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  // Stock: {
  //   type: Number,
  //   required: [true, "Please Enter product Stock"],
  //   maxLength: [4, "Stock cannot exceed 4 characters"],
  //   default: 1,
  // },
  status: {
    type: String,
    // required: [true, "Please Enter service Status"],
    default:"Available"
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },

      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Service", serviceSchema);
