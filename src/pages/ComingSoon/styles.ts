import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Contants from 'expo-constants';
import  Colors from '../../styles/colors';

const StatusbarHeight = Platform.OS === 'android'?
    Contants.statusBarHeight : 0;

export const Wrapper = styled.SafeAreaView`
    background: ${Colors.primary};
    flex: 1;
    padding-top: ${StatusbarHeight + 'px'};

    justify-content: center;
    align-items: center;
`;
export const Headding = styled.Text`
    color: ${Colors.purple};
    font-family: roboto-500;
    font-size: 30px;

`;
