const express = require("express");
const { Answers } = require("../models/answers");

const router = new express.Router();

router.get("/answers", async (req, res) => {
  try {
    const answers = await Answers.find();
    res.send(answers);
  } catch (e) {
    res.status(401).send(e);
  }
});

router.post("/answers", async (req, res) => {
  const answers = new Answers(req.body);

  try {
    await answers.save();
    res.status(201).send(answers);
  } catch (error) {
    res.status(400).send({ error, message: error.message });
  }
});

module.exports = {
  answersRouter: router,
};
