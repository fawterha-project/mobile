import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors, faqStyles as styles } from './styles';

const FaqScreen = ({ navigation }) => {
  const [openItem, setOpenItem] = useState(2);

  const faqData = [
    {
      id: 1,
      question: 'أسئلة عامة',
      answer: 'ماهي ميزة التطبيق',
    },
    {
      id: 2,
      question: 'ماهو فواتيرها؟',
      answer:
        'تطبيق يصدر فواتيرك الإلكترونية من نقاط البيع بصيغتها، ويخزنها بأمان، بدون ورق وبدون تعب.',
    },
    {
      id: 3,
      question: 'ربط التطبيق مع أجهزة نقاط البيع',
      answer: '',
    },
    {
      id: 4,
      question: 'كل شي عن فواتيرك',
      answer: '',
    },
    {
      id: 5,
      question: 'كل شي عن فواتيرنا',
      answer: '',
    },
    {
      id: 6,
      question: 'كل شي عن فواتيرها',
      answer: '',
    },
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.lightBg} />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back" size={30} color={colors.purple} />
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>محتار؟</Text>
        <Text style={styles.subtitle}>هنا تلقى الجواب!</Text>

        <View style={styles.faqList}>
          {faqData.map((item) => {
            const isOpen = openItem === item.id;

            return (
              <View key={item.id} style={styles.faqItemWrapper}>
                <TouchableOpacity
                  style={[styles.faqItem, isOpen && styles.faqItemOpen]}
                  onPress={() => toggleItem(item.id)}
                >
                  <MaterialIcons
                    name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                    size={24}
                    color="#fff"
                  />
                  <Text style={styles.faqQuestion}>{item.question}</Text>
                </TouchableOpacity>

                {isOpen && item.answer !== '' && (
                  <View style={styles.answerBox}>
                    <Text style={styles.answerText}>{item.answer}</Text>
                  </View>
                )}
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          style={styles.bottomButton}
          onPress={() => navigation.navigate('SupportChatScreen')}
        >
          <Text style={styles.bottomButtonText}>تواصل مع الدعم</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FaqScreen;