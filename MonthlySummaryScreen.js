import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors, weeklySummaryStyles } from './styles';

const monthlySummaries = [
  {
    periodText: 'Jan 2025',
    amountText: '6,420.10',
    averageDaily: '207.10 ﷼',
    higherSpend: '350.40 ﷼',
    percentMain: '14.11%',
    percentSub: '% أكثر من',
    chartData: [
      { label: 'الأول', value: 220, color: colors.orange },
      { label: 'الثاني', value: 320, color: colors.lavender },
      { label: 'الثالث', value: 500, color: colors.blue },
      { label: 'الرابع', value: 610, color: colors.green },
      { label: 'الخامس', value: 290, color: colors.orange },
      { label: 'السادس', value: 430, color: colors.lavender },
      { label: 'السابع', value: 380, color: colors.green },
    ],
  },
  {
    periodText: 'Feb 2025',
    amountText: '-7,258.45',
    averageDaily: ' 1,804.49﷼',
    higherSpend: ' 7,224.45﷼',
    percentMain: '+0.09%',
    percentSub: '6.35﷼',
    chartData: [
      { label: 'الأول', value: 180, color: colors.orange },
      { label: 'الثاني', value: 470, color: colors.lavender },
      { label: 'الثالث', value: 110, color: colors.blue },
      { label: 'الرابع', value: 610, color: colors.green },
      { label: 'الخامس', value: 350, color: colors.orange },
      { label: 'السادس', value: 260, color: colors.lavender },
      { label: 'السابع', value: 520, color: colors.green },
    ],
  },
  {
    periodText: 'Mar 2025',
    amountText: '7,310.90',
    averageDaily: '235.83 ﷼',
    higherSpend: '205.25 ﷼',
    percentMain: '11.34%',
    percentSub: '% أقل من',
    chartData: [
      { label: 'الأول', value: 300, color: colors.orange },
      { label: 'الثاني', value: 520, color: colors.lavender },
      { label: 'الثالث', value: 280, color: colors.blue },
      { label: 'الرابع', value: 430, color: colors.green },
      { label: 'الخامس', value: 650, color: colors.orange },
      { label: 'السادس', value: 350, color: colors.lavender },
      { label: 'السابع', value: 240, color: colors.green },
    ],
  },
];

const maxValue = 800;

const MonthlySummaryScreen = ({ navigation }) => {
  const [monthIndex, setMonthIndex] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);

  const currentMonth = useMemo(() => monthlySummaries[monthIndex], [monthIndex]);

  const goNextMonth = () => {
    setMonthIndex((prev) => (prev + 1) % monthlySummaries.length);
  };

  const goPrevMonth = () => {
    setMonthIndex((prev) =>
      prev === 0 ? monthlySummaries.length - 1 : prev - 1
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
            <Text style={weeklySummaryStyles.dropdownButtonText}>شهري</Text>
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
                  navigation.navigate('WeeklySummary');
                }}
              >
                <Text style={weeklySummaryStyles.dropdownItemText}>أسبوعي</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={weeklySummaryStyles.summaryHeader}>
          <TouchableOpacity
            style={weeklySummaryStyles.circleArrow}
            onPress={goNextMonth}
            activeOpacity={0.8}
          >
            <MaterialIcons name="chevron-right" size={18} color={colors.purple} />
          </TouchableOpacity>

          <View style={weeklySummaryStyles.summaryTextContainer}>
            <Text style={weeklySummaryStyles.periodText}>
              {currentMonth.periodText}
            </Text>
            <Text style={weeklySummaryStyles.amountText}>
              {currentMonth.amountText}
            </Text>
          </View>

          <TouchableOpacity
            style={weeklySummaryStyles.circleArrow}
            onPress={goPrevMonth}
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
            {currentMonth.chartData.map((item, index) => (
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
            <Text style={weeklySummaryStyles.legendText}>أخرى</Text>
          </View>

          <View style={weeklySummaryStyles.legendItem}>
            <View
              style={[weeklySummaryStyles.legendColor, { backgroundColor: colors.green }]}
            />
            <Text style={weeklySummaryStyles.legendText}>أساسي</Text>
          </View>

          <View style={weeklySummaryStyles.legendItem}>
            <View
              style={[weeklySummaryStyles.legendColor, { backgroundColor: colors.orange }]}
            />
            <Text style={weeklySummaryStyles.legendText}>طعام</Text>
          </View>

          <View style={weeklySummaryStyles.legendItem}>
            <View
              style={[weeklySummaryStyles.legendColor, { backgroundColor: colors.lavender }]}
            />
            <Text style={weeklySummaryStyles.legendText}>ترفيه</Text>
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
            {currentMonth.averageDaily}
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
            إنفاقك هذا الشهر أعلى
          </Text>
          <Text style={weeklySummaryStyles.analysisValue}>
            {currentMonth.higherSpend}
          </Text>
        </View>

        <View style={weeklySummaryStyles.analysisPercentBox}>
          <Text style={weeklySummaryStyles.analysisPercentMain}>
            {currentMonth.percentMain}
          </Text>
          <Text style={weeklySummaryStyles.analysisPercentSub}>
            {currentMonth.percentSub}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MonthlySummaryScreen;