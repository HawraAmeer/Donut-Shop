import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Description = styled.h4`
  text-align: center;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
`;

export const List = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  color: maroon;
  text-align: center;
`;

export const Donut = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 150px;
  }

  p {
    text-align: center;

    &.donut-price {
      color: ${(props) => props.theme.otherColor};
    }
  }
`;
