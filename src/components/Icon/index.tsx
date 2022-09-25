import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Fontisto from "@expo/vector-icons/Fontisto";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import Zocial from "@expo/vector-icons/Zocial";

type Props = {
	type: "Entypo" | "AntDesign" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Fontisto" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial" | "Entypo";
	name: any;
};

const Icon = (props: Props) => {
	switch (props.type) {
		case "Entypo":
			return <Entypo name={props.name} {...props} />;
		case "AntDesign":
			return <AntDesign name={props.name} {...props} />;
		case "EvilIcons":
			return <EvilIcons name={props.name} {...props} />;
		case "Feather":
			return <Feather name={props.name} {...props} />;
		case "FontAwesome":
			return <FontAwesome name={props.name} {...props} />;
		case "FontAwesome5":
			return <FontAwesome5 name={props.name} {...props} />;
		case "Fontisto":
			return <Fontisto name={props.name} {...props} />;
		case "Foundation":
			return <Foundation name={props.name} {...props} />;
		case "Ionicons":
			return <Ionicons name={props.name} {...props} />;
		case "MaterialCommunityIcons":
			return <MaterialCommunityIcons name={props.name} {...props} />;
		case "MaterialIcons":
			return <MaterialIcons name={props.name} {...props} />;
		case "Octicons":
			return <Octicons name={props.name} {...props} />;
		case "SimpleLineIcons":
			return <SimpleLineIcons name={props.name} {...props} />;
		case "Zocial":
			return <Zocial name={props.name} {...props} />;
		default:
			return <Entypo name={props.name} />;
	}
};

export { Icon };
