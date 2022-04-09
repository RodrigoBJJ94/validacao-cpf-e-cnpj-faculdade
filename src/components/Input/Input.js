import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Input({ value, setText }) {
    return (
        <View>
            <Text>CNPJ</Text>
            <TextInput
                onChangeText={(text) => setText(text)}
                value={value}
                style={{ backgroundColor: "pink" }}
            />
        </View>
    );
};
