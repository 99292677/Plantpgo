const express = require('express');
const router = express.Router();
const db = require('../firebase-config');

// ดึงข้อมูลทั้งหมด
router.get('/', async (req, res) => {
  const snapshot = await db.collection('itinerary').get();
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.json(data);
});

// เพิ่มหรือแก้ไขกิจกรรม
router.post('/', async (req, res) => {
  const { date, activity } = req.body;
  await db.collection('itinerary').add({ date, activity });
  res.send('กิจกรรมถูกบันทึก');
});

// ลบกิจกรรม
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await db.collection('itinerary').doc(id).delete();
  res.send('กิจกรรมถูกลบ');
});

module.exports = router;