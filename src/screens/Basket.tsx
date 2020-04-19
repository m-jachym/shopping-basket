import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, ScrollView } from "react-native";
import { fetchStoreAction } from "../actions/store.action";
import BasketItem from "../components/BasketItem";

const Basket = () => {
    const BasketItems = useSelector((state) => state.store.basket);
    const dispatch = useDispatch();

    console.log(BasketItems);
    return (
      <ScrollView>
        {BasketItems &&
          BasketItems.map((item) => (
            <BasketItem key={item.id + 999} data={item}/>
          ))}
      </ScrollView>
    );
}

export default Basket;