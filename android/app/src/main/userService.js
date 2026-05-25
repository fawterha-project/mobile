import api from './axiosConfig';

// دالة جلب بيانات الملف الشخصي (Profile)
export const getProfile = async () => {
  // ما يحتاج نرسل التوكن يدوياً لأن ملف axiosConfig يتكفل بالموضوع تلقائياً
  const response = await api.get('/users/profile');
  return response.data; // بيرجع بيانات المستخدم من السيرفر
};