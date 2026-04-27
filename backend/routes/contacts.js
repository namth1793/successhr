const express = require('express');
const router = express.Router();
const db = require('../db/init');

router.post('/', (req, res) => {
  const { name, company, phone, email, service, message } = req.body;
  if (!name || !phone) return res.status(400).json({ error: 'Họ tên và số điện thoại là bắt buộc' });
  const stmt = db.prepare(
    'INSERT INTO contacts (name, company, phone, email, service, message) VALUES (?, ?, ?, ?, ?, ?)'
  );
  const info = stmt.run(name, company || '', phone, email || '', service || '', message || '');
  res.json({ success: true, id: info.lastInsertRowid });
});

router.get('/', (req, res) => {
  const rows = db.prepare('SELECT * FROM contacts ORDER BY created_at DESC').all();
  res.json(rows);
});

module.exports = router;
