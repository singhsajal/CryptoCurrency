


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    View,
    Text, Image
} from 'react-native';
import { TrendingCoins } from '../constants/api';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { SingleCoin } from '../constants/api';
import { useNavigation } from '@react-navigation/native';
import ChartScreen from './ChartScreen';


const CoinDetails = () => {

    const navigation = useNavigation()

    const latestCoin = useSelector(state => state?.TrendCoinData?.latestId);

    const [CoinList, SetCoinlists] = useState([])
    const [CoinName, SetCoinName] = useState('')
    const [Price, SetPrice] = useState([])
    const [ChangePct, SetChangePct] = useState()
    const [Data, SetData] = useState([])
    const [MarketCap, SetMarketCap] = useState('')
    const [Volume, SetVolume] = useState('')
    const [High, SetHigh] = useState('')
    const [low, SetLow] = useState('')
    const currency = 'inr'

    const fetchCoins = async () => {
        // setLoading(true);
        const { data } = await axios.get(SingleCoin(latestCoin));




        SetPrice(data.market_data.current_price["inr"])
        SetData(data)
        SetChangePct(data.market_data.price_change_percentage_24h)
        SetMarketCap(data.market_data.market_cap_rank)
        SetVolume(data.market_data.total_volume.inr % 1000000)
        SetHigh(data.market_data.high_24h.inr)
        SetLow(data.market_data.low_24h.inr)

    };


    useEffect(() => {
        fetchCoins()

    }, [latestCoin, Price])

    const OpenChart = () => {

        navigation.navigate('ChartScreen')
    }

    // setInterval(() => {

    //     CoinList.forEach((item) => {
    //         console.log(item.id)
    //     });

    // }, 3000);





    return (

        <View style={{ backgroundColor: 'black' }}>


            <View style={{ paddingHorizontal: SIZES.padding, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, backgroundColor: COLORS.gray }}>
                <View style={{}}>
                    <Text style={{ ...FONTS.h3, color: 'white' }}>{latestCoin}</Text>
                    <View style={{ flexDirection: 'row', alignItems: "flex-end" }}>

                        <Text style={{ marginLeft: SIZES.base, ...FONTS.h2, color: COLORS.white, alignItems: "flex-end" }}>
                            {Price}
                        </Text>
                        <Text style={{ color: COLORS.lightGray3, ...FONTS.h3 }}>INR</Text>




                    </View>

                    {/* ------------change percentage------ */}

                    <View style={{ flexDirection: 'row' }}>
                        {ChangePct != 0 &&
                            <Image source={icons.upArrow} style={{ width: 10, height: 10, alignSelf: "center", tintColor: (ChangePct > 0) ? COLORS.lightGreen : COLORS.red, transform: (ChangePct > 0 ? [{ rotate: '45deg' }] : [{ rotate: '125deg' }]) }}>

                            </Image>}

                        <Text style={{ marginLeft: SIZES.base, alignSelf: 'flex-end', color: (ChangePct == 0) ? COLORS.lightGray3 : (ChangePct > 0) ? COLORS.lightGreen : COLORS.red }}>{ChangePct}%</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 30, marginBottom: -15, paddingHorizontal: SIZES.radius }}>

                        <TouchableOpacity label="transfer" icon={icons.send} containerStyle={{ flex: 1, height: 40, marginRight: SIZES.radius, backgroundColor: 'lightblue', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{}}>
                                {/* <Image source={require('../assets/icons/withdraw.png')} resizeMode='contain' style={{ width: 20, height: 20 }}></Image> */}
                            </View>
                            <View style={{}}>
                                <Text style={{ color: 'black' }}>BUY</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity label="transfer" icon={icons.send} containerStyle={{ flex: 1, height: 40, marginRight: SIZES.radius, backgroundColor: 'red', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{}}>
                                {/* <Image source={require('../assets/icons/withdraw.png')} resizeMode='contain' style={{ width: 20, height: 20 }}></Image> */}
                            </View>
                            <View style={{}}>
                                <Text style={{ color: 'white' }}>SELL</Text>
                            </View>

                        </TouchableOpacity>

                    </View>

                </View>
            </View>

            <View style={{ paddingHorizontal: SIZES.padding, borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: COLORS.gray, height: 550, width: 365, marginTop: 15 }}>
                <View style={{ alignItems: 'center', margin: 20 }}>
                    <Image source={{ uri: Data?.image?.large }} style={{ width: 100, height: 100 }}></Image>
                </View>


                <View style={{ flexDirection: 'row', margin: 5, backgroundColor: 'black', padding: 10 }}>
                    <View style={{ flex: 10 }}>
                        <Text style={{ color: 'white' }}>Market Cap</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ color: 'white' }}>{MarketCap}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', margin: 5, padding: 10 }}>
                    <View style={{ flex: 10 }}>
                        <Text style={{ color: 'white' }}>Volume</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ color: 'white' }}>{Volume} m</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', margin: 5, backgroundColor: 'black', padding: 10 }}>
                    <View style={{ flex: 10 }}>
                        <Text style={{ color: 'white' }}>Percentage change in 24h</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ color: 'white' }}>{ChangePct}%</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', margin: 5, padding: 10 }}>
                    <View style={{ flex: 10 }}>
                        <Text style={{ color: 'white' }}>High</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ color: 'white' }}>{High}</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', margin: 5, backgroundColor: 'black', padding: 10 }}>
                    <View style={{ flex: 10 }}>
                        <Text style={{ color: 'white' }}>Low</Text>
                    </View>
                    <View style={{ flex: 3 }}>
                        <Text style={{ color: 'white' }}>{low}%</Text>
                    </View>
                </View>



                <View style={{ alignItems: 'center', justifyContent: 'center', margin: 20 }}>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', borderWidth: 1, borderColor: 'white', height: 50, width: 100, borderRadius: 10 }} onPress={OpenChart}>
                        <Text style={{ color: 'white' }}>View Chart</Text>
                    </TouchableOpacity>
                </View>

            </View >




        </View>
    )
}

export default CoinDetails