import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ActivityIndicator, ScrollView, TextInput, TouchableOpacity, View, Text} from "react-native";
import {fetchStoreAction} from "../actions/store.action";
import StoreItem from "../components/StoreItem";
import styled from 'styled-components';
import Layout from '../layout/Layout';
import Icon_Close from "../svg/Icon_Close";

const Store = () => {
    const dispatch = useDispatch();

    const fetchedItems = useSelector((state: any) => state.store);
    const DATA = fetchedItems.store;

    useEffect(() => {
        _fetchData();
        console.log('feczuje useeffect');
    }, []);

    useEffect(() => {
        setValues({...values, products: DATA, visibleProducts: DATA});
        console.log('set valus use effect');
    }, [DATA]);

    const _fetchData = async () => {
        await dispatch(fetchStoreAction());
    };

    const [values, setValues] = useState({
        products: DATA,
        visibleProducts: DATA,
        searchString: ''
    });
    console.log(values.visibleProducts);
    const doSearch = (newText: string) => {
        const {products} = values;

        const filteredProducts = products.filter((item: any) => {
            return item.name.replace(' ', '').toLowerCase().includes(newText.replace(' ', '').toLowerCase());
        });
        setValues({...values, visibleProducts: filteredProducts, searchString: newText});
    };

    const {visibleProducts} = values;

    return (
        <Layout>
            <Wrapper>
                <TextInputWrapper>
                    <Input spellCheck={false} autoCorrect={false} placeholder={'search...'}
                           defaultValue={values.searchString} onChangeText={doSearch} placeholderTextColor="#FFF">
                    </Input>
                </TextInputWrapper>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {   !visibleProducts &&
                        <ActivityIndicator size="large" color="#8E90F0" />
                    }
                    {visibleProducts && visibleProducts.map((item: any) =>
                        <StoreItem key={item.id} data={item}/>
                    )}
                </ScrollView>
            </Wrapper>
        </Layout>
    );
};

export default Store;

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const TextInputWrapper = styled(View)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.lightOrange};
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 12px;
`;
const Input = styled(TextInput)`
  height: 40px;
  font-size: 22px;
  color: ${({theme}) => theme.colors.white};
  flex: 1;
`;
const Reset = styled(TouchableOpacity)`
  height: 20px;
  width: 20px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
