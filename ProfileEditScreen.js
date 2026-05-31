import React, {
  useState,
  useEffect
} from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';

import MaterialIcons
  from 'react-native-vector-icons/MaterialIcons';

import {
  profileStyles,
  profileEditStyles,
  colors,
} from './styles';

import {
  getProfile,
  updateProfile
}
  from './services/profileService';


export default function ProfileEditScreen({
  navigation
}) {

  const [
    firstName,
    setFirstName
  ] = useState('');

  const [
    lastName,
    setLastName
  ] = useState('');

  const [
    birthDate,
    setBirthDate
  ] = useState('');

  const [
    gender,
    setGender
  ] = useState('أنثى');

  const [
    phone,
    setPhone
  ] = useState('');

  const [
    showGenderOptions,
    setShowGenderOptions
  ] = useState(false);



  useEffect(() => {

    loadProfile();

  }, []);

  const genderMap = {

    'أنثى': 'female',

    'ذكر': 'male'

  };

  const reverseGenderMap = {

    female: 'أنثى',

    male: 'ذكر'

  };

  const loadProfile =
    async () => {

      try {

        const user =
          await getProfile();

        setFirstName(
          user.first_name || ''
        );

        setLastName(
          user.last_name || ''
        );

        setPhone(
          user.phone || ''
        );

        setGender(

          reverseGenderMap[
          user.gender
          ]

          ||

          'أنثى'

        );

        setBirthDate(
          user.date_of_birth || ''
        );

      }

      catch (error) {

        console.log(
          'خطأ البروفايل:',
          error
        );

      }

    };



  const selectGender =
    (value) => {

      setGender(
        value
      );

      setShowGenderOptions(
        false
      );

    };



  const saveProfile =
    async () => {

      try {

        await updateProfile({

          first_name: firstName,

          last_name: lastName,

          phone,

          date_of_birth:
            birthDate || null,

          gender:
            genderMap[
            gender
            ]

        });

        Alert.alert(

          'نجاح',

          'تم تحديث البيانات'

        );

        navigation.goBack();

      }

      catch (error) {

        console.log(

          'تفاصيل الخطأ:',

          JSON.stringify(error)

        );

        Alert.alert(

          'خطأ',

          error?.message ||

          'فشل تحديث بيانات الملف الشخصي'

        );

      }

    };



  return (

    <View
      style={
        profileEditStyles.container
      }
    >

      <StatusBar
        barStyle="dark-content"
        backgroundColor={
          colors.bg
        }
      />

      <View
        style={
          profileEditStyles.editHeader
        }
      >

        <View
          style={
            profileStyles.statusFake
          }
        >

          <Text
            style={
              profileStyles.timeText
            }
          >
            9:41
          </Text>

          <View
            style={
              profileStyles.statusIcons
            }
          >

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


        <View
          style={
            profileEditStyles.editTitleRow
          }
        >

          <TouchableOpacity
            onPress={() =>
              navigation.goBack()
            }
          >

            <MaterialIcons
              name="arrow-back"
              size={23}
              color={colors.blue}
            />

          </TouchableOpacity>

          <Text
            style={
              profileEditStyles.editTitle
            }
          >

            حسابي

          </Text>

          <View
            style={{
              width: 23
            }}
          />

        </View>



        <View
          style={
            profileEditStyles.editAvatarWrapper
          }
        >

          <View
            style={
              profileEditStyles.editAvatarCircle
            }
          >

            <MaterialIcons
              name="person"
              size={72}
              color={colors.blue}
            />

          </View>

          <TouchableOpacity
            style={
              profileEditStyles.cameraBtn
            }
          >

            <MaterialIcons
              name="photo-camera"
              size={16}
              color={colors.white}
            />

          </TouchableOpacity>

        </View>

      </View>



      <View
        style={
          profileEditStyles.formContainer
        }
      >

        <InputField
          label="الاسم الاول"
          value={firstName}
          setValue={setFirstName}
          icon="person-outline"
          placeholder="مثال: غيداء"
        />


        <InputField
          label="الاسم الاخير"
          value={lastName}
          setValue={setLastName}
          icon="person-outline"
          placeholder="مثال: بندر"
        />


        <InputField
          label="تاريخ الميلاد"
          value={birthDate}
          setValue={setBirthDate}
          icon="calendar-today"
        />



        <View
          style={
            profileEditStyles.inputGroup
          }
        >

          <Text
            style={
              profileEditStyles.inputLabel
            }
          >

            الجنس

          </Text>


          <TouchableOpacity
            style={
              profileEditStyles.inputBox
            }

            onPress={() =>
              setShowGenderOptions(
                !showGenderOptions
              )
            }
          >

            <MaterialIcons
              name="groups"
              size={23}
              color={colors.gray}
            />


            <MaterialIcons
              name={
                showGenderOptions
                  ?
                  'keyboard-arrow-up'
                  :
                  'keyboard-arrow-down'
              }
              size={24}
              color={colors.gray}
              style={
                profileEditStyles.inputArrow
              }
            />

            <Text
              style={
                profileEditStyles.genderValue
              }
            >

              {gender}

            </Text>

          </TouchableOpacity>


          {
            showGenderOptions && (

              <View
                style={
                  profileEditStyles.genderDropdown
                }
              >

                <TouchableOpacity
                  style={
                    profileEditStyles.genderOption
                  }
                  onPress={() =>
                    selectGender(
                      'أنثى'
                    )
                  }
                >

                  <Text
                    style={
                      profileEditStyles.genderOptionText
                    }
                  >

                    أنثى

                  </Text>

                </TouchableOpacity>


                <View
                  style={
                    profileEditStyles.genderDivider
                  }
                />


                <TouchableOpacity
                  style={
                    profileEditStyles.genderOption
                  }
                  onPress={() =>
                    selectGender(
                      'ذكر'
                    )
                  }
                >

                  <Text
                    style={
                      profileEditStyles.genderOptionText
                    }
                  >

                    ذكر

                  </Text>

                </TouchableOpacity>

              </View>

            )

          }

        </View>



        <View
          style={
            profileEditStyles.inputGroup
          }
        >

          <Text
            style={
              profileEditStyles.inputLabel
            }
          >

            رقم الجوال

          </Text>

          <View
            style={
              profileEditStyles.inputBox
            }
          >

            <MaterialIcons
              name="phone"
              size={23}
              color={colors.gray}
            />

            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="+966512345678"
              placeholderTextColor={colors.gray}
              style={profileEditStyles.textInput}
              keyboardType="phone-pad"
            />

          </View>

        </View>


      </View>


      <View
        style={
          profileEditStyles.editButtonsRow
        }
      >

        <TouchableOpacity
          style={
            profileEditStyles.cancelBtn
          }
          onPress={() =>
            navigation.goBack()
          }
        >

          <Text
            style={
              profileEditStyles.cancelText
            }
          >

            إلغاء

          </Text>

        </TouchableOpacity>


        <TouchableOpacity
          style={
            profileEditStyles.saveBtn
          }
          onPress={saveProfile}
        >

          <Text
            style={
              profileEditStyles.saveText
            }
          >

            حفظ

          </Text>

        </TouchableOpacity>

      </View>

    </View>

  );

}



function InputField({

  label,
  value,
  setValue,
  icon,
  placeholder = ''

}) {

  return (

    <View
      style={
        profileEditStyles.inputGroup
      }
    >

      <Text
        style={
          profileEditStyles.inputLabel
        }
      >

        {label}

      </Text>

      <View
        style={
          profileEditStyles.inputBox
        }
      >

        <MaterialIcons
          name={icon}
          size={23}
          color={colors.gray}
        />

        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          style={profileEditStyles.textInput}
        />

      </View>

    </View>

  );

}