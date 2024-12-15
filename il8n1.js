// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Why Start Your Fitness Journey with MoFit Today?":
            "Why Start Your Fitness Journey with MoFit Today?",
          "Customized Training:": "Customized Training:",
          "Your program adapts to your choices and needs, ensuring a perfect fit for you.":
            "Your program adapts to your choices and needs, ensuring a perfect fit for you.",
          "Expert Monitoring:": "Expert Monitoring:",
          "Our team of doctors and specialists ensures you achieve the best results in record time.":
            "Our team of doctors and specialists ensures you achieve the best results in record time.",
          "Holistic Approach:": "Holistic Approach:",
          "Experience a comprehensive program designed to make fitness easy, just as if we were with you in the gym.":
            "Experience a comprehensive program designed to make fitness easy, just as if we were with you in the gym.",
        },
      },
      ar: {
        translation: {
          "Why Start Your Fitness Journey with MoFit Today?": "لماذا تبدأ رحلتك الرياضية مع موفيت اليوم؟",
          "Customized Training:": "تدريب مخصص:",
          "Your program adapts to your choices and needs, ensuring a perfect fit for you.":
            "برنامجك يتكيف مع اختياراتك واحتياجاتك، مما يضمن توافقًا مثاليًا لك.",
          "Expert Monitoring:": "مراقبة خبراء:",
          "Our team of doctors and specialists ensures you achieve the best results in record time.":
            "فريقنا من الأطباء والمتخصصين يضمن لك تحقيق أفضل النتائج في وقت قياسي.",
          "Holistic Approach:": "نهج شامل:",
          "Experience a comprehensive program designed to make fitness easy, just as if we were with you in the gym.":
            "اختبر برنامجًا شاملاً مصممًا لجعل اللياقة البدنية سهلة، كما لو كنا معك في الصالة الرياضية.",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
