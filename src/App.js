import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Input from "./Input";
import Button from "./Button";

export default function App() {
  const [text, setText] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchDetails(textSearch) {
    setLoading(false);
    const kitsu = `https://www.receitaws.com.br/v1/cnpj/${textSearch}`
    try {
      const response = await fetch(kitsu)
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
      <Text>Validação de CNPJ e CPF</Text>
      <Text>CNPJ</Text>
      <Input value={text} setText={(search) => setText(search)} />
      <Button setTextSearch={setTextSearch} text={text} />
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
    </View>
  );
};

//04008342000109
