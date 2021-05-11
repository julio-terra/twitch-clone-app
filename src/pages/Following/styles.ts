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
`;
export const Container = styled.View`
    padding-left: 14px
`;
export const Main = styled.View`

`;