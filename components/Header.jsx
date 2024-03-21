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


const Header = () => {

    const latestCoin = useSelector(state => state?.TrendCoinData?.latestId);

    const [CoinList, SetCoinlists] = useState([])
    const [CoinName, SetCoinName] = useState('')
    const [Price, SetPrice] = useState([])
    const [ChangePct, SetChangePct] = useState()
    const currency = 'inr'

    const fetchCoins = async () => {
        // setLoading(true);
        const { data } = await axios.get(SingleCoin("bitcoin"));

        console.log("price", data.market_data.current_price["inr"]);

        SetPrice(data.market_data.current_price["inr"])
        // var element = data[0]

        // console.log("element", element)

        // SetCoinName(data.id)
        // SetPrice(element.current_price)
        SetChangePct(data.market_data.price_change_percentage_24h)



    };


    useEffect(() => {
        fetchCoins()

    }, [latestCoin, Price])


    // setInterval(() => {

    //     CoinList.forEach((item) => {
    //         console.log(item.id)
    //     });

    // }, 3000);

    const correctPrice = (Price) => {

        // Convert the number to a string
        let numStr = Price.toString();

        // Split the number into integer and decimal parts
        let parts = numStr.split('.');

        // Format the integer part with commas based on the Indian numbering system
        let formattedInteger = parts[0].replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');

        // Combine the formatted integer part with the decimal part
        let result = formattedInteger + (parts[1] ? '.' + parts[1] : '');

        // Add the Rupees symbol (₹) to the result
        result = '₹' + result;

        return result;
    }





    return (


        <View style={{ paddingHorizontal: SIZES.padding, borderBottomLeftRadius: 25, borderBottomRightRadius: 25, backgroundColor: COLORS.gray }}>
            <View style={{}}>
                <Text style={{ ...FONTS.h3, color: COLORS.lightGray3 }}>Bitcoin</Text>
                <View style={{ flexDirection: 'row', alignItems: "flex-end" }}>

                    <Text style={{ marginLeft: SIZES.base, ...FONTS.h2, color: COLORS.white, alignItems: "flex-end" }}>
                        {correctPrice(Price)}
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

                    <TouchableOpacity label="transfer" icon={icons.send} containerStyle={{ flex: 1, height: 40, marginRight: SIZES.radius, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{}}>
                            {/* <Image source={require('../assets/icons/withdraw.png')} resizeMode='contain' style={{ width: 20, height: 20 }}></Image> */}
                        </View>
                        <View style={{}}>
                            <Text style={{ color: 'black' }}>Widraw</Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity label="transfer" icon={icons.send} containerStyle={{ flex: 1, height: 40, marginRight: SIZES.radius, backgroundColor: 'white', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{}}>
                            {/* <Image source={require('../assets/icons/withdraw.png')} resizeMode='contain' style={{ width: 20, height: 20 }}></Image> */}
                        </View>
                        <View style={{}}>
                            <Text style={{ color: 'black' }}>Transfer</Text>
                        </View>

                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

export default Header