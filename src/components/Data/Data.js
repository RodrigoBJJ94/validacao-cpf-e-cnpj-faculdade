import React from "react";
import { View, Text } from "react-native";

export default function Data({ data }) {
    return (
        <View>
            {data && (
                <View>
                    <Text>Situação do CNPJ: {data.situacao}</Text>
                    <Text>Razão Social: {data.nome}</Text>
                    <Text>Nome Fantasia: {data.fantasia}</Text>
                    <Text>{`Endereço: ${data.logradouro} ${data.numero}`}</Text>
                    <Text>Bairro: {data.bairro}</Text>
                    <Text>Cidade: {data.municipio}</Text>
                    <Text>CEP: {data.cep}</Text>
                </View>
            )}
        </View>
    );
};
