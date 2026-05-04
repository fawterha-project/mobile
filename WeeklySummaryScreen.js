import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors, weeklySummaryStyles } from './styles';

const weeklySummaries = [
  {
    periodText: '8 Feb - 14 Feb',
    amountText: '2,880.74',
    averageDaily: '436.19 ﷼',
    higherSpend: '626.66 ﷼',
    percentMain: '+84.78%',
    percentSub: '5,311.35﷼',
    chartData: [
      { label: 'الأحد', value: 400, color: colors.lavender },
      { label: 'الاثنين', value: 650, color: colors.green },
      { label: 'الثلاثاء', value: 0, color: colors.orange },
      { label: 'الأربعاء', value: 120, color: colors.blue },
      { label: 'الخميس', value: 360, color: colors.lavender },
      { label: 'الجمعة', value: 580, color: colors.orange },
      { label: 'السبت', value: 0, color: colors.green },
    ],
  },
  {
    periodText: '15 Feb - 21 Feb',
    amountText: '3,140.20',
    averageDaily: '448.60 ﷼',
    higherSpend: '410.20 ﷼',
    percentMain: '22.30%',
    percentSub: '% أكثر من',
    chartData: [
      { label: 'الأحد', value: 260, color: colors.lavender },
      { label: 'الاثنين', value: 700, color: colors.green },
      { label: 'الثلاثاء', value: 420, color: colors.orange },
      { label: 'الأربعاء', value: 350, color: colors.blue },
      { label: 'الخميس', value: 610, color: colors.lavender },
      { label: 'الجمعة', value: 520, color: colors.orange },
      { label: 'السبت', value: 300, color: colors.green },
    ],
  },
  {
    periodText: '22 Feb - 28 Feb',
    amountText: '1,960.10',
    averageDaily: '280.01 ﷼',
    higherSpend: '120.00 ﷼',
    percentMain: '10.15%',
    percentSub: '% أقل من',
    chartData: [
      { label: 'الأحد', value: 410, color: colors.lavender },
      { label: 'الاثنين', value: 540, color: colors.green },
      { label: 'الثلاثاء', value: 120, color: colors.orange },
      { label: 'الأربعاء', value: 260, color: colors.blue },
      { label: 'الخميس', value: 180, color: colors.lavender },
      { label: 'الجمعة', value: 300, color: colors.orange },
      { label: 'السبت', value: 150, color: colors.green },
    ],
  },
];

const maxValue = 800;

