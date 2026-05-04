import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { expenseRecordStyles as styles, colors } from './styles';

const expenses = [
  {
    id: '1',
    receipt: 'بقالة النهدي',
    category: 'النهدي',
    subCategory: 'طعام',
    amount: '65 ريال',
    date: '13 يونيو',
  },
  {
    id: '2',
    receipt: 'H&M',
    category: 'H&M',
    subCategory: 'ملابس',
    amount: '310 ريال',
    date: '14 يونيو',
  },
  {
    id: '3',
    receipt: 'إكسترا',
    category: 'إكسترا',
    subCategory: 'إلكترونيات',
    amount: '1,600 ريال',
    date: '25 مايو',
  },
  {
    id: '4',
    receipt: 'Starbucks',
    category: 'Starbucks',
    subCategory: 'طعام',
    amount: '18 ريال',
    date: '25 مايو',
  },
];

export default function ExpenseRecordScreen({ navigation }) {
  const renderExpenseItem = ({ item }) => {
    return (
      <View style={styles.expenseCard}>
        <View style={styles.receiptColumn}>
          <Text style={styles.cardMainText}>{item.receipt}</Text>
        </View>

        <View style={styles.categoryColumn}>
          <Text style={styles.cardMainText}>{item.category}</Text>
          <Text style={styles.cardSubText}>{item.subCategory}</Text>
        </View>

        <View style={styles.amountColumn}>
          <Text style={styles.cardMainText}>{item.amount}</Text>
          <Text style={styles.cardSubText}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Icon name="arrow-back" size={28} color={colors.purple} />
      </TouchableOpacity>

      <Text style={styles.title}>سجل المصاريف</Text>

      <View style={styles.bottomCard}>
        <TextInput
          style={styles.searchInput}
          placeholder="ابحث هنا"
          placeholderTextColor="#8F8A96"
          textAlign="right"
        />

        <View style={styles.headerRow}>
          <Text style={styles.headerText}>إيصال</Text>
          <Text style={styles.headerText}>الفئة</Text>
          <Text style={styles.headerText}>المبلغ</Text>
        </View>

        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id}
          renderItem={renderExpenseItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />

        <TouchableOpacity style={styles.downArrowButton} activeOpacity={0.7}>
          <Text style={styles.downArrow}>⌄</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.summaryButton} activeOpacity={0.8}>
          <Text style={styles.summaryButtonText}>ملخص النفقات</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}