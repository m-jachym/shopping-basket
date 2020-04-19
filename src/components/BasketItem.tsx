import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AddToBasketAction } from "../actions/store.action";
import { useDispatch, useSelector } from "react-redux";

const BasketItem = ({ data }: any) => {
  const basket = useSelector((state: any) => state.store.basket);
  const dispatch = useDispatch();

  const _addToBasket = (data:any) => {
    dispatch(AddToBasketAction(data));
  };

  return (
    <Wrapper>
      <TextWrapper>
        <ItemName>{data.name}</ItemName>
        <ItemPrice>price: {data.price} $</ItemPrice>
      </TextWrapper>
      <Remove onPress={() => _addToBasket(data)}>
        <RemoveText>Remove</RemoveText>
      </Remove>
    </Wrapper>
  );
};

export default BasketItem;

const RemoveText = styled(Text)`
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
`;

const Remove = styled(TouchableOpacity)`
  padding: 10px;
  background-color: ${({theme}) => theme.colors.lightOrange};
  border-radius: 10px;
`;

const TextWrapper = styled(View)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const ItemName = styled(Text)`
  color: ${({theme}) => theme.colors.white};
  font-weight: bold;
  font-size: 16px;
`;
const ItemPrice = styled(Text)`
  color: ${({theme}) => theme.colors.white};
  font-size: 12px;
  margin-top: 3px;
`;
const Wrapper = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({theme}) => theme.colors.darkBlue};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  padding: 20px 22px;
`;
