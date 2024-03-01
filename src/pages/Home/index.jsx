import { Header } from "../../components/Header";
import {
  HomeContainer,
  InfosContainer,
  InfoWrapper,
  TextContainer,
  ContainerInLine,
} from "./styles";
import Hero from "../../assets/Hero.svg";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { Product } from "./components/Product";
export function Home() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <ContainerInLine>
          <TextContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <InfosContainer>
              <InfoWrapper statuscolor="yellowDark">
                <span>
                  <ShoppingCart weight="fill" size={16} />
                </span>
                <h2>Compra simples e segura</h2>
              </InfoWrapper>
              <InfoWrapper statuscolor="brown">
                <span>
                  <Package weight="fill" size={16} />
                </span>
                <h2>Embalagem mantém o café intacto</h2>
              </InfoWrapper>
              <InfoWrapper statuscolor="yellow">
                <span>
                  <Timer weight="fill" size={16} />
                </span>
                <h2>Entrega rápida e rastreada</h2>
              </InfoWrapper>
              <InfoWrapper statuscolor="purple">
                <span>
                  <Coffee weight="fill" size={16} />
                </span>
                <h2>O café chega fresquinho até você</h2>
              </InfoWrapper>
            </InfosContainer>
          </TextContainer>
          <img src={Hero} alt="" />
        </ContainerInLine>
        <h2>Nossos cafés</h2>
        <Product />
      </HomeContainer>
    </div>
  );
}
