// authController.js
exports.register = (req, res) => {
  // منطق تسجيل مستخدم جديد
  res.json({ message: 'تم تسجيل المستخدم بنجاح' });
};

exports.login = (req, res) => {
  // منطق تسجيل الدخول
  res.json({ message: 'تم تسجيل الدخول بنجاح' });
};
