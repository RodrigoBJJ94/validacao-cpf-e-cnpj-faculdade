import React, { useState, useEffect } from "react";
import { View } from "react-native";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Data from "./components/Data/Data";

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
      <Title />
      <Input value={text} setText={(search) => setText(search)} />
      <Button setTextSearch={setTextSearch} text={text} />
      <Data data={data} />
    </View>
  );
};

//04008342000109
