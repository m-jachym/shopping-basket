import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AddToBasketAction } from "../actions/store.action";
import { useDispatch, useSelector } from "react-redux";
import {useNavigation} from '@react-navigation/native';

const StoreItem = ({ data }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();


  const _addToBasket = (data) => {
    // dispatch(AddToBasketAction(data));
    console.log(data);
    navigation.navigate('PositionResume', {data: data});
  };

  return (
    <Wrapper onPress={() => _addToBasket(data)}>
      <Text>{data.name}</Text>
      <Text>{data.price}</Text>
    </Wrapper>
  );
};

export default StoreItem;

const Wrapper = styled(TouchableOpacity)`
  margin: 5px 5px;
  height: 100px;
  width: 95%;
  background-color: white;
  border: 2px solid blue;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
