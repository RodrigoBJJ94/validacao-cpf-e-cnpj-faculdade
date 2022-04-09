import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function Button({ setTextSearch, text }) {
    return (
        <View>
            <TouchableOpacity
                onPress={() => setTextSearch(text)}>
                <Text>Consultar CNPJ</Text>
            </TouchableOpacity>
        </View>
    );
};
