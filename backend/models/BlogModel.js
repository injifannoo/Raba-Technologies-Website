const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,  // Ensures title is provided when creating a blog
    },
    content: {
      type: String,
      required: true,  // Ensures content is provided
    },
    conclusion: {
      type: String,
      required: true,  // Ensures content is provided
    },
    image: { type: String },
    tags: {
      type: String,
      required: true,  // Ensures author is specified
    },
    author: {
      type: String,
      required: true,  // Ensures author is specified
    },
    status: { type: String, enum: ['draft', 'published'], default: 'draft' },

    createdAt: {
      type: Date,
      default: Date.now,  // Default date to the current date and time
    },
  },
  { timestamps: true }  // Adds createdAt and updatedAt fields automatically
);

module.exports = mongoose.model("Blog", blogSchema);
