import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styled from 'styled-components';
import Layout from "../../layout/Layout";
import Button from "../../components/Button";

const AddedToBasket = ({navigation}) => {

    const goToBasket = () => {
        navigation.navigate('Basket')
    };
    const goToStore = () => {
        navigation.navigate('Store')
    };

    return (
        <Layout>
            <PopupBackground>
                <PopupBody>
                    <ItemName>Item has been added to your basket!</ItemName>
                    <Button onPress={() => goToBasket()} bgColor='#F4A746' borderColor='#F4A746'>
                        Check your cart
                    </Button>
                    <Button onPress={() =>goToStore()} borderColor='#2B3A67'>
                        Go back to store
                    </Button>
                </PopupBody>
            </PopupBackground>
        </Layout>
    );
};

export default AddedToBasket


const ItemName = styled(Text)`
  color: ${({theme}) => theme.colors.darkBlue};
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`;
const ItemPrice = styled(Text)`
  color: ${({theme}) => theme.colors.darkBlue};
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`;

const PopupBody = styled(View)`
    width: 80%;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 10px 20px 10px;
`;

const PopupBackground = styled(View)`
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;