import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { faqStyles, colors } from './styles';
import Support from './Support';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FAQScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [showSupport, setShowSupport] = useState(false);

  const questions = [
    {
      question: 'كيف أسجل في التطبيق؟',
      answer: 'تقدر تسجل بإدخال بياناتك الأساسية ثم تأكيد الحساب.',
    },
    {
      question: 'ماهو فوترها؟',
      answer:
        'فوترها هو تطبيق ذكي للفواتير والإيصالات الإلكترونية يساعد المستخدمين على حفظ وتنظيم وتتبع فواتيرهم في مكان واحد بشكل آمن. يوفر التطبيق تقارير وتحليلات للمصاريف لتسهيل إدارة النفقات ومتابعتها بشكل أفضل.',
    },
    {
      question: 'ربط التطبيق مع أجهزة نقاط البيع',
      answer:
        'يتم الربط مع أجهزة نقاط البيع المدعومة بشكل آمن وسهل.',
    },
    {
      question: 'كيف أضيف فاتورة جديدة؟',
      answer:
        'من زر الإضافة يمكنك تصوير الفاتورة أو مسح الباركود أو رفع الفاتورة من الملفات.',
    },
    {
      question: 'هل التطبيق آمن؟',
      answer:
        'نعم، بياناتك محفوظة ويتم التعامل معها بسرية.',
    },
    {
      question: 'كل شي عن فواتيرك',
      answer:
        'تقدر تتابع فواتيرك وتصنفها وتبحث عنها من مكان واحد.',
    },
  ];

  return (
    <View style={faqStyles.container}>
      <TouchableOpacity
        style={faqStyles.backIcon}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={colors.blue}
        />
      </TouchableOpacity>

      <Text style={faqStyles.title}>
        وش تحتاج تعرف؟
      </Text>

      <Text style={faqStyles.subtitle}>
        جمعنا لك أهم الأسئلة اللي تجينا دايمًا
      </Text>

      <View style={faqStyles.listContainer}>
        {questions.map((item, index) => {
          const active = activeIndex === index;

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.8}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut
                );

                setActiveIndex(active ? null : index);
              }}
              style={[
                faqStyles.questionBox,
                active && faqStyles.questionBoxActive,
              ]}
            >
              <View style={faqStyles.questionHeader}>
                <MaterialIcons
                  name={
                    active
                      ? 'keyboard-arrow-up'
                      : 'keyboard-arrow-down'
                  }
                  size={22}
                  color={
                    active
                      ? colors.white
                      : colors.blue
                  }
                />

                <Text
                  style={[
                    faqStyles.questionText,
                    active && faqStyles.questionTextActive,
                  ]}
                >
                  {item.question}
                </Text>
              </View>

              {active && (
                <Text style={faqStyles.answerText}>
                  {item.answer}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={faqStyles.contactContainer}>
        <Text style={faqStyles.contactText}>
          ما لقيت إجابتك؟
        </Text>

        <TouchableOpacity
          onPress={() => setShowSupport(true)}
        >
          <Text style={faqStyles.contactLink}>
            راسلنا
          </Text>
        </TouchableOpacity>
      </View>

      <Support
        visible={showSupport}
        onClose={() => setShowSupport(false)}
      />
    </View>
  );
};

export default FAQScreen;