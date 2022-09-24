import styled from 'styled-components/native'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { colors, fonts, metrics } from '@theme/index';
import { Platform } from 'react-native';

export const StatusBar = styled(ExpoStatusBar).attrs({
	translucent: true,
	style: 'dark'
})``;

export const Container = styled.KeyboardAvoidingView.attrs({
	behavior: Platform.OS === 'ios' ? 'padding' : 'height'
})`
	flex: 1;
	width: 100%;
	background-color: ${colors.whiteBackground};
`;

export const Header = styled.View`
	width: 100%;
	height: 30%;
`;

export const HeaderGradientBackground = styled(LinearGradient).attrs({
	colors: colors.blue.gradient,
})`
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.Image``;

export const Form = styled.View`
	flex: 1;
	padding: ${metrics.padding.lg}px;
`;

export const WelcomeMessageView = styled.View`
	width: 100%;
	margin: ${metrics.margin.sl}px 0;
`;

export const WelcomeMessage = styled.Text`
	font-family: ${fonts.inter.bold};
	font-size: ${metrics.fontSize.ml}px;
`;

export const InputView = styled.View`
	width: 100%;
	margin: ${metrics.margin.sl}px 0;
`;

export const InputLabel = styled.Text`
	font-family: ${fonts.inter.bold};
	font-size: ${metrics.fontSize.regular}px;
`;

export const Input = styled.TextInput`
	width: 100%;
	height: 48px;
	background-color: ${colors.input};
	margin-top: ${metrics.margin.extraSmall}px;
	padding: ${metrics.padding.small}px;
	font-family: ${fonts.inter.regular};
	font-size: ${metrics.fontSize.regular}px;
	border-radius: 50%;
`;

export const ForgotPasswordView = styled.TouchableOpacity`
	width: 100%;
	align-items: flex-end;
	margin-top: ${metrics.margin.regular}px;
`;

export const ForgotPasswordText = styled.Text`
	font-family: ${fonts.inter.bold};
	color: ${colors.blue.dark};
`;

export const LoginButton = styled.TouchableOpacity`
	width: 100%;
	background-color: ${colors.blue.dark};
	margin: ${metrics.margin.sl}px 0;
	padding: ${metrics.padding.sl}px;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
`;

export const LoginButtonText = styled.Text`
	color: ${colors.whiteBackground};
	font-family: ${fonts.inter.bold};
	font-size: ${metrics.fontSize.normal}px;
`;

export const SignUpView = styled.View`
	width: 100%;
	height: 10%;
	align-items: center;
	justify-content: center;
`;

export const SignUpText = styled.Text`
	color: ${colors.blackText};
	font-family: ${fonts.inter.regular};
	font-size: ${metrics.fontSize.small}px;
`;

export const SignUpLink = styled.Text`
	color: ${colors.blue.dark};
	font-family: ${fonts.inter.semiBold};
	font-size: ${metrics.fontSize.small}px;
	text-decoration: underline;
`;
