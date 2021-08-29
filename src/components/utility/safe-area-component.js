import { StatusBar, SafeAreaView, Platform } from 'react-native';
import styled from 'styled-components';

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
	${Platform.OS !== 'ios' && `margin-top: ${StatusBar.currentHeight}px`};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;
