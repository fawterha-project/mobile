import React from 'react';
import BottomNavigation from './BottomNavigation';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Svg, { Circle, Polyline } from 'react-native-svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { homeWithInvoicesStyles, colors } from './styles';

const HomeWithInvoicesScreen = ({ navigation }) => {
  return (
    <View style={homeWithInvoicesStyles.container}>
      <TouchableOpacity style={homeWithInvoicesStyles.notificationIcon}>
        <MaterialIcons name="notifications" size={24} color={colors.blue} />
      </TouchableOpacity>

      <Image
        source={require('./android/app/src/main/assets/images/fawterha.jpg')}
        style={homeWithInvoicesStyles.logo}
        resizeMode="contain"
      />

      <Text style={homeWithInvoicesStyles.helloText}>👋 أهلاً أريام</Text>

      <Text style={homeWithInvoicesStyles.subText}>
        خلك متابع فواتيرك بسهولة اليوم
      </Text>

      <View style={homeWithInvoicesStyles.summaryCard}>
        <View style={homeWithInvoicesStyles.monthBadge}>
          <Text style={homeWithInvoicesStyles.monthBadgeText}>هذا الشهر </Text>
        </View>

        <Text style={homeWithInvoicesStyles.summaryTitle}>
          إجمالي المصروفات
        </Text>

        <Text style={homeWithInvoicesStyles.amount}>3,450</Text>

        <Text style={homeWithInvoicesStyles.currency}>ريال</Text>

        <Svg
          width="185"
          height="58"
          style={homeWithInvoicesStyles.summaryChart}
        >
          <Polyline
            points="
              0,40
              18,30
              36,16
              54,38
              72,25
              90,2
              108,20
              126,34
              144,18
              162,1
              180,14
            "
            fill="none"
            stroke={colors.white}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {[
            [0, 40],
            [18, 30],
            [36, 16],
            [54, 38],
            [72, 25],
            [90, 2],
            [108, 20],
            [126, 34],
            [144, 18],
            [162, 1],
            [180, 14],
          ].map(([x, y], index) => (
            <Circle key={index} cx={x} cy={y} r="2.4" fill={colors.white} />
          ))}

          <Polyline
            points="0,52 180,52"
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            strokeWidth="1"
          />
        </Svg>

        <View style={homeWithInvoicesStyles.progressNumbers}>
          <Text style={homeWithInvoicesStyles.progressText}>1</Text>
          <Text style={homeWithInvoicesStyles.progressText}>10</Text>
          <Text style={homeWithInvoicesStyles.progressText}>20</Text>
        </View>

        <View style={homeWithInvoicesStyles.averageBadge}>
          <Text style={homeWithInvoicesStyles.averagePercent}>12%</Text>

          <Text style={homeWithInvoicesStyles.averageText}>
            عن الشهر الماضي
          </Text>
        </View>
      </View>

      <View style={homeWithInvoicesStyles.chartCard}>
        <Text style={homeWithInvoicesStyles.sectionTitle}>فئات الإنفاق</Text>

        <View style={homeWithInvoicesStyles.chartContainer}>
          <View style={homeWithInvoicesStyles.chartWrapper}>
            <Svg width="140" height="140" viewBox="0 0 140 140">
              {/* المقاضي 42% */}
              <Circle
                cx="70"
                cy="70"
                r="45"
                stroke="#34C759"
                strokeWidth="18"
                fill="none"
                strokeDasharray="119 164"
                strokeDashoffset="0"
                rotation="-90"
                origin="70,70"
              />

              {/* المطاعم 28% */}
              <Circle
                cx="70"
                cy="70"
                r="45"
                stroke="#1473E6"
                strokeWidth="18"
                fill="none"
                strokeDasharray="79 204"
                strokeDashoffset="-119"
                rotation="-90"
                origin="70,70"
              />

              {/* التسوق 15% */}
              <Circle
                cx="70"
                cy="70"
                r="45"
                stroke="#8B5CF6"
                strokeWidth="18"
                fill="none"
                strokeDasharray="42 241"
                strokeDashoffset="-198"
                rotation="-90"
                origin="70,70"
              />

              {/* النقل 15% */}
              <Circle
                cx="70"
                cy="70"
                r="45"
                stroke="#F4B400"
                strokeWidth="18"
                fill="none"
                strokeDasharray="43 240"
                strokeDashoffset="-240"
                rotation="-90"
                origin="70,70"
              />
            </Svg>

            <View style={homeWithInvoicesStyles.chartCenter}>
              <Text style={homeWithInvoicesStyles.chartCenterAmount}>2500</Text>

              <Text style={homeWithInvoicesStyles.chartCenterCurrency}>
                ريال
              </Text>
            </View>
          </View>

          <View style={homeWithInvoicesStyles.categoriesGrid}>
            {[
              {
                icon: 'shopping-basket',
                name: 'المقاضي',
                amount: '1200',
                dot: homeWithInvoicesStyles.greenDot,
                iconColor: '#22C55E',
                bgColor: '#EAFBF0',
              },

              {
                icon: 'restaurant',
                name: 'مطاعم',
                amount: '800',
                dot: homeWithInvoicesStyles.blueDot,
                iconColor: '#2563FF',
                bgColor: '#EEF4FF',
              },

              {
                icon: 'shopping-bag',
                name: 'التسوق',
                amount: '400',
                dot: homeWithInvoicesStyles.purpleDot,
                iconColor: '#A020F0',
                bgColor: '#F6EAFF',
              },

              {
                icon: 'directions-bus',
                name: 'النقل',
                amount: '150',
                dot: homeWithInvoicesStyles.yellowDot,
                iconColor: '#FFB000',
                bgColor: '#FFF6E7',
              },

              {
                icon: 'favorite-border',
                name: 'الصحة',
                amount: '0',
                dot: homeWithInvoicesStyles.redDot,
                iconColor: '#FF3B4A',
                bgColor: '#FFECEF',
              },

              {
                icon: 'event',
                name: 'الالتزامات',
                amount: '0',
                dot: homeWithInvoicesStyles.cyanDot,
                iconColor: '#12C6D7',
                bgColor: '#EAFBFC',
              },

              {
                icon: 'more-horiz',
                name: 'أخرى',
                amount: '0',
                dot: homeWithInvoicesStyles.grayDot,
                iconColor: '#8C8FA1',
                bgColor: '#F3F3F6',
              },
            ].map((item, index) => (
              <View
                key={index}
                style={[
                  homeWithInvoicesStyles.categoryItem,
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
                    homeWithInvoicesStyles.categoryCircle,
                    { backgroundColor: item.bgColor },
                  ]}
                >
                  <MaterialIcons
                    name={item.icon}
                    size={20}
                    color={item.iconColor}
                  />
                </View>

                <Text style={homeWithInvoicesStyles.categoryName}>
                  {item.name}
                </Text>

                <View style={homeWithInvoicesStyles.amountRow}>
                  <Text style={homeWithInvoicesStyles.categoryAmount}>
                    {item.amount}
                  </Text>

                  <Text style={homeWithInvoicesStyles.categoryCurrency}>
                    ريال
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={homeWithInvoicesStyles.expenseCard}>
        <Text style={homeWithInvoicesStyles.expenseCardTitle}>
          الأعلى إنفاقًا
        </Text>

        <Text style={homeWithInvoicesStyles.highExpenseSmallText}>
          أنت تصرف أكثر من المعتاد على
        </Text>

        <Text style={homeWithInvoicesStyles.emptyTitle}>المقاضي </Text>

        <Text style={homeWithInvoicesStyles.emptyDescription}>
          حاول تخفيض 20% لتوفر 700 ريال
        </Text>
      </View>

      <Image
        source={require('./android/app/src/main/assets/images/basket.png')}
        style={homeWithInvoicesStyles.basketImage}
        resizeMode="contain"
      />

      <View style={homeWithInvoicesStyles.invoiceCard}>
        <View style={homeWithInvoicesStyles.invoiceHeader}>
          <Text style={homeWithInvoicesStyles.invoiceSectionTitle}>
            آخر الفواتير{' '}
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('Invoices')}>
            <Text style={homeWithInvoicesStyles.showAllText}>عرض الكل</Text>
          </TouchableOpacity>
        </View>

        {[
          {
            store: 'H & M',
            amount: '320',
            time: '10:30 ص',
            logo: require('./android/app/src/main/assets/images/hm.jpg'),
          },

          {
            store: 'اكسترا',
            amount: '1000',
            time: '4:00 م',
            logo: require('./android/app/src/main/assets/images/extra.jpg'),
          },
        ].map((invoice, index) => (
          <TouchableOpacity
            key={index}
            style={homeWithInvoicesStyles.invoiceRow}
            onPress={() => navigation.navigate('InvoiceDetails')}
          >
            <View style={homeWithInvoicesStyles.invoiceRight}>
              <Image
                source={invoice.logo}
                style={homeWithInvoicesStyles.invoiceLogo}
                resizeMode="contain"
              />

              <View style={homeWithInvoicesStyles.invoiceInfo}>
                <Text style={homeWithInvoicesStyles.invoiceStore}>
                  {invoice.store}
                </Text>

                <Text style={homeWithInvoicesStyles.invoiceDate}>
                  أمس · {invoice.time}
                </Text>
              </View>
            </View>

            <View style={homeWithInvoicesStyles.invoiceAmountBox}>
              <Text style={homeWithInvoicesStyles.invoiceAmount}>
                {invoice.amount}
              </Text>

              <Text style={homeWithInvoicesStyles.invoiceCurrency}>ريال</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <BottomNavigation navigation={navigation} />
    </View>
  );
};

export default HomeWithInvoicesScreen;
