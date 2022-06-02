import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
  
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// React.createElement(1, 2, 3)
// 1: tipo de elemento html, ou componente
// 2: props
// 3: filhos do elemento/componente, que pode ser um texto, elemento html, ou componente
  

// class TesteCreateElement extends React.Component {
//   render() {
//     return React.createElement('h1', null, `está ${this.props.valorEntrada}`);
//     // neste caso o elemento que é um H1, foi iniciado sem propriedade e com um filho que é um texto
//   }
// }

// ReactDOM.render(
//   React.createElement(TesteCreateElement, {valorEntrada: 'funcionando'}, null),
//   document.getElementById('root')
// );