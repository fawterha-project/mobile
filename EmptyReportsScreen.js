import React from 'react';
import BottomNavigation from './BottomNavigation';

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  emptyReportsStyles,
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

export default function EmptyReportsScreen({
  navigation
}) {

  return (

    <View style={emptyReportsStyles.container}>

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


      <View style={emptyReportsStyles.headerRow}>

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

        <Text style={emptyReportsStyles.title}>
          التقارير
        </Text>

        <View style={emptyReportsStyles.headerSpace} />

      </View>


      <View style={emptyReportsStyles.tabsRow}>

        <TouchableOpacity
          style={emptyReportsStyles.tabBtnActive}
        >

          <Text style={emptyReportsStyles.tabTextActive}>
            ملخص
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={emptyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate(
              'EmptyWeeklyReports'
            )
          }
        >

          <Text style={emptyReportsStyles.tabText}>
            أسبوعي
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={emptyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate(
              'EmptyMonthlyReports'
            )
          }
        >

          <Text style={emptyReportsStyles.tabText}>
            شهري
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={emptyReportsStyles.tabBtn}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate(
              'EmptyYearlyReports'
            )
          }
        >

          <Text style={emptyReportsStyles.tabText}>
            سنوي
          </Text>

        </TouchableOpacity>

      </View>


      <View style={emptyReportsStyles.summaryCard}>

        <Image
          source={{
            uri: 'asset:/image/report.jpg'
          }}
          style={emptyReportsStyles.summaryImage}
          resizeMode="contain"
        />

        <View style={emptyReportsStyles.summaryInfo}>

          <Text style={emptyReportsStyles.summaryTitle}>
            إجمالي المصروفات
          </Text>

          <Text style={emptyReportsStyles.emptyAmount}>
            --
          </Text>

          <Text style={emptyReportsStyles.summarySubText}>
            لا توجد بيانات حتى الآن
          </Text>

        </View>

      </View>


      <View style={emptyReportsStyles.countCard}>

        <View style={emptyReportsStyles.countIconBox}>

          <MaterialIcons
            name="receipt-long"
            size={30}
            color={colors.blue}
          />

        </View>

        <View style={emptyReportsStyles.countInfo}>

          <Text style={emptyReportsStyles.countTitle}>
            عدد الفواتير
          </Text>

          <Text style={emptyReportsStyles.countValue}>
            0
          </Text>

          <Text style={emptyReportsStyles.countSubText}>
            فاتورة
          </Text>

        </View>

      </View>


      <View style={emptyReportsStyles.chartCard}>

        <View style={emptyReportsStyles.chartHeader}>

          <Text style={emptyReportsStyles.chartTitle}>
            تطور المصاريف
          </Text>

          <TouchableOpacity
            style={emptyReportsStyles.daysBtn}
          >

            <Text style={emptyReportsStyles.daysBtnText}>
              آخر 7 أيام
            </Text>

          </TouchableOpacity>

        </View>


        <View style={emptyReportsStyles.emptyChart}>

          <View style={emptyReportsStyles.gridRow} />
          <View style={emptyReportsStyles.gridRow} />
          <View style={emptyReportsStyles.gridRow} />
          <View style={emptyReportsStyles.gridRow} />

          <View style={emptyReportsStyles.emptyChartCenter}>

            <View style={emptyReportsStyles.chartIconCircle}>

              <MaterialIcons
                name="show-chart"
                size={32}
                color={colors.gray}
              />

            </View>

            <Text style={emptyReportsStyles.noDataText}>
              لا توجد بيانات لعرضها
            </Text>

          </View>


          <View style={emptyReportsStyles.yAxis}>

            <Text style={emptyReportsStyles.axisText}>
              2846
            </Text>

            <Text style={emptyReportsStyles.axisText}>
              2135
            </Text>

            <Text style={emptyReportsStyles.axisText}>
              1423
            </Text>

            <Text style={emptyReportsStyles.axisText}>
              712
            </Text>

            <Text style={emptyReportsStyles.axisText}>
              0
            </Text>

          </View>


          <View style={emptyReportsStyles.daysRow}>

            <Text style={emptyReportsStyles.dayText}>
              سبت
            </Text>

            <Text style={emptyReportsStyles.dayText}>
              أحد
            </Text>

            <Text style={emptyReportsStyles.dayText}>
              اثنين
            </Text>

            <Text style={emptyReportsStyles.dayText}>
              ثلاثاء
            </Text>

            <Text style={emptyReportsStyles.dayText}>
              أربعاء
            </Text>

            <Text style={emptyReportsStyles.dayText}>
              خميس
            </Text>

            <Text style={emptyReportsStyles.dayText}>
              جمعة
            </Text>

          </View>

        </View>

      </View>


      <BottomNavigation
        navigation={navigation}
        activeScreen="EmptyReports"
      />

    </View>

  );

}