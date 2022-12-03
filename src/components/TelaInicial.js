import styled from "styled-components";
import logo from "../assets/img/image 1.png";
import Logo from "./Logo";
import Footer from "./Footer";
import Card from "./Card";
import { useState } from "react";

export default function TelaInicial() {
  const [mostraTela, setMostraTela] = useState(true);
  const [mostraLogo, setMostraLogo] = useState(false);
  const [mostraCard, setMostraCard] = useState(false);
  const [mostraFooter, setMostraFooter] = useState(false);
  const [contador, setContador] = useState(0);


  function iniciarJogo() {
    setMostraTela(false);
    setMostraLogo(true);
    setMostraCard(true);
    setMostraFooter(true);
  }

  return (
    <>
   {mostraTela && <Tela >
      <div>
        <img src={logo} alt="" />
        <p>ZapRecall</p>
        <button onClick={() => iniciarJogo()}>Iniciar Recall!</button>
      </div>
      </Tela>}
      {mostraLogo && <Logo />}
      {mostraCard && <Card contador={contador} setContador={setContador}/>}
      {mostraFooter && <Footer contador={contador} setContador={setContador}/>}
      </>
  )
}

const Tela = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;  
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  
 
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:150px
  }
  p{
    font-size:36px;
    font-weight: 400;
    font-family: 'Righteous';
    line-height: 45px;
    color: #FFFFFF;
  }
  button {
    width: 246px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #D70900;
  }

`