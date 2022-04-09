import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button({ setTextSearch, text }) {
    return (
        <TouchableOpacity
            onPress={() => setTextSearch(text)}>
           <Text>Botão</Text>
        </TouchableOpacity>
    );
};
