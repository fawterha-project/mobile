import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors, spendLimitStyles as styles } from './styles';

const SpendLimitScreen = ({ navigation }) => {
  const [selectedLimit, setSelectedLimit] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const options = ['500 ر.س', '1,500 ر.س', '2,000 ر.س', '5,000 ر.س', 'غير ذلك'];

  const handleSave = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.purple} />

      <View style={styles.topSection}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={30} color={colors.lightBg} />
        </TouchableOpacity>

        <Text style={styles.title}>حدد سقف الانفاق</Text>
        <Text style={styles.subtitle}>اختر حد الانفاق لمصروفاتك الشهرية</Text>
      </View>

      <View style={styles.bottomCard}>
        <Text style={styles.label}>الحد الأقصى للانفاق</Text>

        <TouchableOpacity
          style={styles.selectBox}
          onPress={() => setShowOptions(!showOptions)}
        >
          <MaterialIcons
            name={showOptions ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={24}
            color="#8B7FBE"
          />
          <Text
            style={[
              styles.selectText,
              !selectedLimit && styles.placeholderText,
            ]}
          >
            {selectedLimit || ''}
          </Text>
        </TouchableOpacity>

        {showOptions && (
          <View style={styles.dropdown}>
            {options.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dropdownItem,
                  index !== options.length - 1 && styles.dropdownItemBorder,
                ]}
                onPress={() => {
                  setSelectedLimit(item);
                  setShowOptions(false);
                }}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View style={styles.buttonsWrapper}>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>إلغاء</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSave}
          >
            <Text style={styles.saveButtonText}>حفظ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SpendLimitScreen;