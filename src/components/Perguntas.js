import styled from "styled-components";
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"


export default function Perguntas() {
   

    const perguntas = [
        { pergunta: "Pergunta 1", key: 1 },
        { pergunta: "Pergunta 2", key: 2 },
        { pergunta: "Pergunta 3", key: 3 },
        { pergunta: "Pergunta 4", key: 4 },
        { pergunta: "Pergunta 5", key: 5 },
        { pergunta: "Pergunta 6", key: 6 },
        { pergunta: "Pergunta 7", key: 7 },
        { pergunta: "Pergunta 8", key: 8 }
    ]

    const cards = [
        { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript", key: 1 },
        { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces", key: 2 },
        { question: "Componentes devem iniciar com __", answer: "Letra maiúscula", key: 3 },
        { question: "Podemos colocar __ dentro do JSX", answer: "expressões", key: 4 },
        { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma", key: 5 },
        { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências", key: 6 },
        { question: "Usamos props para __", answer: "Passar diferentes informações para componentes", key: 7 },
        { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", key: 8 }
    ]

   

    return (
        <>
            {perguntas.map((pergunta) =>
                <div>
                    <PerguntaFechada key={pergunta.key}>
                        <p>{pergunta.pergunta}</p>
                        <img src={seta_play} />
                    </PerguntaFechada>
                </div>)}
            {cards.map((card) =>
                <div>
                    <Perguntaaberta key={card.key}>
                        <img src={seta_virar}/>
                        {card.question}                   
                    </Perguntaaberta>
                </div>)}
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

const Perguntaaberta = styled.div`
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

