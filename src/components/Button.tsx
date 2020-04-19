import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components';

interface Types {
    borderColor?: string,
    bgColor?: string,
    children: string,
    onPress: any,
}

const Button = ({children, onPress, borderColor = 'white', bgColor = 'white'}: Types) => {
    return (
        <ButtonDefault style={{borderColor: borderColor, backgroundColor: bgColor}} onPress={onPress}>
            <ButtonText>
                {children}
            </ButtonText>
        </ButtonDefault>
    );
};

export default Button;

const ButtonText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;

const ButtonDefault = styled(TouchableOpacity)`
  padding: 12px 25px;
  border-width: 3px;
  border-color: ${({theme}) => theme.colors.darkBlue};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;