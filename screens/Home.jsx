import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    View,
    Text
} from 'react-native';
import { TrendingCoins } from '../constants/api';
import Header from '../components/Header';
import HistoricData from '../components/HistoricData';
import { COLORS } from '../constants';
import CoinLists from '../components/CoinLists';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Home = () => {

    const navigation = useNavigation()
    const isLoggedIn = useSelector(state => state?.login?.isLoggedIn);



    useEffect(() => {
        console.log(isLoggedIn)
        //isLoggedIn && navigation.navigate('Login')
        if (!isLoggedIn) {
            navigation.navigate('Login');
        }
    })

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <Header></Header>

            <HistoricData></HistoricData>
            <CoinLists></CoinLists>



        </View>
    )
}

export default Home;