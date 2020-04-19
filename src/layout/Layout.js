import React from 'react';
import {ThemeProvider} from "styled-components";
import styled from 'styled-components';
import { theme } from "../constants/theme";
import {StatusBar, View} from "react-native";

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <StatusBar backgroundColor={'#191C63'}/>
            <StyledWrapper>
                {children}
            </StyledWrapper>
        </ThemeProvider>
    );
};

export default Layout;

const StyledWrapper = styled(View)`
  flex: 1;
`;