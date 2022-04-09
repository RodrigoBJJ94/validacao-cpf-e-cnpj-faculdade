import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import Styles from "./Styles";

export default function Data({ textSearch }) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    async function fetchDetails(textSearch) {
        setLoading(false);
        const web = `https://www.receitaws.com.br/v1/cnpj/${textSearch}`
        try {
            const response = await fetch(web)
            if (response.status == 200) {
                const data = await response.json();
                setData(data);
            } else {
                setData(null);
            }
            setLoading(true);
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        fetchDetails(textSearch)
    }, [textSearch]);

    return (
        <View>
            {data && (
                <View style={Styles.viewData}>
                    <Text style={Styles.textData}>Situação do CNPJ: {data.situacao}</Text>
                    <Text style={Styles.textData}>Razão Social: {data.nome}</Text>
                    <Text style={Styles.textData}>Nome Fantasia: {data.fantasia === "" ? "Não informado" : data.fantasia}</Text>
                    <Text style={Styles.textData}>{`Endereço: ${data.logradouro} ${data.numero}`}</Text>
                    <Text style={Styles.textData}>Bairro: {data.bairro}</Text>
                    <Text style={Styles.textData}>Cidade: {data.municipio}</Text>
                    <Text style={Styles.textData}>CEP: {data.cep}</Text>
                </View>
            )}
        </View>
    );
};
