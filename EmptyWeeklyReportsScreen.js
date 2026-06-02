import React, { useEffect, useState } from 'react';
import EmptyBottomNavigation from './EmptyBottomNavigation';

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LineChart } from 'react-native-chart-kit';
import Svg, { Circle, G } from 'react-native-svg';

import {
  weeklyReportsStyles,
  bottomNavStyles,
  profileStyles,
  colors,
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from './services/api';

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

    <Text
      style={[bottomNavStyles.tabText, active && bottomNavStyles.activeTabText]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default function EmptyWeeklyReportsScreen({ navigation }) {
  const [weeklyData, setWeeklyData] = useState(null);

  useEffect(() => {
    loadWeeklyReport();
  }, []);

  const loadWeeklyReport = async () => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));

      const response = await api.get(
        `/reports/weekly?users_id=${user.users_id}`,
      );

      console.log(
        'WEEKLY REPORT DATA:',
        JSON.stringify(response.data.weekly, null, 2),
      );
      setWeeklyData(response.data.weekly);
      console.log('الويكلي:', response.data.weekly);
    } catch (error) {
      console.log(
        'خطأ التقرير الأسبوعي:',

        error.response?.data || error.message,
      );
    }
  };

  const radius = 50;

  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;

  return (
    <View style={weeklyReportsStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <View style={profileStyles.statusFake}>
        <Text style={profileStyles.timeText}>9:41</Text>

        <View style={profileStyles.statusIcons}>
          <MaterialIcons
            name="signal-cellular-4-bar"
            size={16}
            color={colors.black}
          />

          <MaterialIcons name="wifi" size={16} color={colors.black} />

          <MaterialIcons name="battery-full" size={18} color={colors.black} />
        </View>
      </View>

      <View style={weeklyReportsStyles.headerRow}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="chevron-left" size={32} color={colors.black} />
        </TouchableOpacity>

        <Text style={weeklyReportsStyles.title}>التقارير</Text>

        <View style={weeklyReportsStyles.headerSpace} />
      </View>

      <View style={weeklyReportsStyles.tabsRow}>
        <TouchableOpacity style={weeklyReportsStyles.tabBtnActive}>
          <Text style={weeklyReportsStyles.tabTextActive}>أسبوعي</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={weeklyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('EmptyMonthlyReports')}
        >
          <Text style={weeklyReportsStyles.tabText}>شهري</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={weeklyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('EmptyYearlyReports')}
        >
          <Text style={weeklyReportsStyles.tabText}>سنوي</Text>
        </TouchableOpacity>
      </View>

      <View style={weeklyReportsStyles.summaryCard}>
        <MaterialIcons name="bar-chart" size={70} color={colors.blue} />

        <View style={weeklyReportsStyles.summaryInfo}>
          <Text style={weeklyReportsStyles.summaryTitle}>إجمالي المصروفات</Text>

          <Text style={weeklyReportsStyles.summaryAmount}>
            {weeklyData?.total || 0} ريال
          </Text>

          <View style={weeklyReportsStyles.percentRow}>
            <Text style={weeklyReportsStyles.summarySubText}>
              {weeklyData?.invoice_count > 0
                ? `${weeklyData.invoice_count} فاتورة`
                : 'لا توجد بيانات حتى الآن'}
            </Text>
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
            labels: weeklyData?.trend?.map(item => {
              const map = {
                سبت: 'س',
                أحد: 'أ',
                اثنين: 'ن',
                ثلاثاء: 'ث',
                أربعاء: 'ر',
                خميس: 'خ',
                جمعة: 'ج',
              };

              return map[item.label] || item.label;
            }) || ['س', 'أ', 'ن', 'ث', 'ر', 'خ', 'ج'],

            datasets: [
              {
                data: weeklyData?.trend?.map(item => item.total) || [
                  0, 0, 0, 0, 0, 0, 0,
                ],
              },
            ],
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
          withShadow={false}
          fromZero
          chartConfig={{
            backgroundColor: colors.white,
            backgroundGradientFrom: colors.white,
            backgroundGradientTo: colors.white,
            decimalPlaces: 0,

            color: () => colors.blue,

            labelColor: () => colors.gray,

            propsForDots: {
              r: '0',
            },

            propsForBackgroundLines: {
              stroke: colors.border,
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
                stroke={colors.border}
                strokeWidth="28"
                fill="none"
              />

              {weeklyData?.categories?.map((item, index) => {
                const previousPercent = weeklyData.categories
                  .slice(0, index)
                  .reduce((sum, cat) => sum + cat.percent, 0);

                return (
                  <Circle
                    key={index}
                    cx="75"
                    cy="75"
                    r="50"
                    stroke={item.color}
                    strokeWidth="28"
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={
                      circumference - (circumference * item.percent) / 100
                    }
                    rotation={-90 + previousPercent * 3.6}
                    origin="75,75"
                    strokeLinecap="butt"
                  />
                );
              })}
            </Svg>

            <View style={weeklyReportsStyles.donutInner}>
              <Text style={weeklyReportsStyles.donutAmount}>
                {weeklyData?.total || 0}
              </Text>

              <Text style={weeklyReportsStyles.donutCurrency}>ريال</Text>
            </View>
          </View>

          <View style={weeklyReportsStyles.categoriesGrid}>
            {weeklyData?.categories?.length > 0 ? (
              weeklyData.categories.map((item, index) => (
                <View key={index} style={weeklyReportsStyles.categoryItem}>
                  <View
                    style={[
                      weeklyReportsStyles.categoryDot,
                      {
                        backgroundColor: item.color || colors.blue,
                      },
                    ]}
                  />

                  <View
                    style={[
                      weeklyReportsStyles.categoryCircle,
                      {
                        backgroundColor: item.bg_color || colors.lightPurple,
                      },
                    ]}
                  >
                    <MaterialIcons
                      name={item.icon}
                      size={21}
                      color={item.color || colors.blue}
                    />
                  </View>

                  <Text style={weeklyReportsStyles.categoryName}>
                    {item.categorie_name}
                  </Text>

                  <View style={weeklyReportsStyles.amountRow}>
                    <Text style={weeklyReportsStyles.categoryAmount}>
                      {item.total}
                    </Text>

                    <Text style={weeklyReportsStyles.categoryCurrency}>
                      ريال
                    </Text>
                  </View>
                </View>
              ))
            ) : (
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 30,
                }}
              >
                <Text
                  style={{
                    color: colors.gray,
                    fontSize: 14,
                  }}
                >
                  لا توجد فئات إنفاق حتى الآن
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>

      <EmptyBottomNavigation
        navigation={navigation}
        activeScreen="EmptyWeeklyReports"
      />
    </View>
  );
}