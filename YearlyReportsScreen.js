import React from 'react';
import BottomNavigation from './BottomNavigation';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LineChart } from 'react-native-chart-kit';
import Svg, { Circle } from 'react-native-svg';

import {
  yearlyReportsStyles,
  bottomNavStyles,
  profileStyles,
  colors,
} from './styles';

const BottomTab = ({ icon, label, active, onPress }) => (
  <TouchableOpacity
    style={bottomNavStyles.tabItem}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <MaterialIcons
      name={icon}
      size={22}
      color={active ? colors.blue: colors.white}
    />

    <Text style={[bottomNavStyles.tabText, active && bottomNavStyles.activeTabText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function YearlyReportsScreen({ navigation }) {
  return (
    <View style={yearlyReportsStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <View style={profileStyles.statusFake}>
        <Text style={profileStyles.timeText}>9:41</Text>

        <View style={profileStyles.statusIcons}>
          <MaterialIcons name="signal-cellular-4-bar" size={16} color={colors.black} />
          <MaterialIcons name="wifi" size={16} color={colors.black} />
          <MaterialIcons name="battery-full" size={18} color={colors.black} />
        </View>
      </View>

      <View style={yearlyReportsStyles.headerRow}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={32} color={colors.black} />
        </TouchableOpacity>

        <Text style={yearlyReportsStyles.title}>التقارير</Text>

        <View style={yearlyReportsStyles.headerSpace} />
      </View>

      <View style={yearlyReportsStyles.tabsRow}>
        <TouchableOpacity
          style={yearlyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Reports')}
        >
          <Text style={yearlyReportsStyles.tabText}>ملخص</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={yearlyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('WeeklyReports')}
        >
          <Text style={yearlyReportsStyles.tabText}>أسبوعي</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={yearlyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('MonthlyReports')}
        >
          <Text style={yearlyReportsStyles.tabText}>شهري</Text>
        </TouchableOpacity>

        <TouchableOpacity style={yearlyReportsStyles.tabBtnActive}>
          <Text style={yearlyReportsStyles.tabTextActive}>سنوي</Text>
        </TouchableOpacity>
      </View>

      <View style={yearlyReportsStyles.summaryCard}>
        <MaterialIcons
          name="bar-chart"
          size={70}
          color={colors.blue}
        />

        <View style={yearlyReportsStyles.summaryInfo}>
          <Text style={yearlyReportsStyles.summaryTitle}>إجمالي المصروفات</Text>

          <Text style={yearlyReportsStyles.summaryAmount}>2500 ريال</Text>

          <View style={yearlyReportsStyles.percentRow}>
            <Text style={yearlyReportsStyles.percentText}>↓ 15%</Text>
            <Text style={yearlyReportsStyles.summarySubText}>أقل من العام الماضي</Text>
          </View>
        </View>
      </View>

      <View style={yearlyReportsStyles.chartCard}>
        <View style={yearlyReportsStyles.chartHeader}>
          <Text style={yearlyReportsStyles.chartTitle}>تطور المصاريف</Text>

          <TouchableOpacity style={yearlyReportsStyles.daysBtn}>
            <Text style={yearlyReportsStyles.daysBtnText}>2025</Text>
          </TouchableOpacity>
        </View>

        <LineChart
          data={{
            labels: ['2021', '2022', '2023', '2024', '2025'],
            datasets: [{ data: [1100, 1500, 1450, 1500, 2846] }],
          }}
          width={Dimensions.get('window').width - 85}
          height={180}
          yAxisInterval={1}
          verticalLabelRotation={0}
          xLabelsOffset={-10}
          yLabelsOffset={10}
          bezier
          withInnerLines
          withOuterLines={false}
          withShadow
          fromZero
          chartConfig={{
            backgroundColor: '#FFFFFF',
            backgroundGradientFrom: '#FFFFFF',
            backgroundGradientTo: '#FFFFFF',
            decimalPlaces: 0,
            color: () => '#0052C9',
            labelColor: () => '#9CA3AF',
            propsForDots: {
              r: '4',
              strokeWidth: '2',
              stroke: '#0052C9',
            },
            propsForBackgroundLines: {
              stroke: '#E5E7EB',
            },
          }}
          style={yearlyReportsStyles.chartGraph}
        />
      </View>

      <View style={yearlyReportsStyles.categoryCard}>
        <Text style={yearlyReportsStyles.categoryTitle}>فئات الإنفاق</Text>

        <View style={yearlyReportsStyles.categoryContainer}>
          <View style={yearlyReportsStyles.donutWrapper}>
            <Svg width="150" height="150" viewBox="0 0 150 150">
              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#22C55E"
                strokeWidth="28"
                fill="none"
                strokeDasharray="101 314"
                strokeDashoffset="0"
              />

              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#2563EB"
                strokeWidth="28"
                fill="none"
                strokeDasharray="78 314"
                strokeDashoffset="-101"
              />

              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#8B5CF6"
                strokeWidth="28"
                fill="none"
                strokeDasharray="55 314"
                strokeDashoffset="-179"
              />

              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#F59E0B"
                strokeWidth="28"
                fill="none"
                strokeDasharray="33 314"
                strokeDashoffset="-234"
              />

              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#F43F5E"
                strokeWidth="28"
                fill="none"
                strokeDasharray="22 314"
                strokeDashoffset="-267"
              />

              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#06B6D4"
                strokeWidth="28"
                fill="none"
                strokeDasharray="16 314"
                strokeDashoffset="-289"
              />

              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#9CA3AF"
                strokeWidth="28"
                fill="none"
                strokeDasharray="9 314"
                strokeDashoffset="-305"
              />
            </Svg>

            <View style={yearlyReportsStyles.donutInner}>
              <Text style={yearlyReportsStyles.donutAmount}>2,846</Text>
              <Text style={yearlyReportsStyles.donutCurrency}>ريال</Text>
            </View>
          </View>

          <View style={yearlyReportsStyles.categoriesGrid}>
            {[
              {
                icon: 'shopping-basket',
                name: 'مواد غذائية',
                amount: '1000',
                iconColor: '#22C55E',
                bgColor: '#EAFBF0',
                dotColor: '#22C55E',
              },
              {
                icon: 'restaurant',
                name: 'مطاعم',
                amount: '700',
                iconColor: '#2563EB',
                bgColor: '#EEF4FF',
                dotColor: '#2563EB',
              },
              {
                icon: 'shopping-bag',
                name: 'التسوق',
                amount: '300',
                iconColor: '#8B5CF6',
                bgColor: '#F5EEFF',
                dotColor: '#8B5CF6',
              },
              {
                icon: 'directions-bus',
                name: 'النقل',
                amount: '300',
                iconColor: '#F59E0B',
                bgColor: '#FFF7E8',
                dotColor: '#F59E0B',
              },
              {
                icon: 'favorite-border',
                name: 'الصحة',
                amount: '200',
                iconColor: '#F43F5E',
                bgColor: '#FFF1F2',
                dotColor: '#F43F5E',
              },
              {
                icon: 'event',
                name: 'الالتزامات',
                amount: '150',
                iconColor: '#06B6D4',
                bgColor: '#ECFEFF',
                dotColor: '#06B6D4',
              },
              {
                icon: 'more-horiz',
                name: 'أخرى',
                amount: '50',
                iconColor: '#9CA3AF',
                bgColor: '#F3F4F6',
                dotColor: '#9CA3AF',
              },
            ].map((item, index) => (
              <View key={index} style={yearlyReportsStyles.categoryItem}>
                <View
                  style={[
                    yearlyReportsStyles.categoryDot,
                    { backgroundColor: item.dotColor },
                  ]}
                />

                <View
                  style={[
                    yearlyReportsStyles.categoryCircle,
                    { backgroundColor: item.bgColor },
                  ]}
                >
                  <MaterialIcons
                    name={item.icon}
                    size={21}
                    color={item.iconColor}
                  />
                </View>

                <Text style={yearlyReportsStyles.categoryName}>
                  {item.name}
                </Text>

                <View style={yearlyReportsStyles.amountRow}>
                  <Text style={yearlyReportsStyles.categoryAmount}>
                    {item.amount}
                  </Text>

                  <Text style={yearlyReportsStyles.categoryCurrency}>
                    ريال
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>

      <BottomNavigation
        navigation={navigation}
      />
    </View>
  );
}