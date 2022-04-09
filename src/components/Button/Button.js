import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Styles from "./Styles";

export default function Button({ setTextSearch, text }) {
    return (
        <View style={Styles.viewButton}>
            <TouchableOpacity style={Styles.button}
                onPress={() => setTextSearch(text)}>
                <Text style={Styles.textButton}>Consultar CNPJ</Text>
            </TouchableOpacity>
        </View>
    );
};
