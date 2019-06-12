import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const previsao31_05 = {
    data: '31/05/2019',
    resumo: 'Ensolarado',
    imagem: 'https://www.onlygfx.com/wp-content/uploads/2018/09/4-clipart-sun-1.png',
    temperatura: {
        max: 31,
        min: 20
    }
}

const previsao01_06 = {
    data: '01/06/2019',
    resumo: 'Nublado',
    imagem: 'https://cdn.pixabay.com/photo/2013/04/01/09/22/clouds-98536_960_720.png',
    temperatura: {
        max: 25,
        min: 18
    }
}

// Um componente para criar um card só
class Previsao extends React.Component {
    render(){
        return (
            <div className="previsao">
                <h2 className="previsao__data">{this.props.data}</h2>
                <p className="previsao__resumo">{this.props.resumo}</p>
                <img className="previsao__img" src={this.props.imagem}></img>
                <table className="previsao-temperatura">
                    <tr className="previsao-temperatura__linha">
                        <th>Máximo</th>
                        <td>{this.props.temperatura.max}</td>
                    </tr>
                    <tr className="previsao-temperatura__linha">
                        <th>Mínimo</th>
                        <td>{this.props.temperatura.min}</td>
                    </tr>
                </table>
                <p></p>
                <p></p>
            </div>
        )
    }
}

// Um outro componente para renderizar os dois
class Container extends React.Component {
    render(){   
        return (
            // Como ela sabe que precisa renderizar dois cards, ela já chama o componente duas vezes para criar
            <div className="previsao-container">
                <Previsao
                data= {previsao31_05.data}
                resumo= {previsao31_05.resumo}
                imagem= {previsao31_05.imagem}
                temperatura= {previsao01_06.temperatura}
                />
                <Previsao
                data= {previsao01_06.data}
                resumo= {previsao01_06.resumo}
                imagem= {previsao01_06.imagem}
                temperatura= {previsao01_06.temperatura}
                />
            </div>
        )
    }
}


ReactDOM.render(<Container />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
