import styled from "styled-components";
export const HomeContainer = styled.main`
  flex: 1;
  padding-block: 9.2rem;
  > h2 {
    font-family: "Baloo 2";
    font-size: 32px;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["--base-subtitle"]};
    padding-bottom: 5.4rem;
    padding-top: 3.2rem;
  }
`;
export const InfosContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 6.6rem;
  gap: 2rem;
`;
export const TextContainer = styled.div`
  h1 {
    font-size: 4.8rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["--base-title"]};
    font-family: "Baloo 2";
  }
  p {
    padding-top: 1.6rem;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["--base-subtitle"]};
  }
`;
const STATUS_COLORS = {
  yellowDark: "--yellow-dark",
  yellow: "--yellow",
  purple: "--purple-dark",
  brown: "--base-text",
};

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  span {
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statuscolor]]};
    border-radius: 50%;
    padding: 0.8rem;
    > svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  h2 {
    color: ${(props) => props.theme["--base-text"]};
    font-size: 1.6rem;
    line-height: 130%;
  }
`;

export const ContainerInLine = styled.div`
  display: flex;
  padding-bottom: 9.2rem;
  img {
    height: 360px;
  }
`;
