import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${(props) => props.theme["--base-card"]};
  border-top-right-radius: 3.6rem;
  border-top-left-radius: 0.6rem;
  border-bottom-left-radius: 3.6rem;
  border-bottom-right-radius: 0.6rem;
  width: 25.6rem;

  img {
    width: 12rem;
    margin: -2rem 6.8rem 1.2rem 6.8rem;
  }
  > span {
    background-color: ${(props) => props.theme["--yellow-light"]};
    padding: 4px 8px;
    border-radius: 100px;
    width: fit-content;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
    color: ${(props) => props.theme["--yellow-dark"]};
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
  }
  h2 {
    font-family: "Baloo 2";
    font-size: 2rem;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme["--base-subtitle"]};
    margin-bottom: 0.8rem;
  }
  p {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme["--base-label"]};
    text-align: center;
    width: 21.6rem;
    margin-bottom: 3.3rem;
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20rem;
  margin-bottom: 2rem;
  h3 {
    font-size: 1.4rem;
    line-height: 130%;
    color: ${(props) => props.theme["--base-text"]};
    font-weight: normal;
    strong {
      font-size: 2.4rem;
      font-family: "Baloo 2";
      font-weight: 800;
    }
  }
`;
export const ShoppingContainer = styled.div`
  display: flex;

  gap: 0.8rem;

  > button {
    border: none;
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) => props.theme["--purple-dark"]};
    padding: 0.8rem;
    border-radius: 0.6rem;
    > svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background-color: ${(props) => props.theme["--base-button"]};
  border-radius: 0.6rem;

  button {
    padding: 0.8rem;
    border: none;
    color: ${(props) => props.theme["--purple"]};
    background-color: transparent;
    border-radius: none;
    > svg {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
