import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { CoinList } from '../constants/api'
import axios from 'axios'
import { COLORS, SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native'
import { TrendingCoins } from '../constants/api'
import { useDispatch } from 'react-redux'
import { setLatestId } from '../stores/TrendCoinData'
import CoinDetails from '../screens/CoinDetails'

const CoinLists = () => {

    const navigation = useNavigation()
    const Dispatch = useDispatch()

    const [List, Setlists] = useState()
    const [CoinName, SetCoinName] = useState('')
    const [Price, SetPrice] = useState()
    const [ChangePct, SetChangePct] = useState()
    const currency = 'inr'


    useEffect(() => {
        fetchCoins()

    }, [])

    const fetchCoins = async () => {
        // setLoading(true);
        const { data } = await axios.get(TrendingCoins(currency));

        // console.log(data);
        Setlists(data)


        // console.log("listt data", List)
        const ChangePct = data.price_change_percentage_24h


    };

    const SetId = (id) => {
        console.log(id)
        Dispatch(setLatestId(id))

        navigation.navigate('CoinDetails')

    }






    const renderItem = ({ item }) => {


        // console.log("inside render", item)


        return (

            < View style={{ height: 70, width: 290, margin: 10, borderWidth: 1, borderColor: "grey", borderRadius: 10, padding: 10 }}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => SetId(item.id)}>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: item.image }} style={{ height: 50, width: 50 }}></Image>
                    </View>

                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white' }} >{item.id}</Text>
                        <Text style={{ color: 'white' }}>{item.current_price} INR</Text>

                        <View style={{ flexDirection: 'row' }}>
                            {ChangePct != 0 &&
                                <Image source={require('../assets/icons/up-arrow.png')} style={{ width: 10, height: 10, alignSelf: "center", tintColor: (item.price_change_percentage_24h > 0) ? COLORS.lightGreen : COLORS.red, transform: (item.price_change_percentage_24h > 0 ? [{ rotate: '45deg' }] : [{ rotate: '125deg' }]) }}>

                                </Image>}

                            <Text style={{ marginLeft: SIZES.base, alignSelf: 'flex-end', color: (ChangePct == 0) ? COLORS.lightGray3 : (item.price_change_percentage_24h > 0) ? COLORS.lightGreen : COLORS.red }}>{item.price_change_percentage_24h}%</Text>
                        </View>

                    </View>



                </TouchableOpacity>

            </View >
        )
    }







    return (

        <View style={{ height: 400, flex: 2, justifyContent: 'space-evenly', padding: 5, backgroundColor: 'black', padding: 10, margin: 10, borderColor: 'grey' }}>
            <View style={{ margin: 5, alignItems: "flex-start" }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Trending Coins</Text>
            </View>
            <FlatList
                data={List}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}


            >

            </FlatList>
        </View>

    )
}

export default CoinLists