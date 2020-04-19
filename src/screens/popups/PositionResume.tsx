import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {AddToBasketAction} from '../../actions/store.action';
import Layout from "../../layout/Layout";
import Button from "../../components/Button";

const PositionResume = ({navigation, route}: any) => {

    const dispatch = useDispatch();
    const {data} = route.params;

    const addToBasket = async () => {
        await dispatch(AddToBasketAction(data));
        navigation.navigate('Store');
        setTimeout(() => {
            navigation.navigate('AddedToBasket');
        }, 700);
    };

    return (
        <Layout>
            <PopupBackground>
                <PopupBody>
                    <ItemName>{data.name}</ItemName>
                    <ItemPrice>Price: {data.price} $</ItemPrice>
                    <Button onPress={() => addToBasket()} bgColor='#F4A746' borderColor='#F4A746'>
                        Add to cart
                    </Button>
                    <Button onPress={() => navigation.goBack()} borderColor='#2B3A67'>
                        Cancel
                    </Button>
                </PopupBody>
            </PopupBackground>
        </Layout>
    );
};

export default PositionResume

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