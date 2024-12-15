// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // استخدام مكتبة React
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About",
          contact: "Contact Us",
          programs: "Programs",
          packages: "Packages",
          transfers: "Transfers",
          "Are you ready to start the journey and reach the treasure?": "Are you ready to start the journey and reach the treasure?",
          "Prepare yourself and join thousands of young people in the most powerful and enjoyable adventure with a comprehensive training program that will help you become the best version of yourself under the supervision of a complete team of specialized doctors":
            "Prepare yourself and join thousands of young people in the most powerful and enjoyable adventure with a comprehensive training program that will help you become the best version of yourself under the supervision of a complete team of specialized doctors",
          Definition: "Definition",
          Subscribe: "Subscribe",
          "Training Media": "Training Media",
          "Default Title": "Default Title",
        },
      },
      ar: {
        translation: {
          home: "الصفحة الرئيسية",
          about: "عن الموقع",
          contact: "اتصل بنا",
          programs: "البرامج",
          packages: "الباقات",
          transfers: "الانتقالات",
          "Are you ready to start the journey and reach the treasure?": "هل أنت مستعد لبدء الرحلة والوصول إلى الكنز؟",
          "Prepare yourself and join thousands of young people in the most powerful and enjoyable adventure with a comprehensive training program that will help you become the best version of yourself under the supervision of a complete team of specialized doctors":
            "استعد وانضم إلى آلاف الشباب في أقوى وأمتع مغامرة مع برنامج تدريبي شامل سيساعدك على أن تصبح أفضل نسخة من نفسك تحت إشراف فريق كامل من الأطباء المتخصصين",
          Definition: "التعريف",
          Subscribe: "اشترك",
          "Training Media": "وسائط التدريب",
          "Default Title": "العنوان الافتراضي",
        },
      },
    },
    lng: "en", // اللغة الافتراضية
    fallbackLng: "en", // عند فقد الترجمة
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
