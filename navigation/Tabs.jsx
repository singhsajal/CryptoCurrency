import React from "react";
import {
    TouchableOpacity, View
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home, Portfolio, Market, Profile } from "../screens"
import { icons } from "../constants"
import { COLORS } from "../constants";
import TabIcon from "../components/TabIcon";
import { UseDispatch, useDispatch } from "react-redux";
import { TradeModalVisible } from "../stores/TradeReducer";
import { useSelector } from "react-redux";
import TradeModal from "../components/TradeModal";


const Tab = createBottomTabNavigator()






const Tabs = () => {

    const Dispatch = useDispatch()
    const TradeState = useSelector((state) => state.TradeReducer.yourState);

    const ChangeTradeState = () => {

        Dispatch(TradeModalVisible(!TradeState))


    }

    const TabBarCustomButton = ({ children, onPress }) => {
        return (
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={onPress}>
                {children}
            </TouchableOpacity>
        )

    }

    return (
        <View style={{ flex: 1 }}>
            {TradeState && <TradeModal onPress={ChangeTradeState}></TradeModal>}


            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        height: 80,
                        backgroundColor: COLORS.primary,
                        borderTopColor: 'transparent'
                    }

                }}

            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (!TradeState) {
                                return (
                                    <TabIcon
                                        focused={focused}
                                        icon={icons.home}
                                        label='home'
                                    />
                                )
                            }
                        }
                    }}
                    listeners={{
                        tabPress: e => {
                            if (TradeState) {
                                e.preventDefault()
                            }
                        }
                    }}

                />
                <Tab.Screen
                    name="Portfolio"
                    component={Portfolio}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (!TradeState) {
                                return (
                                    <TabIcon
                                        focused={focused}
                                        icon={icons.briefcase}
                                        label='Portfolio'
                                    />
                                )
                            }
                        }
                    }}
                    listeners={{
                        tabPress: e => {
                            if (TradeState) {
                                e.preventDefault()
                            }
                        }
                    }}
                />
                <Tab.Screen
                    name="Trade"
                    component={Home}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (!TradeState) {
                                return (
                                    <TabIcon
                                        focused={focused}
                                        icon={icons.trade}
                                        iconStyle={TradeState ? { width: 15, height: 15 } : null}
                                        label='Trade'
                                        isTrade={true}
                                    />
                                )
                            }
                        },
                        tabBarButton: (props) => (
                            <TabBarCustomButton
                                {...props}
                                onPress={() => { ChangeTradeState() }}>

                            </TabBarCustomButton>
                        )
                    }}
                />
                <Tab.Screen
                    name="Market"
                    component={Market}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (!TradeState) {
                                return (
                                    <TabIcon
                                        focused={focused}
                                        icon={icons.market}
                                        label='Market'
                                    />
                                )
                            }
                        }
                    }}
                    listeners={{
                        tabPress: e => {
                            if (TradeState) {
                                e.preventDefault()
                            }
                        }
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            if (!TradeState) {
                                return (
                                    <TabIcon
                                        focused={focused}
                                        icon={icons.profile}
                                        label='Profile'
                                    />
                                )
                            }
                        }
                    }}
                    listeners={{
                        tabPress: e => {
                            if (TradeState) {
                                e.preventDefault()
                            }
                        }
                    }}
                />

            </Tab.Navigator>

        </View>
    )

}

export default Tabs;