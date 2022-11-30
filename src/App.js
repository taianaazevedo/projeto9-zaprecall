import styled from "styled-components";
import Logo from "./components/Logo";
import Perguntas from "./components/Perguntas";
import Footer from "./components/Footer";
import { useState } from "react";

export default function App() {
  const [concluidos, setConcluidos] = useState(0);
  const [questao, setQuestao] = useState("");

  return (
    <Container>
      <Logo />
      <Perguntas />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
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


