import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { HistoricalChart } from '../constants/api'
import { useSelector } from 'react-redux'

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import axios from 'axios';


const HistoricData = () => {

    const [CoinList, SetCoinlists] = useState([])
    const [CoinName, SetCoinName] = useState('')
    const [Price, SetPrice] = useState()
    const [ChangePct, SetChangePct] = useState()
    const [ChartData, SetChartData] = useState([])
    const [Days, SetDays] = useState()
    const currency = 'inr'
    const coin = "bitcoin"

    const latestId = useSelector(state => state?.TrendCoinData?.latestId);



    useEffect(() => {
        FetchHistoricData()
        console.log("latest Id", latestId)
    }, [latestId])

    const FetchHistoricData = async () => {
        console.log("hello")
        // setLoading(true);
        const { data } = await axios.get(HistoricalChart(coin, 1, currency));
        // console.log("historic data", data)

        SetChartData(data.prices)
        setflag(true);
        // console.log(data);



    };
    //console.log("  DATA  ", ChartData)






    return (
        <View style={{ marginVertical: 10 }}>
            <LineChart
                data={{
                    labels: []
                    //  ChartData.map((coin) => {
                    //     let date = new Date(coin[0]);
                    //     let time =
                    //         date.getHours() > 12
                    //             ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    //             : `${date.getHours()}:${date.getMinutes()} AM`;
                    //     return Days === 1 ? time : date.toLocaleDateString();
                    // }),
                    ,
                    datasets: [
                        {
                            data: ChartData.map((coin) => coin[1]),
                            label: `Price ( Past 7 Days ) in inr`,
                            borderColor: "",
                        },
                    ],

                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "black",
                    backgroundGradientFrom: "black",
                    backgroundGradientTo: "green",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "2",
                        strokeWidth: "2",
                        stroke: "green"
                    }
                }}
                bezier
                // Hide dots
                // Hide shadow
                withShadow={false}
                withHorizontalLines={false}
                withVerticalLines={false}
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
        </View>
    )
}

export default HistoricData