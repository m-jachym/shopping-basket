import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, ScrollView } from "react-native";
import { fetchStoreAction } from "../actions/store.action";
import StoreItem from "../components/StoreItem";

const Store = () => {
  const DATA = useSelector((state) => state.store.store);
  const dispatch = useDispatch();
  useEffect(() => {
    _fetchData();
  }, []);

  const _fetchData = async () => {
    dispatch(fetchStoreAction());
  };
  console.log(DATA);
  return (
    <ScrollView>
      {DATA &&
        DATA.map((data) => (
          <StoreItem key={data.id} data={data}/>
        ))}
    </ScrollView>
  );
};

export default Store;
