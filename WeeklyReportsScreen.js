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
  weeklyReportsStyles,
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
      color={active ? colors.blue : colors.gray}
    />

    <Text style={[bottomNavStyles.tabText, active && bottomNavStyles.activeTabText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function WeeklyReportsScreen({ navigation }) {
  return (
    <View style={weeklyReportsStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <View style={profileStyles.statusFake}>
        <Text style={profileStyles.timeText}>9:41</Text>

        <View style={profileStyles.statusIcons}>
          <MaterialIcons name="signal-cellular-4-bar" size={16} color={colors.black} />
          <MaterialIcons name="wifi" size={16} color={colors.black} />
          <MaterialIcons name="battery-full" size={18} color={colors.black} />
        </View>
      </View>

      <View style={weeklyReportsStyles.headerRow}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={32} color={colors.black} />
        </TouchableOpacity>

        <Text style={weeklyReportsStyles.title}>التقارير</Text>

        <View style={weeklyReportsStyles.headerSpace} />
      </View>

      <View style={weeklyReportsStyles.tabsRow}>
        <TouchableOpacity
          style={weeklyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Reports')}
        >
          <Text style={weeklyReportsStyles.tabText}>ملخص</Text>
        </TouchableOpacity>

        <TouchableOpacity style={weeklyReportsStyles.tabBtnActive}>
          <Text style={weeklyReportsStyles.tabTextActive}>أسبوعي</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={weeklyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('MonthlyReports')}
        >
          <Text style={weeklyReportsStyles.tabText}>شهري</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={weeklyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('YearlyReports')}
        >
          <Text style={weeklyReportsStyles.tabText}>سنوي</Text>
        </TouchableOpacity>
      </View>

      <View style={weeklyReportsStyles.summaryCard}>
        <MaterialIcons
          name="bar-chart"
          size={70}
          color={colors.blue}
        />


        <View style={weeklyReportsStyles.summaryInfo}>
          <Text style={weeklyReportsStyles.summaryTitle}>إجمالي المصروفات</Text>

          <Text style={weeklyReportsStyles.summaryAmount}>1,500 ريال</Text>

          <View style={weeklyReportsStyles.percentRow}>
            <Text style={weeklyReportsStyles.percentText}>↑ 15%</Text>
            <Text style={weeklyReportsStyles.summarySubText}>أعلى من الأسبوع الماضي</Text>
          </View>
        </View>
      </View>

      <View style={weeklyReportsStyles.chartCard}>
        <View style={weeklyReportsStyles.chartHeader}>
          <Text style={weeklyReportsStyles.chartTitle}>تطور المصاريف</Text>

          <TouchableOpacity style={weeklyReportsStyles.daysBtn}>
            <Text style={weeklyReportsStyles.daysBtnText}>آخر 7 أيام</Text>
          </TouchableOpacity>
        </View>

        <LineChart
          data={{
            labels: ['س', 'أ', 'ن', 'ث', 'ر', 'خ', 'ج'],
            datasets: [{ data: [700, 1400, 1100, 1700, 1750, 1450, 2846] }],
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
          style={weeklyReportsStyles.chartGraph}
        />

      </View>

      <View style={weeklyReportsStyles.categoryCard}>
        <Text style={weeklyReportsStyles.categoryTitle}>فئات الإنفاق</Text>

        <View style={weeklyReportsStyles.categoryContainer}>
          <View style={weeklyReportsStyles.donutWrapper}>
            <Svg width="150" height="150" viewBox="0 0 150 150">
              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#22C55E"
                strokeWidth="28"
                fill="none"
                strokeDasharray="132 314"
                strokeDashoffset="0"
              />

              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#2563EB"
                strokeWidth="28"
                fill="none"
                strokeDasharray="88 314"
                strokeDashoffset="-132"
              />

              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#F59E0B"
                strokeWidth="28"
                fill="none"
                strokeDasharray="47 314"
                strokeDashoffset="-220"
              />

              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke="#8B5CF6"
                strokeWidth="28"
                fill="none"
                strokeDasharray="47 314"
                strokeDashoffset="-267"
              />
            </Svg>


            <View style={weeklyReportsStyles.donutInner}>
              <Text style={weeklyReportsStyles.donutAmount}>500</Text>
              <Text style={weeklyReportsStyles.donutCurrency}>ريال</Text>
            </View>
          </View>

          <View style={weeklyReportsStyles.categoriesGrid}>
            {[
              {
                icon: 'shopping-basket',
                name: 'مواد غذائية',
                amount: '316',
                iconColor: '#22C55E',
                bgColor: '#EAFBF0',
                dotColor: '#22C55E',
              },
              {
                icon: 'restaurant',
                name: 'مطاعم',
                amount: '240',
                iconColor: '#2563EB',
                bgColor: '#EEF4FF',
                dotColor: '#2563EB',
              },
              {
                icon: 'shopping-bag',
                name: 'التسوق',
                amount: '50',
                iconColor: '#A020F0',
                bgColor: '#F6EAFF',
                dotColor: '#A020F0',
              },
              {
                icon: 'directions-bus',
                name: 'النقل',
                amount: '50',
                iconColor: '#FFB000',
                bgColor: '#FFF6E7',
                dotColor: '#FFB000',
              },
              {
                icon: 'favorite-border',
                name: 'الصحة',
                amount: '0',
                iconColor: '#FF3B4A',
                bgColor: '#FFECEF',
                dotColor: '#FF3B4A',
              },
              {
                icon: 'event',
                name: 'الالتزامات',
                amount: '0',
                iconColor: '#12C6D7',
                bgColor: '#EAFBFC',
                dotColor: '#12C6D7',
              },
              {
                icon: 'more-horiz',
                name: 'أخرى',
                amount: '0',
                iconColor: '#8C8FA1',
                bgColor: '#F3F3F6',
                dotColor: '#8C8FA1',
              },
            ].map((item, index) => (
              <View key={index} style={weeklyReportsStyles.categoryItem}>
                <View
                  style={[
                    weeklyReportsStyles.categoryDot,
                    { backgroundColor: item.dotColor },
                  ]}
                />

                <View
                  style={[
                    weeklyReportsStyles.categoryCircle,
                    { backgroundColor: item.bgColor },
                  ]}
                >
                  <MaterialIcons
                    name={item.icon}
                    size={21}
                    color={item.iconColor}
                  />
                </View>

                <Text style={weeklyReportsStyles.categoryName}>
                  {item.name}
                </Text>

                <View style={weeklyReportsStyles.amountRow}>
                  <Text style={weeklyReportsStyles.categoryAmount}>
                    {item.amount}
                  </Text>

                  <Text style={weeklyReportsStyles.categoryCurrency}>
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