import { View, Text, Image } from 'react-native'
import React from 'react'
import { FONTS, COLORS } from '../constants'

const TabIcon = ({ focused, icon, iconStyle, label, isTrade }) => {

    if (isTrade) {
        return (
            <View style={{ alignItems: 'center', justifyContent: "center", height: 60, width: 60, borderRadius: 30, backgroundColor: COLORS.black }}>
                <Image source={icon} resizeMode='contain' style={{ width: 25, height: 25, tintColor: COLORS.white, ...iconStyle }}></Image>
                <Text style={{ color: COLORS.white, ...FONTS.h4 }}>TabIcon</Text>
            </View>
        )
    }
    else {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', }}>

                <Image source={icon}
                    resizeMode='contain'
                    style={{ width: 25, height: 25, tintColor: focused ? COLORS.white : COLORS.secondary, ...iconStyle }}>

                </Image>

                <Text style={{ color: focused ? COLORS.white : COLORS.secondary, ...FONTS.h4 }}>{label}</Text>

            </View>
        )
    }


}

export default TabIcon