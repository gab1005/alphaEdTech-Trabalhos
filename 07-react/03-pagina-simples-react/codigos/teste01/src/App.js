import React, { useState } from "react";
import "./styles.css";
import Botao from "./components/Botao";
import * as math from "mathjs";

const arrOperacoes = ["*", "/", "+", ".", "-"];

export default function App() {
  const [input, setInput] = useState("");
  function insereNum(val) {
    setInput(input + val);
  }
  function insereOperacao(val) {
    if (
      input === "" ||
      (arrOperacoes.includes(input[input.length - 1]) &&
        arrOperacoes.includes(val))
    ) {
      return;
    } else {
      setInput(input + val);
    }
  }

  function calcular() {
    if (input === "" || arrOperacoes.includes(input[input.length - 1])) {
      return input;
    } else {
      setInput(math.evaluate(input));
    }
  }

  return (
    <div className="App">
      <h1>Calculadora com React</h1>
      <div className="calc-wrapper">
        <Botao isInput>{input}</Botao>
        <div className="linha">
          <Botao onClick={insereNum}>7</Botao>
          <Botao onClick={insereNum}>8</Botao>
          <Botao onClick={insereNum}>9</Botao>
          <Botao onClick={insereOperacao}>/</Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereNum}>4</Botao>
          <Botao onClick={insereNum}>5</Botao>
          <Botao onClick={insereNum}>6</Botao>
          <Botao onClick={insereOperacao}>*</Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereNum}>1</Botao>
          <Botao onClick={insereNum}>2</Botao>
          <Botao onClick={insereNum}>3</Botao>
          <Botao onClick={insereOperacao}>+</Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereOperacao}>.</Botao>
          <Botao onClick={insereNum}>0</Botao>
          <Botao onClick={() => setInput("")}>C</Botao>
          <Botao onClick={insereOperacao}>-</Botao>
        </div>
        <div className="linha">
          <Botao onClick={calcular}>=</Botao>
        </div>
      </div>
    </div>
  );
}
