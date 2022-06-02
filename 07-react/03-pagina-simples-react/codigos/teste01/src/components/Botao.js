import React from "react";
import "./components.css";

const Botao = ({ children, onClick, isInput }) => {
  const ehNum = (val) => {
    if (!isNaN(val) || val === "L" || val === ".") {
      return true;
    }
    return false;
  };

  const ehIgual = (val) => {
    if (val === "=") {
      return true;
    }
    return false;
  };

  return (
    <>
      {isInput ? (
        <div className="input">{children}</div>
      ) : (
        <div
          className={`botao-wrapper botao ${
            ehIgual(children) ? "btn-igual" : null
          } ${ehNum(children) ? null : "operacao"}`}
          onClick={() => onClick(children)}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default Botao;
