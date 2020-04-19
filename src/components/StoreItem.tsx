import React from "react";
import { View, Text } from "react-native";
import styled from 'styled-components';
import { TouchableOpacity } from "react-native-gesture-handler";
import { AddToBasketAction } from "../actions/store.action";
import { useDispatch, useSelector } from "react-redux";
import {useNavigation} from '@react-navigation/native';

const StoreItem = ({data} : any) => {

  const navigation = useNavigation();

  const _addToBasket = (item: any) => {
      console.log('item');
      console.log(item);
      console.log('item');
    navigation.navigate('PositionResume', {data: item});
  };

  return (
    <Wrapper onPress={() => _addToBasket(data)}>
      <ItemName>{data.name}</ItemName>
      <ItemPrice>{data.price} $</ItemPrice>
    </Wrapper>
  );
};

export default StoreItem;

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
  margin: 5px 0;
  padding: 20px 22px;
`;
