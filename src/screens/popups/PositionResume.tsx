import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {AddToBasketAction} from '../../actions/store.action';

const PositionResume = ({navigation, route}) => {

    const dispatch = useDispatch();

    const {data} = route.params;
    console.log(data);
    const addToBasket = async () => {
        await dispatch(AddToBasketAction(data));
        navigation.goBack();
        setTimeout(() => {
            navigation.navigate('AddedToBasket');
        },1000);
    }

    return (
        <PopupBackground>
            <PopupBody>
                <Text>{data.name}</Text>
                <Text>{data.price}</Text>
            <TouchableOpacity onPress={() => addToBasket()} style={{height: 50, width: 200, backgroundColor: 'yellow'}}>
                <Text>Dodaj do koszyka</Text>
            </TouchableOpacity>
            </PopupBody>
        </PopupBackground>
    );
};

export default PositionResume


const PopupBody = styled(View)`
    height: 300px;
    width: 80%;
    background-color: white;
    border-radius: 20px;
`;

const PopupBackground = styled(View)`
    height: 100%;
    width: 100%;
    background-color: rgba(4,104,204,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;