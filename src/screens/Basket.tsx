import React from "react";
import {useSelector} from "react-redux";
import {ScrollView, Text, View} from "react-native";
import BasketItem from "../components/BasketItem";
import Layout from '../layout/Layout';
import styled from 'styled-components';

const Basket = () => {

    const BasketItems = useSelector((state) => state.store.basket);

    const totalPrice = Math.round(BasketItems.map(item => item.price).reduce(function (a, b) {
        return a + b
    }, 0) * 100) / 100;

    return (
        <Layout>
            <Wrapper>
                <Header>
                    <BasketHeaderText>
                        Your Cart
                    </BasketHeaderText>
                    <Text style={{color: 'white'}}>Total Amount: {totalPrice} $</Text>
                </Header>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {BasketItems &&
                    BasketItems.map((item) => (
                        <BasketItem key={item.id + 999} data={item}/>
                    ))}
                </ScrollView>
            </Wrapper>
        </Layout>
    );
};

export default Basket;


const Header = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.darkBlue};
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 12px;
`;
const BasketHeaderText = styled(Text)`
height: 40px;
  font-size: 22px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.white};
`;
const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;