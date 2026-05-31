import React, {
  useState,
  useEffect,
} from 'react';

import EmptyBottomNavigation from './EmptyBottomNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './services/api';

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
      color={
        active
          ? colors.blue
          : colors.gray
      }
    />

    <Text
      style={[
        bottomNavStyles.tabText,
        active &&
        bottomNavStyles.activeTabText
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

export default function EmptyMonthlyReportsScreen({
  navigation
}) {
  const [monthlyData, setMonthlyData] =
    useState(null);

  const radius = 50;

  const circumference =
    2 * Math.PI * radius;

  useEffect(() => {

    loadMonthlyReport();

  }, []);

  const loadMonthlyReport =
    async () => {

      try {

        const savedUser =
          JSON.parse(
            await AsyncStorage.getItem(
              'user'
            )
          );

        if (
          !savedUser?.users_id
        ) {
          return;
        }

        const response =
          await api.get(
            `/reports/monthly?users_id=${savedUser.users_id}`
          );

        setMonthlyData(
          response.data.monthly
        );

        console.log(
          'الشهري:',
          response.data.monthly
        );

      }

      catch (error) {

        console.log(
          'خطأ الشهري:',
          error.response?.data ||
          error.message
        );

      }

    };

  return (

    <View style={monthlyReportsStyles.container}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.white}
      />

      <View style={profileStyles.statusFake}>

        <Text style={profileStyles.timeText}>
          9:41
        </Text>

        <View style={profileStyles.statusIcons}>

          <MaterialIcons
            name="signal-cellular-4-bar"
            size={16}
            color={colors.black}
          />

          <MaterialIcons
            name="wifi"
            size={16}
            color={colors.black}
          />

          <MaterialIcons
            name="battery-full"
            size={18}
            color={colors.black}
          />

        </View>

      </View>

      <View style={monthlyReportsStyles.headerRow}>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.goBack()
          }
        >

          <MaterialIcons
            name="chevron-left"
            size={32}
            color={colors.black}
          />

        </TouchableOpacity>

        <Text style={monthlyReportsStyles.title}>
          التقارير
        </Text>

        <View style={monthlyReportsStyles.headerSpace} />

      </View>


      <View style={monthlyReportsStyles.tabsRow}>

        <TouchableOpacity
          style={monthlyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('EmptyWeeklyReports')
          }
        >
          <Text style={monthlyReportsStyles.tabText}>
            أسبوعي
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={monthlyReportsStyles.tabBtnActive}
        >
          <Text style={monthlyReportsStyles.tabTextActive}>
            شهري
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={monthlyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('EmptyYearlyReports')
          }
        >
          <Text style={monthlyReportsStyles.tabText}>
            سنوي
          </Text>
        </TouchableOpacity>

      </View>


      <View style={monthlyReportsStyles.summaryCard}>

        <MaterialIcons
          name="bar-chart"
          size={70}
          color={colors.blue}
        />

        <View style={monthlyReportsStyles.summaryInfo}>

          <Text style={monthlyReportsStyles.summaryTitle}>
            إجمالي المصروفات
          </Text>

          <Text style={monthlyReportsStyles.summaryAmount}>
            {monthlyData?.total || 0} ريال
          </Text>

          <View style={monthlyReportsStyles.percentRow}>
            <Text style={monthlyReportsStyles.summarySubText}>
              {monthlyData?.invoice_count || 0} فاتورة
            </Text>
          </View>

        </View>

      </View>


      <View style={monthlyReportsStyles.chartCard}>

        <View style={monthlyReportsStyles.chartHeader}>

          <Text style={monthlyReportsStyles.chartTitle}>
            تطور المصاريف
          </Text>

          <TouchableOpacity
            style={monthlyReportsStyles.daysBtn}
          >

            <Text style={monthlyReportsStyles.daysBtnText}>
              آخر 30 يوم
            </Text>

          </TouchableOpacity>

        </View>


        <LineChart
          data={{
            labels:
              monthlyData?.trend?.map(
                (_, index) => `أ${index + 1}`
              ) || [],

            datasets: [
              {
                data:
                  monthlyData?.trend?.map(
                    item => item.total
                  ) || [0]
              }
            ]
          }}

          width={
            Dimensions.get('window').width - 85
          }

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
            labelColor: () => colors.black,

            propsForDots: {
              r: '0'
            },

            propsForBackgroundLines: {
              stroke: colors.border
            }
          }}

          style={
            monthlyReportsStyles.chartGraph
          }
        />

      </View>


      <View style={monthlyReportsStyles.categoryCard}>

        <Text style={monthlyReportsStyles.categoryTitle}>
          فئات الإنفاق
        </Text>

        <View style={monthlyReportsStyles.categoryContainer}>

          <View style={monthlyReportsStyles.donutWrapper}>
            <Svg
              width="150"
              height="150"
              viewBox="0 0 150 150"
            >

              <Circle
                cx="75"
                cy="75"
                r="50"
                stroke={colors.border}
                strokeWidth="28"
                fill="none"
              />

              {

                monthlyData?.categories?.map(
                  (item, index) => {

                    const previousPercent =
                      monthlyData.categories
                        .slice(0, index)
                        .reduce(
                          (sum, cat) =>
                            sum + cat.percent,
                          0
                        );

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
                          circumference -
                          (
                            circumference *
                            item.percent
                          ) / 100
                        }
                        rotation={
                          -90 +
                          (
                            previousPercent *
                            3.6
                          )
                        }
                        origin="75,75"
                        strokeLinecap="butt"
                      />

                    );

                  }

                )

              }

            </Svg>
            <View style={monthlyReportsStyles.donutInner}>
              <Text style={monthlyReportsStyles.donutAmount}>
                {monthlyData?.total || 0}
              </Text>

              <Text style={monthlyReportsStyles.donutCurrency}>
                ريال
              </Text>
            </View>

          </View>


          <View style={monthlyReportsStyles.categoriesGrid}>

            {(
              monthlyData?.categories || []
            ).map((item, index) => (

              <View
                key={index}
                style={monthlyReportsStyles.categoryItem}
              >

                <View
                  style={[
                    monthlyReportsStyles.categoryDot,
                    {
                      backgroundColor: item.bg_color
                    }
                  ]}
                />

                <View
                  style={[
                    monthlyReportsStyles.categoryCircle,
                    {
                      backgroundColor: item.bg_color
                    }
                  ]}
                >

                  <MaterialIcons
                    name={item.icon}
                    size={21}
                    color={item.color}
                  />

                </View>

                <Text style={monthlyReportsStyles.categoryName}>
                  {item.categorie_name_full}
                </Text>

                <View style={monthlyReportsStyles.amountRow}>
                  <Text style={monthlyReportsStyles.categoryAmount}>
                    {item.total}
                  </Text>

                  <Text style={monthlyReportsStyles.categoryCurrency}>
                    ريال
                  </Text>
                </View>

              </View>

            ))}

          </View>

        </View>

      </View>

      <EmptyBottomNavigation
        navigation={navigation}
      />

    </View>

  );

}