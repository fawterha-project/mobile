import React from 'react';
import EmptyBottomNavigation  from './EmptyBottomNavigation';

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
          color={colors.gray}
        />

        <View style={monthlyReportsStyles.summaryInfo}>

          <Text style={monthlyReportsStyles.summaryTitle}>
            إجمالي المصروفات
          </Text>

          <Text style={monthlyReportsStyles.summaryAmount}>
            0 ريال
          </Text>

          <View style={monthlyReportsStyles.percentRow}>
            <Text style={monthlyReportsStyles.summarySubText}>
              لا توجد بيانات حتى الآن
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
            labels: ['أ1', 'أ2', 'أ3', 'أ4', 'أ5'],
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

            </Svg>

            <View style={monthlyReportsStyles.donutInner}>
              <Text style={monthlyReportsStyles.donutAmount}>
                0
              </Text>

              <Text style={monthlyReportsStyles.donutCurrency}>
                ريال
              </Text>
            </View>

          </View>


          <View style={monthlyReportsStyles.categoriesGrid}>

            {[
              {
                icon: 'shopping-basket',
                name: 'مواد غذائية',
                amount: '0',
                iconColor: colors.green,
                bgColor: '#EAFBF0',
                dotColor: colors.green,
              },

              {
                icon: 'restaurant',
                name: 'مطاعم',
                amount: '0',
                iconColor: colors.blue,
                bgColor: '#EEF4FF',
                dotColor: colors.blue,
              },

              {
                icon: 'shopping-bag',
                name: 'التسوق',
                amount: '0',
                iconColor: colors.purple,
                bgColor: '#F5EEFF',
                dotColor: colors.purple,
              },

              {
                icon: 'directions-bus',
                name: 'النقل',
                amount: '0',
                iconColor: colors.yellow,
                bgColor: '#FFF7E8',
                dotColor: colors.yellow,
              },

              {
                icon: 'favorite-border',
                name: 'الصحة',
                amount: '0',
                iconColor: colors.red,
                bgColor: '#FFF1F2',
                dotColor: colors.red,
              },

              {
                icon: 'event',
                name: 'الالتزامات',
                amount: '0',
                iconColor: colors.cyan,
                bgColor: '#ECFEFF',
                dotColor: colors.cyan,
              },

              {
                icon: 'more-horiz',
                name: 'أخرى',
                amount: '0',
                iconColor: colors.gray,
                bgColor: colors.lightGray,
                dotColor: colors.gray,
              },

            ].map((item, index) => (

              <View
                key={index}
                style={monthlyReportsStyles.categoryItem}
              >

                <View
                  style={[
                    monthlyReportsStyles.categoryDot,
                    {
                      backgroundColor: item.dotColor
                    }
                  ]}
                />

                <View
                  style={[
                    monthlyReportsStyles.categoryCircle,
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

                <Text style={monthlyReportsStyles.categoryName}>
                  {item.name}
                </Text>

                <View style={monthlyReportsStyles.amountRow}>
                  <Text style={monthlyReportsStyles.categoryAmount}>
                    {item.amount}
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