const express = require('express');
const cors = require('cors');
const { answersRouter } = require('./routers/answers');

require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(answersRouter);

app.listen(port, () => {
    console.log('Servers is up on port: ' + port);
});