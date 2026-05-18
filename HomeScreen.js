import React from 'react';
import BottomNavigation from './BottomNavigation';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Svg, { Circle } from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { homeStyles, colors } from './styles';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={homeStyles.container}>
      <TouchableOpacity style={homeStyles.notificationIcon}>
        <MaterialIcons name="notifications" size={24} color={colors.blue} />
      </TouchableOpacity>

      <Image
        source={require('./android/app/src/main/assets/images/fawterha.jpg')}
        style={homeStyles.logo}
        resizeMode="contain"
      />

      <Text style={homeStyles.helloText}>👋 أهلاً أريام</Text>

      <Text style={homeStyles.subText}>لنبدأ تنظيم مصروفاتك بسهولة اليوم</Text>

      <View style={homeStyles.summaryCard}>
        <View style={homeStyles.monthBadge}>
          <Text style={homeStyles.monthBadgeText}>هذا الشهر </Text>
        </View>

        <Text style={homeStyles.summaryTitle}>إجمالي المصروفات</Text>

        <Text style={homeStyles.amount}>0</Text>

        <Text style={homeStyles.currency}>ريال</Text>

        <View style={homeStyles.progressLine}>
          <View style={homeStyles.progressDot} />
        </View>

        <View style={homeStyles.progressNumbers}>
          <Text style={homeStyles.progressText}>1</Text>
          <Text style={homeStyles.progressText}>10</Text>
          <Text style={homeStyles.progressText}>20</Text>
        </View>

        <View style={homeStyles.averageBadge}>
          <Text style={homeStyles.averageText}>0% عن الشهر الماضي</Text>
        </View>
      </View>

      <View style={homeStyles.chartCard}>
        <Text style={homeStyles.sectionTitle}>فئات الإنفاق</Text>

        <View style={homeStyles.chartContainer}>
          <View style={homeStyles.chartWrapper}>
            <Svg width="110" height="110">
              <Circle
                cx="55"
                cy="55"
                r="38"
                stroke={colors.lightGray}
                strokeWidth="18"
                fill="none"
              />
            </Svg>

            <View style={homeStyles.chartCenter}>
              <Text style={homeStyles.chartCenterTitle}>إجمالي</Text>

              <Text style={homeStyles.chartCenterAmount}>0</Text>

              <Text style={homeStyles.chartCenterCurrency}>ريال</Text>
            </View>
          </View>

          <View style={homeStyles.categoriesGrid}>
            {[
              {
                icon: 'shopping-basket',
                name: 'المقاضي',
                dot: homeStyles.greenDot,
                iconColor: '#22C55E',
                bgColor: '#EAFBF0',
              },

              {
                icon: 'restaurant',
                name: 'مطاعم ',
                dot: homeStyles.blueDot,
                iconColor: '#2563FF',
                bgColor: '#EEF4FF',
              },

              {
                icon: 'shopping-bag',
                name: 'التسوق',
                dot: homeStyles.purpleDot,
                iconColor: '#A020F0',
                bgColor: '#F6EAFF',
              },

              {
                icon: 'directions-bus',
                name: 'النقل',
                dot: homeStyles.yellowDot,
                iconColor: '#FFB000',
                bgColor: '#FFF6E7',
              },

              {
                icon: 'favorite-border',
                name: 'الصحة',
                dot: homeStyles.redDot,
                iconColor: '#FF3B4A',
                bgColor: '#FFECEF',
              },

              {
                icon: 'event',
                name: 'الالتزامات',
                dot: homeStyles.cyanDot,
                iconColor: '#12C6D7',
                bgColor: '#EAFBFC',
              },

              {
                icon: 'more-horiz',
                name: 'أخرى',
                dot: homeStyles.grayDot,
                iconColor: '#8C8FA1',
                bgColor: '#F3F3F6',
              },
            ].map((item, index) => (
              <View
                key={index}
                style={[
                  homeStyles.categoryItem,
                  (item.name === 'الصحة' ||
                    item.name === 'الالتزامات' ||
                    item.name === 'أخرى') && {
                    transform: [{ translateY: -4 }],
                  },
                ]}
              >
                <View style={item.dot} />

                <View
                  style={[
                    homeStyles.categoryCircle,
                    { backgroundColor: item.bgColor },
                  ]}
                >
                  <MaterialIcons
                    name={item.icon}
                    size={20}
                    color={item.iconColor}
                  />
                </View>

                <Text style={homeStyles.categoryName}>{item.name}</Text>

                <View style={homeStyles.amountRow}>
                  <Text style={homeStyles.categoryAmount}>0</Text>

                  <Text style={homeStyles.categoryCurrency}>ريال</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={homeStyles.expenseCard}>
        <Text style={homeStyles.expenseCardTitle}>الأعلى إنفاقًا</Text>

        <Text style={homeStyles.emptyTitle}>لا توجد بيانات</Text>

        <Text style={homeStyles.emptyDescription}>
          ابدأ بإضافة مصروفاتك لتتبع تحليلاتك
        </Text>
      </View>

      <Image
        source={require('./android/app/src/main/assets/images/basket.png')}
        style={homeStyles.basketImage}
        resizeMode="contain"
      />

      <View style={homeStyles.invoiceCard}>
        <View style={homeStyles.invoiceHeader}>
          <Text style={homeStyles.invoiceSectionTitle}>آخر الفواتير </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Invoices')}>
            <Text style={homeStyles.showAllText}>عرض الكل</Text>
          </TouchableOpacity>
        </View>

        <Image
          source={require('./android/app/src/main/assets/images/emptyReceipt.png')}
          style={homeStyles.receiptImage}
          resizeMode="contain"
        />

        <Text style={homeStyles.invoiceEmptyTitle}>لا توجد فواتير </Text>

        <Text style={homeStyles.invoiceEmptyDescription}>
          لم تقم بإضافة أي فواتير بعد
        </Text>
      </View>
      <BottomNavigation navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
