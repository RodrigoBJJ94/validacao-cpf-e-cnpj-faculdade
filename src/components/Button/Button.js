import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { cnpj } from 'cpf-cnpj-validator';
import Styles from "./Styles";

export default function Button({ setTextSearch, text }) {
    function onButton() {
        if (cnpj.isValid(text)) {
            setTextSearch(text)
        } else {
            Alert.alert("Por favor informe um CNPJ válido!")
        };
    };

    return (
        <View style={Styles.viewButton}>
            <TouchableOpacity style={Styles.button}
                onPress={() => onButton()}>
                <Text style={Styles.textButton}>Consultar CNPJ</Text>
            </TouchableOpacity>
        </View>
    );
};
