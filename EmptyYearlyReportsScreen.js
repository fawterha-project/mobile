import React from 'react';

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
          color={colors.gray}
        />

        <View style={yearlyReportsStyles.summaryInfo}>

          <Text style={yearlyReportsStyles.summaryTitle}>
            إجمالي المصروفات
          </Text>

          <Text style={yearlyReportsStyles.summaryAmount}>
            0 ريال
          </Text>

          <View style={yearlyReportsStyles.percentRow}>

            <Text style={yearlyReportsStyles.summarySubText}>
              لا توجد بيانات حتى الآن
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
            labels: ['2021', '2022', '2023', '2024', '2025'],
            datasets: [
              {
                data: [0, 0, 0, 0, 0]
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

            color: () => colors.border,

            labelColor: () => colors.gray,

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

            </Svg>

            <View style={yearlyReportsStyles.donutInner}>

              <Text style={yearlyReportsStyles.donutAmount}>
                0
              </Text>

              <Text style={yearlyReportsStyles.donutCurrency}>
                ريال
              </Text>

            </View>

          </View>


          <View style={yearlyReportsStyles.categoriesGrid}>

            {[
              {
                icon: 'shopping-basket',
                name: 'مواد غذائية',
                amount: '0',
                iconColor: colors.green,
                bgColor: '#EAFBF0',
                dotColor: colors.green
              },

              {
                icon: 'restaurant',
                name: 'مطاعم',
                amount: '0',
                iconColor: colors.blue,
                bgColor: '#EEF4FF',
                dotColor: colors.blue
              },

              {
                icon: 'shopping-bag',
                name: 'التسوق',
                amount: '0',
                iconColor: colors.purple,
                bgColor: '#F5EEFF',
                dotColor: colors.purple
              },

              {
                icon: 'directions-bus',
                name: 'النقل',
                amount: '0',
                iconColor: colors.yellow,
                bgColor: '#FFF7E8',
                dotColor: colors.yellow
              },

              {
                icon: 'favorite-border',
                name: 'الصحة',
                amount: '0',
                iconColor: colors.red,
                bgColor: '#FFF1F2',
                dotColor: colors.red
              },

              {
                icon: 'event',
                name: 'الالتزامات',
                amount: '0',
                iconColor: colors.cyan,
                bgColor: '#ECFEFF',
                dotColor: colors.cyan
              },

              {
                icon: 'more-horiz',
                name: 'أخرى',
                amount: '0',
                iconColor: colors.gray,
                bgColor: colors.lightGray,
                dotColor: colors.gray
              }

            ].map((item, index) => (

              <View
                key={index}
                style={yearlyReportsStyles.categoryItem}
              >

                <View
                  style={[
                    yearlyReportsStyles.categoryDot,
                    {
                      backgroundColor: item.dotColor
                    }
                  ]}
                />

                <View
                  style={[
                    yearlyReportsStyles.categoryCircle,
                    {
                      backgroundColor: item.bgColor
                    }
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


      <EmptyBottomNavigation
        navigation={navigation}
      />

    </View>

  );

}