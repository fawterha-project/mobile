import React from 'react';
import BottomNavigation from './BottomNavigation';

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LineChart } from 'react-native-chart-kit';

import {
  reportsStyles,
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
        bottomNavStyles.activeTabText,
      ]}
    >
      {label}
    </Text>

  </TouchableOpacity>

);

export default function ReportsScreen({
  navigation
}) {

  return (

    <View style={reportsStyles.container}>

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


      <View style={reportsStyles.headerRow}>

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

        <Text style={reportsStyles.title}>
          التقارير
        </Text>

        <View style={reportsStyles.headerSpace} />

      </View>


      <View style={reportsStyles.tabsRow}>

        <TouchableOpacity
          style={reportsStyles.tabBtnActive}
        >

          <Text style={reportsStyles.tabTextActive}>
            ملخص
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={reportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate(
              'WeeklyReports'
            )
          }
        >

          <Text style={reportsStyles.tabText}>
            أسبوعي
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={reportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate(
              'MonthlyReports'
            )
          }
        >

          <Text style={reportsStyles.tabText}>
            شهري
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={reportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate(
              'YearlyReports'
            )
          }
        >

          <Text style={reportsStyles.tabText}>
            سنوي
          </Text>

        </TouchableOpacity>

      </View>


      <View style={reportsStyles.summaryCard}>

        <Image
          source={{
            uri: 'asset:/image/report.jpg'
          }}
          style={reportsStyles.summaryImage}
          resizeMode="contain"
        />

        <View style={reportsStyles.summaryInfo}>

          <Text style={reportsStyles.summaryTitle}>
            إجمالي المصروفات
          </Text>

          <Text style={reportsStyles.summaryAmount}>
            2,500 ريال
          </Text>

          <View style={reportsStyles.percentRow}>

            <Text style={reportsStyles.percentText}>
              ↑ 15%
            </Text>

            <Text style={reportsStyles.summarySubText}>
              أعلى من الشهر الماضي
            </Text>

          </View>

        </View>

      </View>


      <View style={reportsStyles.countCard}>

        <Text style={reportsStyles.countTitle}>
          عدد الفواتير </Text>

        <Text style={reportsStyles.countValue}>
          24 فاتورة
        </Text>

      </View>


      <View style={reportsStyles.chartCard}>

        <View style={reportsStyles.chartHeader}>

          <Text style={reportsStyles.chartTitle}>
            تطور المصاريف
          </Text>

          <TouchableOpacity
            style={reportsStyles.daysBtn}
          >

            <Text style={reportsStyles.daysBtnText}>
              آخر 7 أيام
            </Text>

          </TouchableOpacity>

        </View>


        <LineChart
          data={{
            labels: [
              'س', 'أ', 'ن', 'ث', 'ر', 'خ', 'ج'
            ],

            datasets: [
              {
                data: [
                  700,
                  1400,
                  1100,
                  1700,
                  1750,
                  1450,
                  2846
                ]
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
          withShadow
          fromZero

          chartConfig={{

            backgroundColor:
              colors.white,

            backgroundGradientFrom:
              colors.white,

            backgroundGradientTo:
              colors.white,

            decimalPlaces: 0,

            color: () =>
              colors.blue,

            labelColor: () =>
              colors.gray,

            propsForDots: {

              r: '4',
              strokeWidth: '2',
              stroke: colors.blue,

            },

            propsForBackgroundLines: {

              stroke:
                colors.border,

            }

          }}

          style={
            reportsStyles.chartGraph
          }
        />

      </View>


      <BottomNavigation
        navigation={navigation}
        activeScreen="Reports"
      />

    </View>

  );

}