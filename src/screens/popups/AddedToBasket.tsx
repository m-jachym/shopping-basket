import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styled from 'styled-components';

const AddedToBasket = ({navigation}) => {

    return (
        <PopupBackground>
            <PopupBody>
                <Text>Przedmiot dodany do koszyka!</Text>
                 <TouchableOpacity onPress={() => navigation.navigate('Basket')} style={{height: 50, width: 50, backgroundColor: 'red'}}>
                    <Text>Idź do koszyka</Text>
                </TouchableOpacity>
                 <TouchableOpacity onPress={() => navigation.navigate('Store')} style={{height: 50, width: 50, backgroundColor: 'red'}}>
                    <Text>Zamawiaj dalej</Text>
                </TouchableOpacity>
            </PopupBody>
        </PopupBackground>
    );
};

export default AddedToBasket


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