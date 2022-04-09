import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import Styles from "./Styles";

export default function CPF() {
    return (
        <View style={Styles.viewButton}>
            <TouchableOpacity style={Styles.button}
                onPress={() => Linking.openURL(
                    "https://servicos.receita.fazenda.gov.br/Servicos/CPF/ConsultaSituacao/ConsultaPublica.asp")}>
                <Text style={Styles.textButton}>Consultar CPF</Text>
            </TouchableOpacity>
        </View>
    );
};
