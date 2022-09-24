import React from "react";
import { useFonts } from "expo-font";
import { interFonts } from "@assets/fonts";
import { Login } from "@screens/Login";
import * as S from "./App.styles";

export default function App() {
	const [fontsLoaded] = useFonts(interFonts);

	return (
		<S.Container>
			{fontsLoaded ? (
				<Login />
			) : (
				<S.Loader />
			)}
		</S.Container>
	);
}
