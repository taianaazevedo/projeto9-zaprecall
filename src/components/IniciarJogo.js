import logo from "../assets/img/image 1.png";
import styled from "styled-components";

export default function IniciarJogo({ setMostraTela, setMostraLogo, setMostraCard, setMostraFooter }) {

    function iniciarJogo() {
        setMostraTela(false);
        setMostraLogo(true);
        setMostraCard(true);
        setMostraFooter(true);
    }

    return (
        <Iniciar>
            <div>
                <img src={logo} alt="" />
                <p>ZapRecall</p>
                <button onClick={() => iniciarJogo()} data-test="start-btn">Iniciar Recall!</button>
            </div>
        </Iniciar>
    )
}

const Iniciar = styled.div`
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