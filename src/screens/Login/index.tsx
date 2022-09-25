import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LoginService } from "@services/Login";
import { RegexRepository } from "@utils/regex";
import * as S from "./styles";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [isLogging, setIsLogging] = useState(false);

	const navigation = useNavigation();

	const validFields = (email: string) => {
		const regexRepo = new RegexRepository();
		const emailIsValid = regexRepo.validMail(email);
		return emailIsValid;
	};

	const login = async () => {
		setIsLogging(true)
		const fieldsAreValid = validFields(email);
		if (!fieldsAreValid) {
			Alert.alert('E-mail invalido', 'Insira um e-mail valido para prosseguir')
			setIsLogging(false)
			return
		}
		const loginService = new LoginService(email, password);
		const { success } = await loginService.login();
		if (success) {
			setTimeout(() => setIsLogging(false), 2500);
			setTimeout(() => navigation.navigate("Home"), 3000);

		}
	};

	return (
		<S.Container>
			<S.StatusBar />
			<S.Header>
				<S.HeaderGradientBackground>
					<S.Logo source={require("../../assets/imgs/msn-logo.png")} />
				</S.HeaderGradientBackground>
			</S.Header>
			<S.Form>
				<S.WelcomeMessageView>
					<S.WelcomeMessage>Bem vindo de volta !</S.WelcomeMessage>
				</S.WelcomeMessageView>
				<S.InputView>
					<S.InputLabel>E-mail</S.InputLabel>
					<S.Input
						value={email}
						keyboardType="email-address"
						onChangeText={(value: string) => setEmail(value)}
					/>
				</S.InputView>
				<S.InputView>
					<S.InputLabel>Senha</S.InputLabel>

					<S.Input
						value={password}
						onChangeText={(value: string) => setPassword(value)}
						secureTextEntry={true}
					/>
					<S.ForgotPasswordView>
						<S.ForgotPasswordText>Esqueceu sua senha ?</S.ForgotPasswordText>
					</S.ForgotPasswordView>
				</S.InputView>
				<S.LoginButton disabled={isLogging} onPress={login}>
					<S.LoginButtonText>Entrar</S.LoginButtonText>
				</S.LoginButton>
				<S.SignUpView>
					<S.SignUpText>Ainda nao tem uma conta ?</S.SignUpText>
					<S.SignUpLink>Cadastre-se aqui</S.SignUpLink>
				</S.SignUpView>
			</S.Form>
		</S.Container>
	);
};

export { Login };
