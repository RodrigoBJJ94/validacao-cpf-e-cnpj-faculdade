import React from "react";
import { View, Text, TextInput } from "react-native";
import Styles from "./Styles";

export default function Input({ value, setText }) {
    return (
        <View style={Styles.viewInput}>
            <Text style={Styles.title}>CNPJ</Text>
            <TextInput
                onChangeText={(text) => setText(text)}
                value={value}
                style={Styles.input}
            />
        </View>
    );
};
