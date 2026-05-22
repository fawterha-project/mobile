import React from 'react';
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

export default function EmptyWeeklyReportsScreen({
  navigation
}) {

  return (

    <View style={weeklyReportsStyles.container}>

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


      <View style={weeklyReportsStyles.headerRow}>

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

        <Text style={weeklyReportsStyles.title}>
          التقارير
        </Text>

        <View style={weeklyReportsStyles.headerSpace} />

      </View>


      <View style={weeklyReportsStyles.tabsRow}>
        <TouchableOpacity
          style={weeklyReportsStyles.tabBtnActive}
        >
          <Text style={weeklyReportsStyles.tabTextActive}>
            أسبوعي
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={weeklyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('EmptyMonthlyReports')
          }
        >
          <Text style={weeklyReportsStyles.tabText}>
            شهري
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={weeklyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('EmptyYearlyReports')
          }
        >
          <Text style={weeklyReportsStyles.tabText}>
            سنوي
          </Text>
        </TouchableOpacity>

      </View>


      <View style={weeklyReportsStyles.summaryCard}>

        <MaterialIcons
          name="bar-chart"
          size={70}
          color={colors.gray}
        />

        <View style={weeklyReportsStyles.summaryInfo}>

          <Text style={weeklyReportsStyles.summaryTitle}>
            إجمالي المصروفات
          </Text>

          <Text style={weeklyReportsStyles.summaryAmount}>
            0 ريال
          </Text>

          <View style={weeklyReportsStyles.percentRow}>
            <Text style={weeklyReportsStyles.summarySubText}>
              لا توجد بيانات حتى الآن
            </Text>
          </View>

        </View>

      </View>


      <View style={weeklyReportsStyles.chartCard}>

        <View style={weeklyReportsStyles.chartHeader}>

          <Text style={weeklyReportsStyles.chartTitle}>
            تطور المصاريف
          </Text>

          <TouchableOpacity
            style={weeklyReportsStyles.daysBtn}
          >

            <Text style={weeklyReportsStyles.daysBtnText}>
              آخر 7 أيام
            </Text>

          </TouchableOpacity>

        </View>


        <LineChart
          data={{
            labels: ['س', 'أ', 'ن', 'ث', 'ر', 'خ', 'ج'],
            datasets: [
              {
                data: [0, 0, 0, 0, 0, 0, 0]
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
            weeklyReportsStyles.chartGraph
          }
        />

      </View>


      <View style={weeklyReportsStyles.categoryCard}>

        <Text style={weeklyReportsStyles.categoryTitle}>
          فئات الإنفاق
        </Text>

        <View style={weeklyReportsStyles.categoryContainer}>

          <View style={weeklyReportsStyles.donutWrapper}>

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

            <View style={weeklyReportsStyles.donutInner}>

              <Text style={weeklyReportsStyles.donutAmount}>
                0
              </Text>

              <Text style={weeklyReportsStyles.donutCurrency}>
                ريال
              </Text>

            </View>

          </View>


          <View style={weeklyReportsStyles.categoriesGrid}>

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
                style={weeklyReportsStyles.categoryItem}
              >

                <View
                  style={[
                    weeklyReportsStyles.categoryDot,
                    {
                      backgroundColor: item.dotColor
                    }
                  ]}
                />

                <View
                  style={[
                    weeklyReportsStyles.categoryCircle,
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

      <EmptyBottomNavigation
                      navigation={navigation}
                      activeScreen="EmptyWeeklyReports"
                  />
    </View>

  );

}