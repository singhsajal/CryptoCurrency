import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
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
import { TextInput } from 'react-native-gesture-handler'
import filter from 'lodash.filter'


const Market = () => {

    const navigation = useNavigation()
    const Dispatch = useDispatch()

    const [List, Setlists] = useState()
    const [FullData, SetFullData] = useState([])
    const [CoinName, SetCoinName] = useState('')
    const [Price, SetPrice] = useState()
    const [ChangePct, SetChangePct] = useState()
    const [isloading, SetIsLoading] = useState(false)
    const [searchInput, SetSearchInput] = useState(false)
    const currency = 'inr'

    const url = CoinList(currency)
    useEffect(() => {

        SetIsLoading(true)
        fetchCoins(url)

    }, [])

    const fetchCoins = async (url) => {
        // setLoading(true);
        const { data } = await axios.get(url);

        // console.log(data);
        Setlists(data)
        SetFullData(data)


        // console.log("listt data", List)
        const ChangePct = data.price_change_percentage_24h
        SetIsLoading(false)


    };

    const SetId = (id) => {
        console.log(id)

        Dispatch(setLatestId(id))
        navigation.navigate('CoinDetails')


    }

    const handleSearch = (text) => {

        SetSearchInput(text)
        const formatedText = text.toLowerCase();
        const filteredData = filter(FullData, (user) => {
            return contains(user, formatedText);

        })
        Setlists(filteredData)
    }

    const contains = (user, text) => {

        // console.log("contains ", user)
        const name = user.id
        if (name.includes(text)) {
            return true
        }
        return false

    }

    if (isloading == true) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
                <ActivityIndicator style={{}} size={'large'} color="white">

                </ActivityIndicator>
            </View>
        )
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

        <View style={{ height: 400, flex: 2, justifyContent: 'space-evenly', padding: 5, backgroundColor: 'black', padding: 10, borderColor: 'grey', alignItems: 'center' }}>
            <View style={{ margin: 5, alignItems: "flex-start" }}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: '300' }}>Market</Text>
            </View>
            <View style={{ borderColor: 'grey', borderWidth: 1, width: 300, borderRadius: 30, margin: 20 }}>
                <TextInput style={{ color: 'white', paddingLeft: 20 }} clearButtonMode='always' placeholder='Search' placeholderTextColor={'grey'}
                    clearButtonColor='grey' onChangeText={(text) => handleSearch(text)}></TextInput>
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

export default Market