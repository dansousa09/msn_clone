import * as S from "./styles";

const Login = () => {
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
					<S.Input />
				</S.InputView>
				<S.InputView>
					<S.InputLabel>Senha</S.InputLabel>
					<S.Input secureTextEntry={true} />
					<S.ForgotPasswordView>
						<S.ForgotPasswordText>Esqueceu sua senha ?</S.ForgotPasswordText>
					</S.ForgotPasswordView>
				</S.InputView>
				<S.LoginButton>
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
