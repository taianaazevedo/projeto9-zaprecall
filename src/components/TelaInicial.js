import Iniciar from "./IniciarJogo"
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



  return (
    <>
      {mostraTela && <Iniciar
        setMostraTela={setMostraTela}
        setMostraLogo={setMostraLogo}
        setMostraCard={setMostraCard}
        setMostraFooter={setMostraFooter} />}
      {mostraLogo && <Logo />}
      {mostraCard && <Card
        contador={contador}
        setContador={setContador} />}
      {mostraFooter && <Footer
        contador={contador} />}
    </>
  )
}

