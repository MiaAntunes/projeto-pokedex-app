import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  justify-content: space-between;
`;

export const ArticleMain = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  padding-left: 4rem;
`;

export const Banner = styled.img`
  width: 50%;
  height: 100vh;
`;

export const H1 = styled.p`
  color: #000;
  font-family: Karla;
  font-size: 3rem;
  letter-spacing: 0.25rem;
  margin-bottom: -1rem;
`;

export const H2 = styled.p`
  color: #000;
  font-family: Karla;
  font-size: 1.5rem;
`;

export const ButtonAllPokemons = styled.button`
  width: 16.7rem;
  height: 3.8rem;
  border-radius: 0.6875rem;
  background: rgba(0, 0, 41, 0.29);
  box-shadow: 0px -9px 0px 0px rgba(0, 0, 0, 0.18) inset;
`;
