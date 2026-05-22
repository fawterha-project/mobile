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
  monthlyReportsStyles,
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
      color={active ?colors.blue : colors.gray}
    />

    <Text style={[bottomNavStyles.tabText, active && bottomNavStyles.activeTabText]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default function MonthlyReportsScreen({ navigation }) {
  return (
    <View style={monthlyReportsStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <View style={profileStyles.statusFake}>
        <Text style={profileStyles.timeText}>9:41</Text>

        <View style={profileStyles.statusIcons}>
          <MaterialIcons name="signal-cellular-4-bar" size={16} color={colors.whiteK} />
          <MaterialIcons name="wifi" size={16} color={colors.black} />
          <MaterialIcons name="battery-full" size={18} color={colors.black} />
        </View>
      </View>

      <View style={monthlyReportsStyles.headerRow}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <MaterialIcons name="chevron-left" size={32} color={colors.black} />
        </TouchableOpacity>

        <Text style={monthlyReportsStyles.title}>التقارير</Text>

        <View style={monthlyReportsStyles.headerSpace} />
      </View>

      <View style={monthlyReportsStyles.tabsRow}>
        <TouchableOpacity
          style={monthlyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('WeeklyReports')}
        >
          <Text style={monthlyReportsStyles.tabText}>أسبوعي</Text>
        </TouchableOpacity>

        <TouchableOpacity style={monthlyReportsStyles.tabBtnActive}>
          <Text style={monthlyReportsStyles.tabTextActive}>شهري</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={monthlyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('YearlyReports')}
        >
          <Text style={monthlyReportsStyles.tabText}>سنوي</Text>
        </TouchableOpacity>
      </View>

      <View style={monthlyReportsStyles.summaryCard}>
        <MaterialIcons name="bar-chart" size={70} color={colors.blue} />

        <View style={monthlyReportsStyles.summaryInfo}>
          <Text style={monthlyReportsStyles.summaryTitle}>إجمالي المصروفات</Text>

          <Text style={monthlyReportsStyles.summaryAmount}>2,500 ريال</Text>

          <View style={monthlyReportsStyles.percentRow}>
            <Text style={monthlyReportsStyles.percentText}>↑ 15%</Text>
            <Text style={monthlyReportsStyles.summarySubText}>أعلى من الشهر الماضي</Text>
          </View>
        </View>
      </View>

      <View style={monthlyReportsStyles.chartCard}>
        <View style={monthlyReportsStyles.chartHeader}>
          <Text style={monthlyReportsStyles.chartTitle}>تطور المصاريف</Text>

          <TouchableOpacity style={monthlyReportsStyles.daysBtn}>
            <Text style={monthlyReportsStyles.daysBtnText}>آخر 30 يوم</Text>
          </TouchableOpacity>
        </View>

        <LineChart
          data={{
            labels: ['أ1', 'أ2', 'أ3', 'أ4', 'أ5'],
            datasets: [{ data: [1000, 1500, 1450, 1500, 2846] }],
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
          style={monthlyReportsStyles.chartGraph}
        />
      </View>

      <View style={monthlyReportsStyles.categoryCard}>
        <Text style={monthlyReportsStyles.categoryTitle}>فئات الإنفاق</Text>

        <View style={monthlyReportsStyles.categoryContainer}>
          <View style={monthlyReportsStyles.donutWrapper}>
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

            <View style={monthlyReportsStyles.donutInner}>
              <Text style={monthlyReportsStyles.donutAmount}>2,846</Text>
              <Text style={monthlyReportsStyles.donutCurrency}>ريال</Text>
            </View>
          </View>

          <View style={monthlyReportsStyles.categoriesGrid}>
            {[
              { icon: 'shopping-basket', name: 'مواد غذائية', amount: '900', iconColor: '#22C55E', bgColor: '#EAFBF0', dotColor: '#22C55E' },
              { icon: 'restaurant', name: 'مطاعم', amount: '700', iconColor: '#2563EB', bgColor: '#EEF4FF', dotColor: '#2563EB' },
              { icon: 'shopping-bag', name: 'التسوق', amount: '500', iconColor: '#A020F0', bgColor: '#F6EAFF', dotColor: '#A020F0' },
              { icon: 'directions-bus', name: 'النقل', amount: '300', iconColor: '#FFB000', bgColor: '#FFF6E7', dotColor: '#FFB000' },
              { icon: 'favorite-border', name: 'الصحة', amount: '200', iconColor: '#FF3B4A', bgColor: '#FFECEF', dotColor: '#FF3B4A' },
              { icon: 'event', name: 'الالتزامات', amount: '150', iconColor: '#12C6D7', bgColor: '#EAFBFC', dotColor: '#12C6D7' },
              { icon: 'more-horiz', name: 'أخرى', amount: '96', iconColor: '#8C8FA1', bgColor: '#F3F3F6', dotColor: '#8C8FA1' },
            ].map((item, index) => (
              <View key={index} style={monthlyReportsStyles.categoryItem}>
                <View
                  style={[
                    monthlyReportsStyles.categoryDot,
                    { backgroundColor: item.dotColor },
                  ]}
                />

                <View
                  style={[
                    monthlyReportsStyles.categoryCircle,
                    { backgroundColor: item.bgColor },
                  ]}
                >
                  <MaterialIcons name={item.icon} size={21} color={item.iconColor} />
                </View>

                <Text style={monthlyReportsStyles.categoryName}>{item.name}</Text>

                <View style={monthlyReportsStyles.amountRow}>
                  <Text style={monthlyReportsStyles.categoryAmount}>{item.amount}</Text>
                  <Text style={monthlyReportsStyles.categoryCurrency}>ريال</Text>
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