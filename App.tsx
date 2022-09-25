import React from "react";
import { useFonts } from "expo-font";
import { interFonts } from "@assets/fonts";
import { Routes } from "@routes/index";
import * as S from "./App.styles";

export default function App() {
	const [fontsLoaded] = useFonts(interFonts);

	return fontsLoaded ? <Routes /> : <S.Loader />;
}
