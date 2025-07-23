const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const db = require('../db');

// @route   GET api/profile/me
// @desc    جلب بيانات المستخدم الحالي
// @access  Private
router.get('/me', authMiddleware, async (req, res) => {
    try {
        const userQuery = 'SELECT id, full_name, email, role, created_at FROM users WHERE id = $1';
        const { rows } = await db.query(userQuery, [req.user.id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'المستخدم غير موجود' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error('Profile fetch error:', error.message);
        res.status(500).send('خطأ في الخادم');
    }
});

module.exports = router;
