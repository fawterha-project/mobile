import React, {
  useState,
  useEffect
} from 'react';

import AsyncStorage
  from '@react-native-async-storage/async-storage';

import {
  getSummary,
  getReceipts
}
  from './services/homeService';
import {
  getNotifications
}
  from './services/notificationService';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import EmptyBottomNavigation from './EmptyBottomNavigation';

import {
  homeWithInvoicesStyles,
  colors
} from './styles';

export default function HomeScreen({

  navigation,
  route

}) {

  const [user, setUser] =
    useState(null);
  route?.params?.user;


  const [summary, setSummary] =
    useState(null);

  const [receipts, setReceipts] =
    useState([]);

  const [
    notifications,
    setNotifications
  ] = useState([]);

  const [
    showNotifications,
    setShowNotifications
  ] = useState(false);

  useEffect(() => {

    if (user) {

      loadHome();

    }

  }, [user]);

  useEffect(() => {

    loadUser();

  }, []);

  const loadUser = async () => {

    const savedUser =

      JSON.parse(
        await AsyncStorage.getItem('user')
      );

    setUser(savedUser);

  };

  const loadHome =
    async () => {

      try {

        const receiptsData =
          await getReceipts();

        console.log(
          'الفواتير:',
          receiptsData
        );

        console.log(
          'تم جلب:',
          receiptsData?.length
        );

        setReceipts(
          receiptsData
        );

        const notificationsData =
          await getNotifications(
            user.users_id
          );

        setNotifications(
          notificationsData || []
        );

      }

      catch (error) {

        console.log(
          'خطأ الفواتير:',
          JSON.stringify(error)
        );

        console.log(
          'تفاصيل الخطأ:',
          error
        );

      }

    };
  const categories = [

    {
      icon: 'shopping-basket',
      name: 'المقاضي',
      iconColor: '#22C55E',
      bgColor: '#EAFBF0',
      screen: 'EmptyCategoryGroceries'
    },

    {
      icon: 'restaurant',
      name: 'المطاعم',
      iconColor: '#2563FF',
      bgColor: '#EEF4FF',
      screen: 'EmptyCategoryRestaurants'
    },

    {
      icon: 'shopping-bag',
      name: 'التسوق',
      iconColor: '#A020F0',
      bgColor: '#F6EAFF',
      screen: 'EmptyCategoryShopping'
    },

    {
      icon: 'directions-bus',
      name: 'النقل',
      iconColor: '#FFB000',
      bgColor: '#FFF6E7',
      screen: 'EmptyCategoryTransport'
    },

    {
      icon: 'favorite',
      name: 'الصحة',
      iconColor: '#FF4B5C',
      bgColor: '#FFECEF',
      screen: 'EmptyCategoryHealth'
    },

    {
      icon: 'event',
      name: 'الالتزامات',
      iconColor: '#12C6D7',
      bgColor: '#EAFBFC',
      screen: 'EmptyCategoryCommitments'
    },

    {
      icon: 'more-horiz',
      name: 'أخرى',
      iconColor: '#8C8FA1',
      bgColor: '#F3F3F6',
      screen: 'EmptyCategoryOther'
    }

  ].map(category => ({

    ...category,

    amount:

      receipts

        .filter(

          receipt =>

            receipt?.categories
              ?.categorie_name === category.name

        )

        .reduce(

          (sum, receipt) =>

            sum + (receipt.total_price || 0),

          0

        )

  }));


  return (

    <>

      <ScrollView
        style={homeWithInvoicesStyles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 120
        }}
      >

        {/* Header */}

        <View style={homeWithInvoicesStyles.header}>

          <TouchableOpacity

            onPress={() =>
              setShowNotifications(
                !showNotifications
              )
            }

          >

            <View>

              <MaterialIcons
                name="notifications"
                size={24}
                color={colors.blue}
              />

              {

                notifications.length > 0

                &&

                <View
                  style={{

                    position: 'absolute',
                    top: -6,
                    right: -6,
                    backgroundColor: 'red',
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    justifyContent: 'center',
                    alignItems: 'center'

                  }}
                >

                  <Text
                    style={{
                      color: 'white',
                      fontSize: 10
                    }}
                  >

                    {notifications.length}

                  </Text>

                </View>

              }

            </View>

          </TouchableOpacity>

          <View>

            <Image
              source={{
                uri: 'asset:/image/fawterha.jpg'
              }}
              style={homeWithInvoicesStyles.logo}
            />

            <Text
              style={homeWithInvoicesStyles.helloText}
            >

              أهلاً {user?.first_name || ''}

            </Text>

            <Text
              style={homeWithInvoicesStyles.subText}
            >

              ابدأ رحلتك بتنظيم فواتيرك

            </Text>

          </View>

        </View>



        {/* Scan Card */}

        <View
          style={homeWithInvoicesStyles.scanCard}
        >

          <Text
            style={homeWithInvoicesStyles.scanTitle}
          >

            جاهز تسجل فاتورتك؟

          </Text>

          <Text
            style={homeWithInvoicesStyles.scanSub}
          >

            اختر الطريقة المناسبة لك

          </Text>

          <View
            style={homeWithInvoicesStyles.scanRow}
          >

            <TouchableOpacity
              style={homeWithInvoicesStyles.uploadButton}
              onPress={() => navigation.navigate('UploadInvoice')}
            >

              <MaterialIcons
                name="upload-file"
                size={28}
                color="white"
              />

              <Text
                style={homeWithInvoicesStyles.scanText}
              >

                رفع فاتورة

              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              style={homeWithInvoicesStyles.cameraButton}

              onPress={() =>
                navigation.navigate(
                  'CameraScreen'
                )
              }
            >

              <MaterialIcons
                name="qr-code-scanner"
                size={28}
                color="white"
              />

              <Text
                style={homeWithInvoicesStyles.scanText}
              >

                مسح فاتورة

              </Text>

            </TouchableOpacity>

          </View>


          <Text
            style={homeWithInvoicesStyles.supportText}
          >

            ندعم الصور و PDF واستخراج البيانات تلقائياً

          </Text>

        </View>




        {/* رحلة فواتيرك */}

        <View
          style={homeWithInvoicesStyles.journeyCard}
        >

          <Text
            style={homeWithInvoicesStyles.sectionTitle}
          >

            رحلة فواتيرك

          </Text>

          <Text
            style={homeWithInvoicesStyles.journeySub}
          >

            من إضافة الفاتورة إلى الاسترجاع

          </Text>

          <View
            style={homeWithInvoicesStyles.timelineContainer}
          >

            <View
              style={homeWithInvoicesStyles.stepBlock}
            >

              <View
                style={[
                  homeWithInvoicesStyles.stepCircle,
                  {
                    backgroundColor: '#4D8DFF'
                  }
                ]}
              >

                <MaterialIcons
                  name="photo-camera"
                  size={24}
                  color="white"
                />

              </View>

              <Text
                style={homeWithInvoicesStyles.stepTitle}
              >

                إضافة الفاتورة

              </Text>

              <Text
                style={homeWithInvoicesStyles.stepDesc}
              >

                تصوير أو رفع

              </Text>

            </View>

            <View style={homeWithInvoicesStyles.timelineLine} />

            <View
              style={homeWithInvoicesStyles.stepBlock}
            >

              <View
                style={[
                  homeWithInvoicesStyles.stepCircle,
                  {
                    backgroundColor: '#35C98B'
                  }
                ]}
              >

                <MaterialIcons
                  name="psychology"
                  size={24}
                  color="white"
                />

              </View>

              <Text
                style={homeWithInvoicesStyles.stepTitle}
              >

                تحليل

              </Text>

              <Text
                style={homeWithInvoicesStyles.stepDesc}
              >

                استخراج البيانات

              </Text>

            </View>

            <View style={homeWithInvoicesStyles.timelineLine} />

            <View
              style={homeWithInvoicesStyles.stepBlock}
            >

              <View
                style={[
                  homeWithInvoicesStyles.stepCircle,
                  {
                    backgroundColor: '#A855F7'
                  }
                ]}
              >

                <MaterialIcons
                  name="folder-open"
                  size={24}
                  color="white"
                />

              </View>

              <Text
                style={homeWithInvoicesStyles.stepTitle}
              >

                تصنيف

              </Text>

              <Text
                style={homeWithInvoicesStyles.stepDesc}
              >

                تصنيف تلقائي

              </Text>

            </View>

            <View style={homeWithInvoicesStyles.timelineLine} />

            <View
              style={homeWithInvoicesStyles.stepBlock}
            >

              <View
                style={[
                  homeWithInvoicesStyles.stepCircle,
                  {
                    backgroundColor: '#FBBF24'
                  }
                ]}
              >

                <MaterialIcons
                  name="hourglass-empty"
                  size={24}
                  color="white"
                />

              </View>

              <Text
                style={homeWithInvoicesStyles.stepTitle}
              >

                استرجاع

              </Text>

              <Text
                style={homeWithInvoicesStyles.stepDesc}
              >

                تنبيه بالموعد

              </Text>

            </View>

          </View>

          <Text
            style={homeWithInvoicesStyles.bottomJourneyText}
          >

            كل شيء سيتم تلقائيًا بعد إضافة أول فاتورة ✨

          </Text>

        </View>
        {/* توزيع المصروفات */}

        <View
          style={homeWithInvoicesStyles.chartCard}
        >

          <Text
            style={homeWithInvoicesStyles.sectionTitle}
          >

            توزيع المصروفات

          </Text>

          <View
            style={homeWithInvoicesStyles.categoriesGrid}
          >

            {categories.map((item, index) => (

              <TouchableOpacity
                key={index}
                style={homeWithInvoicesStyles.categoryItem}

                onPress={() =>
                  navigation.navigate(
                    item.screen
                  )
                }
              >

                <View
                  style={[
                    homeWithInvoicesStyles.categoryCircle,
                    {
                      backgroundColor: item.bgColor
                    }
                  ]}
                >

                  <MaterialIcons
                    name={item.icon}
                    size={22}
                    color={item.iconColor}
                  />

                </View>

                <Text
                  style={homeWithInvoicesStyles.categoryName}
                >

                  {item.name}

                </Text>

                <Text
                  style={homeWithInvoicesStyles.categoryAmount}
                >

                  {item.amount} ريال

                </Text>

              </TouchableOpacity>

            ))}

          </View>



        </View>
        {/* Empty invoices */}
        <View
          style={homeWithInvoicesStyles.invoiceCard}
        >
          <View
            style={homeWithInvoicesStyles.invoiceHeader}
          >

            <Text
              style={homeWithInvoicesStyles.sectionTitle}
            > آخر الفواتير</Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  'EmptyBills'
                )
              }
            >

              <Text
                style={homeWithInvoicesStyles.showAll}
              >

                عرض الكل

              </Text>

            </TouchableOpacity>

          </View>
          {
            receipts.length === 0 ?

              (

                <View
                  style={homeWithInvoicesStyles.emptyCard}
                >

                  <View
                    style={homeWithInvoicesStyles.emptyIcon}
                  >

                    <MaterialIcons
                      name="receipt-long"
                      size={40}
                      color="#C9CED8"
                    />

                  </View>

                  <Text
                    style={homeWithInvoicesStyles.emptyTitle}
                  >

                    لا توجد فواتير

                  </Text>

                  <Text
                    style={homeWithInvoicesStyles.emptySub}
                  >

                    ابدأ بإضافة أول فاتورة لرؤية بياناتك وتحليلاتك

                  </Text>

                </View>

              )

              :

              receipts.slice(0, 3).map((item, index) => (

                <TouchableOpacity
                  key={index}
                  style={homeWithInvoicesStyles.invoiceRow}

                  onPress={() =>
                    navigation.navigate(
                      'InvoiceDetails',
                      {
                        receipt: item
                      }
                    )
                  }
                >

                  <View
                    style={
                      homeWithInvoicesStyles.invoiceRight
                    }
                  >

                    <View
                      style={
                        homeWithInvoicesStyles.invoiceLogo
                      }
                    >

                      <MaterialIcons
                        name="receipt-long"
                        size={24}
                        color={colors.blue}
                      />

                    </View>

                    <View
                      style={
                        homeWithInvoicesStyles.invoiceInfo
                      }
                    >

                      <Text
                        numberOfLines={2}
                        ellipsizeMode="tail"
                        style={
                          homeWithInvoicesStyles.invoiceStore
                        }
                      >

                        {item.merchant_name}

                      </Text>

                      <Text
                        style={
                          homeWithInvoicesStyles.invoiceDate
                        }
                      >

                        {
                          item.issued_at?.split('T')[0]
                        }

                      </Text>

                    </View>

                  </View>

                  <View
                    style={homeWithInvoicesStyles.invoiceAmountBox}
                  >

                    <Text
                      style={homeWithInvoicesStyles.invoiceAmount}
                    >

                      {item.total_price}

                    </Text>

                    <Text
                      style={homeWithInvoicesStyles.invoiceCurrency}
                    >

                      ريال

                    </Text>

                  </View>

                </TouchableOpacity>

              ))

          }

        </View>

        {
          showNotifications &&

          <TouchableOpacity
            activeOpacity={1}
            style={
              homeWithInvoicesStyles.notificationOverlay
            }

            onPress={() =>
              setShowNotifications(false)
            }
          >

            <View
              style={
                homeWithInvoicesStyles.notificationModal
              }
            >

              <Text
                style={
                  homeWithInvoicesStyles.notificationTitle
                }
              >

                الإشعارات

              </Text>

              <ScrollView
                showsVerticalScrollIndicator={false}
              >

                {

                  notifications.length === 0 ?

                    (

                      <Text
                        style={
                          homeWithInvoicesStyles.emptyNotificationText
                        }
                      >

                        لا توجد إشعارات

                      </Text>

                    )

                    :

                    notifications.map(item => (

                      <View
                        key={
                          item.notification_id
                        }
                        style={
                          homeWithInvoicesStyles.notificationCard
                        }
                      >

                        <View
                          style={
                            homeWithInvoicesStyles.notificationIconCircle
                          }
                        >

                          <MaterialIcons
                            name="notifications"
                            size={22}
                            color={colors.blue}
                          />

                        </View>

                        <View
                          style={
                            homeWithInvoicesStyles.notificationContent
                          }
                        >

                          <Text
                            style={
                              homeWithInvoicesStyles.notificationCardTitle
                            }
                          >

                            {item.title}

                          </Text>

                          <Text
                            style={
                              homeWithInvoicesStyles.notificationMessage
                            }
                          >

                            {item.message}

                          </Text>

                        </View>

                      </View>

                    ))

                }

              </ScrollView>

            </View>

          </TouchableOpacity>
        }
      </ScrollView>


      <EmptyBottomNavigation
        navigation={navigation}
        activeScreen="HomeScreen"
      />

    </>

  );

}