const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5019;

app.use(cors());
app.use(express.json());

app.use('/api/contacts', require('./routes/contacts'));

app.get('/api/health', (req, res) => res.json({ status: 'ok', project: 'SuccessHR' }));

app.listen(PORT, () => console.log(`SuccessHR backend running on http://localhost:${PORT}`));
