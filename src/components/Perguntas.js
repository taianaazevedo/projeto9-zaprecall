import styled from "styled-components";
import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";
import { useState } from "react";



export default function Perguntas({ index, question, answer }) {

    const [perguntaClicada, setPerguntaClicada] = useState([]); // array da pergunta fechada, da tela incial
    const [mostraFechada, setMostraFechada] = useState(true) //pergunta fechada com o play
    const [mostraPergunta, setMostraPergunta] = useState(false) //questão das perguntas
    const [mostrarResposta, setMostrarResposta] = useState(false)

    function clicaCarta(pergunta) {
        const novoArray = [...perguntaClicada, pergunta]
        setPerguntaClicada(novoArray);
        console.log(novoArray)
        setMostraPergunta(true)
        setMostraFechada(false)
    }

    function mostraResposta() {
        setMostraPergunta(false);
        setMostrarResposta(true);
    }

    return (
        <>
            {mostraFechada && <PerguntaFechada>
                <p>Pergunta {index}</p>
                <img src={seta_play} alt=""
                    onClick={() => clicaCarta()}
                />
            </PerguntaFechada>}
            {mostraPergunta && <Cards >
                <img src={seta_virar} onClick={() => mostraResposta()} alt="" />
                <p>{question}</p>
            </Cards>}
            {mostrarResposta && <Resposta>
                <div>{answer}</div>
                <Botao>
                    <BotaoDiv cor="#FF3030">Não lembrei</BotaoDiv>
                    <BotaoDiv cor="#FF922E">Quase não lembrei</BotaoDiv>
                    <BotaoDiv cor="#2FBE34">Zap!</BotaoDiv>
                </Botao>
            </Resposta>}

        </>
    )
}

const PerguntaFechada = styled.div`
 width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
    p {
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
  }

`

const Cards = styled.div`
    width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{
  position: absolute;
  bottom: 10px;
  right: 10px;
}
`

const Resposta = styled.div`
   width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`

const Botao = styled.div`
display: flex;
width:100%;

`

const BotaoDiv = styled.div`
  width: 90px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: ${props => props.cor};
  border-radius: 5px;
  border: 1px ${props => props.cor} blue;
  padding:5px;
  margin: 3px
`