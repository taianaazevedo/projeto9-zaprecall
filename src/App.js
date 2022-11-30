import styled from "styled-components";
import Logo from "./components/Logo";
import Pergunta from "./components/Pergunta";
import Footer from "./components/Footer";

export default function App() {

  return (
    <Container>
      <Logo/>
      <Pergunta/>
      <Footer/>
    </Container>
  );
}

const Container = styled.div `
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;

`


