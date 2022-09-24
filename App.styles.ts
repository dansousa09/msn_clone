import styled from 'styled-components/native';
import { colors } from '@theme/index';


export const Container = styled.SafeAreaView`
	flex: 1;
	background-color: ${colors.whiteBackground};
	align-items: "center";
	justify-content: "center";
`;

export const Loader = styled.ActivityIndicator.attrs({ size: 'large', color: colors.blue.primary })``;
