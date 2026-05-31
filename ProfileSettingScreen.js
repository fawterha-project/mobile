import React, {
  useEffect,
  useState
}
  from 'react';

import AsyncStorage
  from '@react-native-async-storage/async-storage';

import {

  getProfile,

  deleteAccount

}

  from './services/profileService';

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Modal,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { profileStyles, bottomNavStyles, colors } from './styles';

const MenuItem = ({ title, icon, danger, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[profileStyles.menuItem, danger && profileStyles.deleteItem]}
      onPress={onPress}
    >
      <MaterialIcons
        name="chevron-left"
        size={32}
        color={danger ? colors.red : colors.black}
      />

      <View style={profileStyles.menuRight}>
        <Text style={[profileStyles.menuText, danger && profileStyles.deleteText]}>
          {title}
        </Text>

        <MaterialIcons
          name={icon}
          size={30}
          color={danger ? colors.red : colors.blue}
        />
      </View>
    </TouchableOpacity>
  );
};

const BottomTab = ({ icon, label, active, onPress }) => {
  return (
    <TouchableOpacity style={bottomNavStyles.tabItem} activeOpacity={0.7}>
      <MaterialIcons
        name={icon}
        size={22}
        color={active ? colors.blue : colors.gray}
      />
      <Text style={[bottomNavStyles.tabText, active && bottomNavStyles.activeTabText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default function ProfileSettingScreen({ navigation }) {

  const [
    deleteModalVisible,
    setDeleteModalVisible
  ] = React.useState(false);

  const [

    userName,

    setUserName

  ]

    =

    useState('');

  useEffect(() => {

    loadProfile();

  }, []);


  const loadProfile =
    async () => {

      try {

        const user =
          await getProfile();

        setUserName(

          `${user.first_name || ''} ${user.last_name || ''}`);
      }

      catch (error) {

        console.log(

          'خطأ البروفايل:',

          error

        );

      }

    };

  return (
    <View style={profileStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />

      <View style={profileStyles.header}>
        <View style={profileStyles.statusFake}>
          <Text style={profileStyles.timeText}>9:41</Text>

          <View style={profileStyles.statusIcons}>
            <MaterialIcons name="signal-cellular-4-bar" size={15} color={colors.black} />
            <MaterialIcons name="wifi" size={15} color={colors.black} />
            <MaterialIcons name="battery-full" size={18} color={colors.black} />
          </View>
        </View>

        <View style={profileStyles.titleRow}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation?.goBack?.()}
          >
            <MaterialIcons name="arrow-back" size={22} color={colors.blue} />
          </TouchableOpacity>

          <Text style={profileStyles.title}>إعدادات الملف الشخصي</Text>

          <View style={{ width: 22 }} />
        </View>

        <ImageBackground
          source={{ uri: 'asset:/image/background.png' }}
          style={profileStyles.waveImage}
          resizeMode="cover"
        />

        <View style={profileStyles.avatarWrapper}>
          <View style={profileStyles.avatarCircle}>
            <MaterialIcons name="person" size={72} color={colors.blue} />
          </View>
        </View>
      </View>

      <Text style={profileStyles.userName}>
        {userName}</Text>

      <View style={profileStyles.menuContainer}>

        <MenuItem
          title="تعديل حسابي"
          icon="person"
          onPress={() =>
            navigation.navigate(
              'ProfileEdit'
            )
          }
        />

        <MenuItem
          title="تغيير كلمة السر "
          icon="lock"
          onPress={() =>
            navigation.navigate(
              'ChangePassword'
            )
          }
        />

        <MenuItem
          title="إدارة حد الإنفاق"
          icon="insert-chart"
          onPress={() =>
            navigation.navigate(
              'SpendingLimit'
            )
          }
        />

        <MenuItem
          title="حذف الحساب"
          icon="warning"
          danger
          onPress={() =>
            setDeleteModalVisible(true)
          }
        />

      </View>
      <Modal
        visible={deleteModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setDeleteModalVisible(false)
        }
      >

        <View style={profileStyles.deleteOverlay}>

          <View style={profileStyles.deleteModalBox}>

            <View style={profileStyles.deleteIconCircle}>

              <MaterialIcons
                name="report"
                size={50}
                color={colors.red}
              />

            </View>

            <Text style={profileStyles.deleteModalTitle}>
              حذف الحساب
            </Text>

            <Text style={profileStyles.deleteModalText}>
              هل أنت متأكدة من حذف الحساب؟ لا يمكن التراجع عن هذا الإجراء
            </Text>

            <View style={profileStyles.deleteModalButtons}>

              <TouchableOpacity
                style={profileStyles.deleteCancelBtn}
                onPress={() =>
                  setDeleteModalVisible(false)
                }
              >
                <Text style={profileStyles.deleteCancelText}>
                  إلغاء
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={profileStyles.deleteConfirmBtn}
                onPress={async () => {

                  try {

                    await deleteAccount();

                    await AsyncStorage.removeItem(
                      'userToken'
                    );

                    await AsyncStorage.removeItem(
                      'user'
                    );

                    setDeleteModalVisible(
                      false
                    );

                    navigation.replace(
                      'LoginScreen'
                    );

                  }

                  catch (error) {

                    console.log(

                      'خطأ حذف الحساب:',

                      error

                    );

                  }

                }}
              >
                <Text style={profileStyles.deleteConfirmText}>
                  حذف
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>

      </Modal>
    </View>
  );
}