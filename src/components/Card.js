
import Perguntas from "./Perguntas"

export default function Card() {
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
            {cards.map((card, index) => <Perguntas index={index + 1} question={card.question} answer={card.answer} />)}
        </>
    )
}