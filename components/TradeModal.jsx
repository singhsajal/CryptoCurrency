import { View, Text, Image, TouchableOpacity, onPress, Modal } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'
import icons from '../constants'



const TradeModal = ({ label, icon, containerStyle, onPress, visible }) => {
    return (
        <Modal transparent visible={visible} animationType="slide">
            <View style={{

                backgroundColor: 'rgba(0, 0, 0, 0.9)', // Adjust opacity as needed
                marginTop: 450
            }}>
                <View style={{ left: 0, width: '100%', padding: SIZES.padding, backgroundColor: COLORS.primary }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white,
                        margin: 5,
                        ...containerStyle
                    }} onPress={onPress}>

                        <Image source={require('../assets/icons/send.png')} resizeMode='contain' style={{ width: 20, height: 20 }}></Image>
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.h3, color: "black" }}>TradeModal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 50,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white,
                        margin: 5,
                        ...containerStyle

                    }} onPress={onPress}>

                        <Image source={require('../assets/icons/withdraw.png')} resizeMode='contain' style={{ width: 20, height: 20 }}></Image>
                        <Text style={{ marginLeft: SIZES.base, ...FONTS.h3, color: "black" }}>TradeModal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: "center", height: 60, width: 60, borderRadius: 30, backgroundColor: COLORS.black, marginHorizontal: "40%", marginVertical: 10 }} onPress={onPress}>

                        <Image source={require('../assets/icons/close.png')}
                            resizeMode='contain'
                            style={{ width: 15, height: 15, tintColor: 'white' }}>

                        </Image>

                        <Text style={{ color: 'white', ...FONTS.h4 }}>close</Text>

                    </TouchableOpacity>
                </View>
            </View>
        </Modal >

        // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', left: 0, padding: SIZES.padding, backgroundColor: COLORS.primary }}>
        //     {/* Darkish Background */}
        //     <View
        //         style={{
        //             position: 'absolute',
        //             top: 0,
        //             left: 0,
        //             width: '100%',
        //             height: '100%',
        //             backgroundColor: 'rgba(0, 0, 0, 0.3)', // Darkish background
        //         }}
        //     ></View>

        //     <View
        //         style={{
        //             width: '80%',
        //             padding: SIZES.padding,
        //             backgroundColor: COLORS.primary,
        //             borderRadius: SIZES.radius,
        //         }}
        //     >
        //         <TouchableOpacity
        //             style={{
        //                 flexDirection: 'row',
        //                 alignItems: 'center',
        //                 justifyContent: 'center',
        //                 height: 50,
        //                 borderRadius: SIZES.radius,
        //                 backgroundColor: COLORS.white,
        //             }}
        //             onPress={onPress}
        //         >
        //             {/* Replace 'icon' with your actual icon */}
        //             <Text style={{ marginLeft: SIZES.base, ...FONTS.h3 }}>TradeModal</Text>
        //         </TouchableOpacity>

        //         <TouchableOpacity
        //             style={{
        //                 flexDirection: 'row',
        //                 alignItems: 'center',
        //                 justifyContent: 'center',
        //                 height: 50,
        //                 borderRadius: SIZES.radius,
        //                 backgroundColor: COLORS.white,
        //                 marginTop: SIZES.base, // Add marginTop for spacing
        //             }}
        //             onPress={onPress}
        //         >
        //             {/* Replace 'icon' with your actual icon */}
        //             <Text style={{ marginLeft: SIZES.base, ...FONTS.h3 }}>TradeModal</Text>
        //         </TouchableOpacity>
        //     </View>
        // </View>
    )
}

export default TradeModal