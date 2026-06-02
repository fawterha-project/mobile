import { useState, useEffect } from 'react';

import AsyncStorage from
  '@react-native-async-storage/async-storage';

import api
  from './services/api';

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
import EmptyBottomNavigation from './EmptyBottomNavigation';

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

export default function EmptyYearlyReportsScreen({
  navigation
}) {
  const [yearlyData, setYearlyData] =
    useState(null);

  const circumference =
    2 * Math.PI * 50;

  useEffect(() => {

    loadYearlyReport();

  }, []);

  const loadYearlyReport =
    async () => {

      try {

        const user =
          JSON.parse(
            await AsyncStorage.getItem(
              'user'
            )
          );

        const response =
          await api.get(
            `/reports/yearly?users_id=${user.users_id}`
          );

        setYearlyData(
          response.data.yearly
        );

        console.log(
          'السنوي:',
          response.data.yearly
        );

      }

      catch (error) {

        console.log(
          error.response?.data ||
          error.message
        );

      }

    };
  return (

    <View style={yearlyReportsStyles.container}>

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


      <View style={yearlyReportsStyles.headerRow}>

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

        <Text style={yearlyReportsStyles.title}>
          التقارير
        </Text>

        <View style={yearlyReportsStyles.headerSpace} />

      </View>


      <View style={yearlyReportsStyles.tabsRow}>

        <TouchableOpacity
          style={yearlyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate(
              'EmptyWeeklyReports'
            )
          }
        >

          <Text style={yearlyReportsStyles.tabText}>
            أسبوعي
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={yearlyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate(
              'EmptyMonthlyReports'
            )
          }
        >

          <Text style={yearlyReportsStyles.tabText}>
            شهري
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={yearlyReportsStyles.tabBtnActive}
        >

          <Text style={yearlyReportsStyles.tabTextActive}>
            سنوي
          </Text>

        </TouchableOpacity>

      </View>


      <View style={yearlyReportsStyles.summaryCard}>

        <MaterialIcons
          name="bar-chart"
          size={70}
          color={colors.blue}
        />

        <View style={yearlyReportsStyles.summaryInfo}>

          <Text style={yearlyReportsStyles.summaryTitle}>
            إجمالي المصروفات
          </Text>

          <Text style={yearlyReportsStyles.summaryAmount}>
            {
              yearlyData?.total || 0
            }
            {' '}ريال
          </Text>

          <View style={yearlyReportsStyles.percentRow}>

            <Text style={yearlyReportsStyles.summarySubText}>
              {
                yearlyData?.invoice_count > 0
                  ? `${yearlyData.invoice_count} فاتورة`
                  : 'لا توجد بيانات حتى الآن'
              }
            </Text>

          </View>

        </View>

      </View>


      <View style={yearlyReportsStyles.chartCard}>

        <View style={yearlyReportsStyles.chartHeader}>

          <Text style={yearlyReportsStyles.chartTitle}>
            تطور المصاريف
          </Text>

          <TouchableOpacity
            style={yearlyReportsStyles.daysBtn}
          >

            <Text style={yearlyReportsStyles.daysBtnText}>
              2025
            </Text>

          </TouchableOpacity>

        </View>


        <LineChart
          data={{

            labels:
              yearlyData?.trend?.map(
                (_, index) =>
                  `${index + 1}`
              ) || [],

            datasets: [

              {

                data:
                  yearlyData?.trend?.map(
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
            yearlyReportsStyles.chartGraph
          }
        />

      </View>


      <View style={yearlyReportsStyles.categoryCard}>

        <Text style={yearlyReportsStyles.categoryTitle}>
          فئات الإنفاق
        </Text>

        <View style={yearlyReportsStyles.categoryContainer}>

          <View style={yearlyReportsStyles.donutWrapper}>

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

                yearlyData?.categories?.map(
                  (item, index) => {

                    const offset =
                      yearlyData.categories
                        .slice(0, index)
                        .reduce(
                          (
                            sum,
                            cat
                          ) =>
                            sum +
                            (
                              circumference *
                              cat.percent
                            ) /
                            100,
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
                        strokeDasharray={`${(circumference * item.percent) / 100} ${circumference}`}
                        strokeDashoffset={-offset}
                        rotation="-90"
                        origin="75,75"
                      />

                    );

                  }

                )

              }

            </Svg>

            <View style={yearlyReportsStyles.donutInner}>

              <Text style={yearlyReportsStyles.donutAmount}>
                {
                  yearlyData?.total || 0
                }
              </Text>
              <Text style={yearlyReportsStyles.donutCurrency}>
                ريال
              </Text>

            </View>

          </View>


          <View style={yearlyReportsStyles.categoriesGrid}>

            {yearlyData?.categories?.map(
              (item, index) => (

                <View
                  key={index}
                  style={yearlyReportsStyles.categoryItem}
                >

                  <View
                    style={[
                      yearlyReportsStyles.categoryDot,
                      {
                        backgroundColor: item.color
                      }
                    ]}
                  />

                  <View
                    style={[
                      yearlyReportsStyles.categoryCircle,
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

                  <Text style={yearlyReportsStyles.categoryName}>
                    {item.categorie_name_full}
                  </Text>

                  <View style={yearlyReportsStyles.amountRow}>

                    <Text style={yearlyReportsStyles.categoryAmount}>
                      {item.total}
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


      <EmptyBottomNavigation
        navigation={navigation}
      />

    </View>

  );

}