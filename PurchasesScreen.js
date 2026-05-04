import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { purchasesStyles } from './styles';

const purchasesData = [
  {
    id: 1,
    title: 'مكتبة جرير  ',
    amount: '123 ريال',
    logo: require('./android/app/src/main/assets/image/jarir.png'),
  },
  {
    id: 2,
    title: 'مقهى بارنز ',
    amount: '30 ريال',
    logo: require('./android/app/src/main/assets/image/hemi.png'),
  },
  {
    id: 3,
    title: 'بنده',
    amount: '346 ريال',
    logo: require('./android/app/src/main/assets/image/panda.png'),
  },
];

const returnsData = [
  {
    id: 1,
    title:'مكتبة جرير  ',
    after: 'بعد 5 أيام',
    logo: require('./android/app/src/main/assets/image/jarir.png'),
  },
  {
    id: 2,
    title: ' بنده  ',
    after: 'بعد 3 أيام',
    logo: require('./android/app/src/main/assets/image/panda.png'),
  },
];

const PurchaseCard = ({ title, subText, logo }) => {
  return (
    <View style={purchasesStyles.purchaseCard}>
      <View style={purchasesStyles.purchaseTextWrap}>
        <Text style={purchasesStyles.purchaseTitle}>{title}</Text>
        <Text style={purchasesStyles.purchaseSubText}>{subText}</Text>
      </View>

      <Image
        source={logo}
        style={purchasesStyles.storeLogo}
        resizeMode="contain"
      />
    </View>
  );
};

export default function PurchasesScreen() {
  return (
    <SafeAreaView style={purchasesStyles.container}>
      {/* Header */}
      <View style={purchasesStyles.header}>
        <TouchableOpacity style={purchasesStyles.menuButton}>
          <Feather name="menu" size={30} color="#E7E0E0" />
        </TouchableOpacity>

        <TouchableOpacity style={purchasesStyles.profileButton}>
          <Ionicons name="person-outline" size={25} color="#6B5AA8" />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={purchasesStyles.title}>مشترياتك</Text>

      {/* Monthly spending card */}
      <View style={purchasesStyles.spendingCard}>
        <View style={purchasesStyles.spendingRow}>
          <MaterialCommunityIcons
            name="cash"
            size={16}
            color="#2F2F44"
            style={purchasesStyles.cashIcon}
          />
          <Text style={purchasesStyles.spendingText}>
            أنفقت هذا الشهر 1,377 ريال
          </Text>
        </View>

        <View style={purchasesStyles.progressBarBg}>
          <View style={purchasesStyles.progressBarFill} />
        </View>

        <Text style={purchasesStyles.limitText}>الحد 2,000 ريال</Text>
      </View>

      {/* Category card */}
      <View style={purchasesStyles.categoryCard}>
        <View style={purchasesStyles.categoryRight}>
          <Text style={purchasesStyles.categoryText}>المصروف حسب الفئة</Text>
        </View>

   <View style={purchasesStyles.pieCircle}>
  <View style={purchasesStyles.pieSlice} />
</View>
      </View>

      {/* Recent purchases */}
      <Text style={purchasesStyles.sectionTitle}>المشتريات الحديثة</Text>

      {purchasesData.map(item => (
        <PurchaseCard
          key={item.id}
          title={item.title}
          subText={item.amount}
          logo={item.logo}
        />
      ))}

      {/* Return dates */}
      <Text style={purchasesStyles.sectionTitleReturn}>مواعيد الإرجاع</Text>

      {returnsData.map(item => (
        <PurchaseCard
          key={item.id}
          title={item.title}
          subText={item.after}
          logo={item.logo}
        />
      ))}

      {/* Bottom nav */}
      <View style={purchasesStyles.bottomNav}>
        <TouchableOpacity style={purchasesStyles.navItem}>
          <Ionicons name="document-text-outline" size={20} color="#2F2F44" />
          <Text style={purchasesStyles.navText}>إضافة فاتورة</Text>
        </TouchableOpacity>

        <TouchableOpacity style={purchasesStyles.navItem}>
          <Feather name="share-2" size={18} color="#2F2F44" />
          <Text style={purchasesStyles.navText}>مشاركة فاتورة</Text>
        </TouchableOpacity>

        <TouchableOpacity style={purchasesStyles.navItem}>
          <Feather name="search" size={20} color="#2F2F44" />
          <Text style={purchasesStyles.navText}>البحث</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}