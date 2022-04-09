import React from "react";
import { TextInput } from "react-native";

export default function Input({ value, setText }) {
    return (
        <TextInput
            onChangeText={(text) => setText(text)}
            value={value}
            style={{backgroundColor: "pink"}}
        />
    );
};
