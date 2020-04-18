import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

const Store = () => {

    useEffect(() => {
        test();
    },[]);

    const test = async () => {
        let res = await axios.get('https://www.reasonapps.pl/data.json');

        let data = res.data;
        console.log(data);
    };
    return (
        <View>
            <Text>
                elos Store
            </Text>
        </View>
    )
}

export default Store;