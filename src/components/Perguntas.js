import styled from "styled-components";
import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";
import { useState } from "react";
import icone_certo from "../assets/img/icone_certo.png";
import icone_erro from "../assets/img/icone_erro.png";
import icone_quase from "../assets/img/icone_quase.png";



export default function Perguntas({ index, question, answer, setContador, contador }) {
    const [mostraFechada, setMostraFechada] = useState(true); //pergunta fechada com o play
    const [mostraPergunta, setMostraPergunta] = useState(false); //questão das perguntas
    const [mostraResposta, setMostraResposta] = useState(false); //resposta das questões
    const [mostraFinalizada, setMostraFinalizada] = useState(false); //pergunta riscada
    const [cor, setCor] = useState("") // cor da letra finalizada
    const [img, setImg] = useState(seta_play); //icone da resposta respondida
    const [dataTest, setDataTest] = useState(""); //apenas para o data-test passar


    function clicaCarta() {
        setMostraPergunta(true);
        setMostraFechada(false);
    }

    function mostrarResposta() {
        setMostraPergunta(false);
        setMostraResposta(true);
    }

    function finalizar(cor) {
        setMostraResposta(false);
        setMostraFinalizada(true);
        if (cor === "#FF3030") {
            setCor("#FF3030");
            setImg(icone_erro);
            setContador(contador + 1);
            setDataTest("no-icon");
        }
        if (cor === "#FF922E") {
            setCor("#FF922E");
            setImg(icone_quase);
            setContador(contador + 1);
            setDataTest("partial-icon")
        }
        if (cor === "#2FBE34") {
            setCor("#2FBE34");
            setImg(icone_certo);
            setContador(contador + 1);
            setDataTest("zap-icon")
        }
    }


    return (
        <>
            {mostraFechada && <PerguntaFechada data-test="flashcard">
                <p data-test="flashcard-text">Pergunta {index}</p>
                <img src={seta_play} alt="" data-test="play-btn" onClick={() => clicaCarta()}/>
            </PerguntaFechada>}

            {mostraPergunta && <Cards data-test="flashcard">
                <img src={seta_virar} onClick={() => mostrarResposta()} alt="" data-test="turn-btn"/>
                <p data-test="flashcard-text">{question}</p>
            </Cards>}

            {mostraResposta && <Resposta data-test="flashcard">
                <div data-test="flashcard-text">{answer}</div>
                <Botao>
                    <BotaoDiv cor="#FF3030" data-test="no-btn" onClick={() => finalizar("#FF3030")}>Não lembrei</BotaoDiv>
                    <BotaoDiv cor="#FF922E" data-test="partial-btn" onClick={() => finalizar("#FF922E")}>Quase não lembrei</BotaoDiv>
                    <BotaoDiv cor="#2FBE34" data-test="zap-btn" onClick={() => finalizar("#2FBE34")}>Zap!</BotaoDiv>
                </Botao>
            </Resposta>}

            {mostraFinalizada && <PerguntaFinalizada cor={cor} data-test="flashcard">
                <p data-test="flashcard-text">Pergunta {index}</p>
                <img src={img} alt="" data-test={dataTest}/>
            </PerguntaFinalizada>}

        </>
    )
}

const PerguntaFinalizada = styled.div`
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
    text-decoration: line-through;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: ${props => props.cor};
  }

`

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
  border: 1px ${props => props.cor};
  padding:5px;
  margin: 3px
`