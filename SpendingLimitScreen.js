import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
  Modal,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  spendingLimitStyles,
  profileStyles,
  colors,
} from './styles';

const limits = [
  '500 رس',
  '1,500 رس',
  '2,000 رس',
  '5,000 رس',
  'غير ذلك'
];

export default function SpendingLimitScreen({
  navigation
}) {

  const [selectedLimit, setSelectedLimit] =
    useState('');

  const [customAmount, setCustomAmount] =
    useState('');

  const [open, setOpen] =
    useState(true);

  const [showAlert, setShowAlert] =
    useState(false);

  const [alertText, setAlertText] =
    useState('');

  const displayedAmount =
    selectedLimit === 'غير ذلك'
      ? customAmount || ''
      : selectedLimit || 'اختر المبلغ';

  const handleSave = () => {

    if (!selectedLimit) {

      setAlertText(
        'الرجاء اختيار سقف الإنفاق'
      );

      setShowAlert(true);

      return;
    }

    if (
      selectedLimit === 'غير ذلك'
      &&
      !customAmount.trim()
    ) {

      setAlertText(
        'الرجاء إدخال المبلغ'
      );

      setShowAlert(true);

      return;
    }

    setAlertText(
      'تم تحديث سقف الإنفاق الشهري بنجاح'
    );

    setShowAlert(true);

  };

  return (

    <View style={spendingLimitStyles.container}>

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
            size={15}
            color={colors.black}
          />

          <MaterialIcons
            name="wifi"
            size={15}
            color={colors.black}
          />

          <MaterialIcons
            name="battery-full"
            size={18}
            color={colors.black}
          />

        </View>

      </View>


      <TouchableOpacity
        style={spendingLimitStyles.backBtn}
        onPress={() =>
          navigation.goBack()
        }
      >

        <MaterialIcons
          name="arrow-back"
          size={24}
          color={colors.blue}
        />

      </TouchableOpacity>


      <View style={spendingLimitStyles.headerContent}>

        <Text style={spendingLimitStyles.title}>
          حدد سقف الإنفاق
        </Text>


        <View style={spendingLimitStyles.imageWrapper}>

          <Image
            source={{
              uri: 'asset:/image/wave.png'
            }}
            style={spendingLimitStyles.waveImage}
            resizeMode="cover"
          />

          <Image
            source={{
              uri: 'asset:/image/spending.png'
            }}
            style={spendingLimitStyles.headerImage}
            resizeMode="contain"
          />

        </View>


        <Text style={spendingLimitStyles.subtitle}>
          اختر حد الإنفاق لمصروفاتك الشهرية
        </Text>

      </View>


      <View style={spendingLimitStyles.card}>

        <View style={spendingLimitStyles.cardHeader}>

          <View
            style={spendingLimitStyles.walletIcon}
          >

            <MaterialIcons
              name="account-balance-wallet"
              size={20}
              color={colors.blue}
            />

          </View>

          <Text
            style={spendingLimitStyles.cardTitle}
          >
            اختر سقفك الشهري
          </Text>

        </View>


        <View style={spendingLimitStyles.selectBox}>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              setOpen(!open)
            }
          >

            <MaterialIcons
              name={
                open
                  ? 'keyboard-arrow-up'
                  : 'keyboard-arrow-down'
              }
              size={24}
              color={colors.blue}
            />

          </TouchableOpacity>


          {selectedLimit === 'غير ذلك'
            ? (

              <TextInput
                value={customAmount}
                onChangeText={
                  setCustomAmount
                }
                placeholder="اكتب المبلغ"
                keyboardType="numeric"
                placeholderTextColor={
                  colors.gray
                }

                style={{
                  flex: 1,
                  textAlign: 'right',
                  fontSize: 16,
                  color: colors.blue,
                  fontFamily: 'Tajawal-Medium',
                  paddingVertical: 0,
                }}
              />

            )

            : (

              <Text
                style={
                  spendingLimitStyles.selectText
                }
              >
                {displayedAmount}
              </Text>

            )}

        </View>


        {open && (

          <View
            style={
              spendingLimitStyles.optionsBox
            }
          >

            {limits.map(item => (

              <TouchableOpacity
                key={item}
                style={
                  spendingLimitStyles.optionRow
                }
                activeOpacity={0.8}

                onPress={() => {

                  setSelectedLimit(
                    item
                  );

                  if (item !== 'غير ذلك') {

                    setCustomAmount(
                      ''
                    );

                    setOpen(
                      false
                    );

                  }

                }}
              >

                <MaterialIcons
                  name={
                    selectedLimit === item
                      ? 'check-circle'
                      : 'radio-button-unchecked'
                  }

                  size={22}

                  color={
                    selectedLimit === item
                      ? colors.blue
                      : colors.border
                  }
                />

                <Text
                  style={
                    spendingLimitStyles.optionText
                  }
                >
                  {item}
                </Text>

                <MaterialIcons
                  name="toll"
                  size={20}
                  color={colors.cyan}
                />

              </TouchableOpacity>

            ))}

          </View>

        )}

      </View>


      <View
        style={
          spendingLimitStyles.buttonsRow
        }
      >

        <TouchableOpacity
          style={
            spendingLimitStyles.cancelBtn
          }
          onPress={() =>
            navigation.goBack()
          }
        >

          <Text
            style={
              spendingLimitStyles.cancelText
            }
          >
            إلغاء
          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={
            spendingLimitStyles.saveBtn
          }
          onPress={handleSave}
        >

          <Text
            style={
              spendingLimitStyles.saveText
            }
          >
            حفظ
          </Text>

        </TouchableOpacity>

      </View>
      <Modal
        transparent
        visible={showAlert}
        animationType="fade"
      >

        <View style={profileStyles.deleteOverlay}>

          <View style={profileStyles.deleteModalBox}>

            <View style={profileStyles.deleteIconCircle}>

              <MaterialIcons
                name="notifications"
                size={42}
                color={colors.blue}
              />

            </View>

            <Text style={profileStyles.deleteModalTitle}>
              تنبيه
            </Text>

            <Text style={profileStyles.deleteModalText}>
              {alertText}
            </Text>

            <View style={profileStyles.deleteModalButtons}>

              <TouchableOpacity
                style={profileStyles.deleteConfirmBtn}
                onPress={() => {

                  setShowAlert(false);

                  if (
                    alertText ===
                    'تم تحديث سقف الإنفاق الشهري بنجاح'
                  ) {

                    navigation.goBack();

                  }

                }}
              >

                <Text style={profileStyles.deleteConfirmText}>
                  حسنًا
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </View>

      </Modal>
    </View>

  );

}