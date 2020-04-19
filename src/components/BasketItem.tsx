import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AddToBasketAction } from "../actions/store.action";
import { useDispatch, useSelector } from "react-redux";

const BasketItem = ({ data }) => {
  const basket = useSelector((state) => state.store.basket);
  const dispatch = useDispatch();

  const _addToBasket = (data) => {
    dispatch(AddToBasketAction(data));
    console.log(basket);
  };

  return (
    <Wrapper>
      <View>
        <Text>{data.name}</Text>
        <Text>{data.price}</Text>
      </View>
      <TouchableOpacity onPress={() => _addToBasket(data)} style={{padding: 10, backgroundColor: 'yellow', borderRadius: 10}}>
        <Text>usuń z koszyka</Text>
      </TouchableOpacity>
    </Wrapper>
  );
};

export default BasketItem;

const Wrapper = styled(TouchableOpacity)`
  margin: 5px 5px;
  height: 100px;
  width: 95%;
  background-color: white;
  border: 2px solid blue;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
