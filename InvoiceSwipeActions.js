import React, { useState } from 'react';

import {
    View,
    TouchableOpacity,
    Modal,
    Text,
} from 'react-native';

import MaterialIcons
    from 'react-native-vector-icons/MaterialIcons';

import { Swipeable }
    from 'react-native-gesture-handler';

import {
    profileStyles,
    colors
} from './styles';

export default function InvoiceSwipeActions({

    children,
    item,
    onDelete,
    onChangeCategory,
    deleteOnly = false

}) {

    const [
        showOptions,
        setShowOptions
    ] = useState(false);

    const [
        showCategories,
        setShowCategories
    ] = useState(false);

    const [
        showDeleteModal,
        setShowDeleteModal
    ] = useState(false);


    return (

        <>

            <Swipeable

                onSwipeableOpen={() => {

                    setShowOptions(true);

                }}

                renderRightActions={() => (
                    <View style={{ width: 1 }} />
                )}

            >

                {children}

            </Swipeable>



            {/* إدارة الفاتورة */}

            <Modal
                transparent
                visible={showOptions}
                animationType="fade"
            >

                <View
                    style={profileStyles.deleteOverlay}
                >

                    <View
                        style={profileStyles.deleteModalBox}
                    >

                        <View
                            style={
                                profileStyles.deleteIconCircle
                            }
                        >

                            <MaterialIcons
                                name="receipt"
                                size={42}
                                color={colors.blue}
                            />

                        </View>

                        <Text
                            style={
                                profileStyles.deleteModalTitle
                            }
                        >

                            إدارة الفاتورة

                        </Text>

                        <Text
    style={
        profileStyles.deleteModalText
    }
>

    {
        deleteOnly
            ? 'يمكنك حذف الفاتورة'
            : 'اختر العملية المطلوبة'
    }

</Text>

                        <View
                            style={{
                                marginTop: 20,
                                width: '100%',
                                paddingHorizontal: 20
                            }}
                        >

                           {
!deleteOnly && (

<TouchableOpacity

    style={{
        height: 50,
        borderRadius: 12,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12
    }}

    onPress={() => {

        setShowOptions(false);

        setShowCategories(true);

    }}
>

    <Text
        style={{
            color: colors.white,
            fontSize: 18,
            fontFamily: 'Tajawal-Medium'
        }}
    >

        إعادة التصنيف

    </Text>

</TouchableOpacity>

)
}


                            <TouchableOpacity

                                style={{
                                    height: 50,
                                    borderRadius: 12,
                                    backgroundColor:
                                        colors.lightRed,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}

                                onPress={() => {

                                    setShowOptions(false);

                                    setShowDeleteModal(true);

                                }}
                            >

                                <Text
                                    style={{
                                        color: colors.red,
                                        fontSize: 18,
                                        fontFamily: 'Tajawal-Medium'
                                    }}
                                >

                                    حذف الفاتورة

                                </Text>

                            </TouchableOpacity>


                            <TouchableOpacity

                                onPress={() =>
                                    setShowOptions(false)
                                }

                                style={{
                                    marginTop: 15,
                                    alignItems: 'center'
                                }}
                            >

                                <Text
                                    style={{
                                        color: colors.gray
                                    }}
                                >

                                    إلغاء

                                </Text>

                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </Modal>



            {/* نافذة إعادة التصنيف */}

            <Modal
                transparent
                visible={showCategories}
                animationType="fade"
            >

                <View
                    style={profileStyles.deleteOverlay}
                >

                    <View
                        style={{
                            width: '88%',
                            backgroundColor:
                                colors.white,
                            borderRadius: 30,
                            padding: 25,
                            alignItems: 'center'
                        }}
                    >

                        <View
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 45,
                                backgroundColor: '#EEF4FF',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >

                            <MaterialIcons
                                name="receipt"
                                size={40}
                                color={colors.blue}
                            />

                        </View>


                        <Text
                            style={{
                                fontSize: 30,
                                marginTop: 18,
                                color: colors.blue,
                                fontFamily: 'Tajawal-Bold'
                            }}
                        >

                            إعادة التصنيف

                        </Text>


                        <Text
                            style={{
                                fontSize: 17,
                                color: colors.gray,
                                marginTop: 8,
                                marginBottom: 22
                            }}
                        >

                            اختر التصنيف المناسب لهذه الفاتورة

                        </Text>


                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-between',
                                width: '100%'
                            }}
                        >

                            {[

                                {

                                    name: 'مقاضي',
                                    icon: 'shopping-basket'

                                },

                                {

                                    name: 'مطاعم',
                                    icon: 'restaurant'

                                },

                                {

                                    name: 'التسوق',
                                    icon: 'shopping-bag'

                                },

                                {

                                    name: 'النقل',
                                    icon: 'directions-bus'

                                },

                                {

                                    name: 'الصحة',
                                    icon: 'favorite-border'

                                },

                                {

                                    name: 'الالتزامات',
                                    icon: 'event'

                                },

                                {

                                    name: 'أخرى',
                                    icon: 'more-horiz'

                                }

                            ].map((category, index) => (

                                <TouchableOpacity

                                    key={index}

                                    style={{
                                        width: '45%',
                                        height: 80,
                                        backgroundColor: '#F8FAFF',
                                        borderRadius: 20,
                                        marginBottom: 12,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderWidth: 1,
                                        borderColor: '#E8EDF7'
                                    }}

                                    onPress={() => {

                                        setShowCategories(false);

                                        onChangeCategory(
                                            item,
                                            category.name
                                        );

                                    }}
                                >

                                    <View
                                        style={{
                                            width: 45,
                                            height: 30,
                                            borderRadius: 21,
                                            backgroundColor: '#EDF4FF',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginBottom: 8
                                        }}
                                    >

                                        <MaterialIcons
                                            name={category.icon}
                                            size={22}
                                            color={colors.blue}
                                        />

                                    </View>


                                    <Text
                                        style={{
                                            fontSize: 17,
                                            color: colors.black,
                                            fontFamily: 'Tajawal-Medium'
                                        }}
                                    >

                                        {category.name}

                                    </Text>

                                </TouchableOpacity>

                            ))}

                        </View>


                        <TouchableOpacity
                            onPress={() =>
                                setShowCategories(false)
                            }
                        >

                            <Text
                                style={{
                                    fontSize: 18,
                                    color: colors.blue,
                                    marginTop: 10
                                }}
                            >

                                إلغاء

                            </Text>

                        </TouchableOpacity>

                    </View>

                </View>

            </Modal>



            {/* نافذة تأكيد حذف الفاتورة */}

            <Modal
                transparent
                visible={showDeleteModal}
                animationType="fade"
            >

                <View
                    style={profileStyles.deleteOverlay}
                >

                    <View
                        style={{
                            width: '88%',
                            backgroundColor: colors.white,
                            borderRadius: 30,
                            padding: 25,
                            alignItems: 'center'
                        }}
                    >

                        <View
                            style={{
                                width: 90,
                                height: 90,
                                borderRadius: 45,
                                backgroundColor: '#FFECEC',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >

                            <MaterialIcons
                                name="delete"
                                size={42}
                                color={colors.red}
                            />

                        </View>


                        <Text
                            style={{
                                fontSize: 28,
                                marginTop: 18,
                                color: colors.red,
                                fontFamily: 'Tajawal-Bold'
                            }}
                        >

                            حذف الفاتورة

                        </Text>


                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: colors.gray,
                                marginTop: 8
                            }}
                        >

                            هل أنت متأكد من حذف الفاتورة؟

                        </Text>


                        <TouchableOpacity

                            style={{
                                width: '100%',
                                height: 55,
                                backgroundColor: colors.red,
                                borderRadius: 15,
                                marginTop: 25,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}

                            onPress={() => {

                                setShowDeleteModal(false);

                                onDelete(item);

                            }}
                        >

                            <Text
                                style={{
                                    fontSize: 18,
                                    color: colors.white
                                }}
                            >

                                نعم، احذف الفاتورة

                            </Text>

                        </TouchableOpacity>


                        <TouchableOpacity

                            style={{
                                marginTop: 15
                            }}

                            onPress={() => {

                                setShowDeleteModal(false);

                            }}
                        >

                            <Text
                                style={{
                                    fontSize: 18,
                                    color: colors.gray
                                }}
                            >

                                إلغاء

                            </Text>

                        </TouchableOpacity>

                    </View>

                </View>

            </Modal>

        </>

    );

}