import React from 'react';
import './style.css';

export default class BookList extends React.Component{
    render(){
        return(
            <div className="booklist">
                <h1 className="booklist__title" >Books List</h1>
                <table border="0">
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Total pages</th>
                    <th>Pages read</th>
                    <th>Pages left</th>

                    <tr>
                        <td>Os Contos do Rei do Inverno</td>
                        <td>Romance, Ficção</td>
                        <td>528</td>
                        <td>100</td>
                        <td>428</td>
                    </tr>

                    <tr>
                        <td>Harry Potter e o Cálice de Fogo</td>
                        <td>Fantasia</td>
                        <td>584</td>
                        <td>200</td>
                        <td>384</td>
                    </tr>

                    <tr>
                        <td>O pequeno principe</td>
                        <td>Fábula</td>
                        <td>96</td>
                        <td>86</td>
                        <td>10</td>
                    </tr>

                    <tr>
                        <td>O Poder do Hábito</td>
                        <td>autoajuda</td>
                        <td>408</td>
                        <td>204</td>
                        <td>204</td>
                    </tr>

                    <tr>
                        <td>SCRUM: a arte de fazer o dobro do trabalho na metade do tempo</td>
                        <td>autoajuda</td>
                        <td>256</td>
                        <td>56</td>
                        <td>200</td>
                    </tr>

                    <tr>
                        <td>Rápido e devagar</td>
                        <td>autoajuda</td>
                        <td>608</td>
                        <td>408</td>
                        <td>200</td>
                    </tr>

                    <tr>
                        <td>Antifrágil (Nova edição): Coisas que se beneficiam com o caos</td>
                        <td>autoajuda</td>
                        <td>616</td>
                        <td>200</td>
                        <td>416</td>
                    </tr>

                    <tr>
                        <td>Atenção Plena: Mindfulness</td>
                        <td>autoajuda</td>
                        <td>208</td>
                        <td>208</td>
                        <td>0</td>
                    </tr>

                    <tr>
                        <td>Os Contos do Rei Careca</td>
                        <td>Inclivel</td>
                        <td>10.000</td>
                        <td>1</td>
                        <td>9.999</td>
                    </tr>
                </table>
            </div>
        );
    }
}
