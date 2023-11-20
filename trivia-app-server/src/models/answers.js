const mongoose = require("mongoose");

const answersSchema = new mongoose.Schema(
  {
    answers: [
      {
        correctAnswer: {
          type: String,
          required: true,
        },
        id: {
          type: Number,
          required: true,
        },
        question: {
          type: String,
          required: true,
        },
        userAnswer: {
          type: String,
          required: true,
        },
      },
    ],
    userId: {
      type: String,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Answers = mongoose.model("Answers", answersSchema);

// module.exports = User;
module.exports = {
  Answers,
};