const WeeklySummaryScreen = ({ navigation }) => {
  const [weekIndex, setWeekIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);

  const currentWeek = useMemo(() => weeklySummaries[weekIndex], [weekIndex]);

  const goNextWeek = () => {
    setWeekIndex((prev) => (prev + 1) % weeklySummaries.length);
  };

  const goPrevWeek = () => {
    setWeekIndex((prev) =>
      prev === 0 ? weeklySummaries.length - 1 : prev - 1
    );
  };

  return (
    <SafeAreaView style={weeklySummaryStyles.container}>
      <TouchableOpacity
        style={weeklySummaryStyles.backButton}
        onPress={() => navigation?.goBack?.()}
      >
        <MaterialIcons name="arrow-back" size={28} color={colors.white} />
      </TouchableOpacity>

      <Text style={weeklySummaryStyles.title}>ملخص النفقات</Text>

      <View style={weeklySummaryStyles.card}>
        <View style={weeklySummaryStyles.dropdownWrapper}>
          <TouchableOpacity
            style={weeklySummaryStyles.dropdownButton}
            activeOpacity={0.8}
            onPress={() => setShowDropdown(!showDropdown)}
          >
            <Text style={weeklySummaryStyles.dropdownButtonText}>أسبوعي</Text>
            <MaterialIcons
              name={showDropdown ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              size={18}
              color={colors.purple}
            />
          </TouchableOpacity>

          {showDropdown && (
            <View style={weeklySummaryStyles.dropdownMenu}>
              <TouchableOpacity
                style={weeklySummaryStyles.dropdownItem}
                activeOpacity={0.8}
                onPress={() => {
                  setShowDropdown(false);
                  navigation.navigate('MonthlySummary');
                }}
              >
                <Text style={weeklySummaryStyles.dropdownItemText}>شهري</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={weeklySummaryStyles.summaryHeader}>
          <TouchableOpacity
            style={weeklySummaryStyles.circleArrow}
            onPress={goNextWeek}
            activeOpacity={0.8}
          >
            <MaterialIcons name="chevron-right" size={18} color={colors.purple} />
          </TouchableOpacity>

          <View style={weeklySummaryStyles.summaryTextContainer}>
            <Text style={weeklySummaryStyles.periodText}>
              {currentWeek.periodText}
            </Text>
            <Text style={weeklySummaryStyles.amountText}>
              {currentWeek.amountText}
            </Text>
          </View>

          <TouchableOpacity
            style={weeklySummaryStyles.circleArrow}
            onPress={goPrevWeek}
            activeOpacity={0.8}
          >
            <MaterialIcons name="chevron-left" size={18} color={colors.purple} />
          </TouchableOpacity>
        </View>

        <View style={weeklySummaryStyles.chartContainer}>
          <View style={weeklySummaryStyles.gridLine1} />
          <View style={weeklySummaryStyles.gridLine2} />
          <View style={weeklySummaryStyles.gridLine3} />
          <View style={weeklySummaryStyles.gridLine4} />
          <View style={weeklySummaryStyles.baseLine} />

          <Text style={weeklySummaryStyles.yLabel1}>800</Text>
          <Text style={weeklySummaryStyles.yLabel2}>600</Text>
          <Text style={weeklySummaryStyles.yLabel3}>400</Text>
          <Text style={weeklySummaryStyles.yLabel4}>200</Text>

          <View style={weeklySummaryStyles.barsRow}>
            {currentWeek.chartData.map((item, index) => (
              <View key={index} style={weeklySummaryStyles.barItem}>
                <View
                  style={[
                    weeklySummaryStyles.bar,
                    {
                      height: (item.value / maxValue) * 130,
                      backgroundColor: item.color,
                    },
                  ]}
                />
                <Text style={weeklySummaryStyles.barLabel}>{item.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={weeklySummaryStyles.legendContainer}>
          <View style={weeklySummaryStyles.legendItem}>
            <View
              style={[weeklySummaryStyles.legendColor, { backgroundColor: colors.blue }]}
            />
            <Text style={weeklySummaryStyles.legendText}>أدوية</Text>
          </View>

          <View style={weeklySummaryStyles.legendItem}>
            <View
              style={[weeklySummaryStyles.legendColor, { backgroundColor: colors.green }]}
            />
            <Text style={weeklySummaryStyles.legendText}>مقاضي</Text>
          </View>

          <View style={weeklySummaryStyles.legendItem}>
            <View
              style={[weeklySummaryStyles.legendColor, { backgroundColor: colors.orange }]}
            />
            <Text style={weeklySummaryStyles.legendText}>مطاعم</Text>
          </View>

          <View style={weeklySummaryStyles.legendItem}>
            <View
              style={[weeklySummaryStyles.legendColor, { backgroundColor: colors.lavender }]}
            />
            <Text style={weeklySummaryStyles.legendText}>ملابس</Text>
          </View>
        </View>
      </View>

      <Text style={weeklySummaryStyles.analysisTitle}>التحليلات</Text>

      <View
        style={[
          weeklySummaryStyles.analysisCard,
          weeklySummaryStyles.analysisCard1,
        ]}
      >
        <View style={weeklySummaryStyles.analysisIconBox}>
          <MaterialIcons
            name="account-balance-wallet"
            size={22}
            color={colors.black}
          />
        </View>

        <View style={weeklySummaryStyles.analysisTextBox}>
          <Text style={weeklySummaryStyles.analysisLabel}>
            متوسط إنفاقك اليومي
          </Text>
          <Text style={weeklySummaryStyles.analysisValue}>
            {currentWeek.averageDaily}
          </Text>
        </View>
      </View>

      <View
        style={[
          weeklySummaryStyles.analysisCard,
          weeklySummaryStyles.analysisCard2,
        ]}
      >
        <View style={weeklySummaryStyles.analysisIconBox}>
          <MaterialIcons name="auto-awesome" size={22} color={colors.black} />
        </View>

        <View style={weeklySummaryStyles.analysisTextBox}>
          <Text style={weeklySummaryStyles.analysisLabel}>
           المقارنة بالأسبوع الماضي
          </Text>
          <Text style={weeklySummaryStyles.analysisValue}>
            {currentWeek.higherSpend}
          </Text>
        </View>

        <View style={weeklySummaryStyles.analysisPercentBox}>
          <Text style={weeklySummaryStyles.analysisPercentMain}>
            {currentWeek.percentMain}
          </Text>
          <Text style={weeklySummaryStyles.analysisPercentSub}>
            {currentWeek.percentSub}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WeeklySummaryScreen;