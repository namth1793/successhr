const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5019;

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:5174', 'http://localhost:3000'];

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.some(o => origin.startsWith(o))) return cb(null, true);
    cb(new Error('Not allowed by CORS'));
  },
  credentials: true,
}));
app.use(express.json());

app.use('/api/contacts', require('./routes/contacts'));

app.get('/api/health', (req, res) => res.json({ status: 'ok', project: 'SuccessHR' }));

app.listen(PORT, () => console.log(`SuccessHR backend running on http://localhost:${PORT}`));
