const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middleware/admin');
const db = require('../db');

// @route   GET api/admin/users
// @desc    جلب قائمة جميع المستخدمين
// @access  Admin Only
router.get('/users', adminMiddleware, async (req, res) => {
    try {
        const { rows } = await db.query('SELECT id, full_name, email, role, created_at FROM users ORDER BY created_at DESC');
        res.json(rows);
    } catch (error) {
        console.error('Admin fetch users error:', error.message);
        res.status(500).send('خطأ في الخادم');
    }
});

module.exports = router;
