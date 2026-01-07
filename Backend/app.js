const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();

const app = express();
const ConnectDB = require('./db/db');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;

/* -------------------- MIDDLEWARE -------------------- */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- DATABASE -------------------- */
ConnectDB();

/* -------------------- ROUTES -------------------- */
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('guru');
});

/* -------------------- SERVER -------------------- */
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
