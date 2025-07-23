const express = require('express');
const router = express.Router();
const requestController = require('../controllers/requestController');
const authMiddleware = require('../middleware/auth');

// @route   GET api/requests
// @desc    جلب كل طلبات المستخدم الحالي
// @access  Private
router.get('/', authMiddleware, requestController.getUserRequests);

// @route   POST api/requests
// @desc    إنشاء طلب جديد وبدء محادثة
// @access  Private
router.post('/', authMiddleware, requestController.createRequest);

// @route   GET api/requests/:requestId
// @desc    جلب طلب معين مع سجل المحادثة
// @access  Private
router.get('/:requestId', authMiddleware, requestController.getRequestById);

// @route   POST api/requests/:requestId/messages
// @desc    إضافة رسالة جديدة إلى محادثة
// @access  Private
router.post('/:requestId/messages', authMiddleware, requestController.addMessage);

// @route   GET api/requests/:requestId/offers
// @desc    جلب كل العروض لطلب معين
// @access  Private
router.get('/:requestId/offers', authMiddleware, requestController.getRequestOffers);

module.exports = router;
