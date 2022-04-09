import React, { useState } from "react";
import { View } from "react-native";
import Title from "./components/Title/Title";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Data from "./components/Data/Data";
import CPF from "./components/CPF/CPF";
import Styles from "./Styles";

export default function App() {
  const [text, setText] = useState("");
  const [textSearch, setTextSearch] = useState("");

  return (
    <View style={Styles.app}>
      <Title />
      <Input value={text} setText={(search) => setText(search)} />
      <Button setTextSearch={setTextSearch} text={text} />
      <Data textSearch={textSearch} />
      <CPF />
    </View>
  );
};
