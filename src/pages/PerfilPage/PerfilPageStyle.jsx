import styled from "styled-components";
import { getColors, getColorsCard } from "../../Utils/getPokemonColor";

export const DetailsMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ type }) => getColors(type)};
  
`;

export const ArticleTudo = styled.article`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem;
`;

export const SectionInfoDetails = styled.article`
  font-family: "Poppins";
  font-weight: 500;
  color: rgb(0, 0, 0);

  h2 {
    text-transform: capitalize;
    font-size: 4rem;
  }

  .id {
    font-size: 1.5rem;
    padding: 0.5rem 0 0.7rem 0;
  }

  .description {
    font-weight: 400;
    line-height: 145%;
    font-size: 1.2rem;
    padding: 1rem 0 1rem 0;
  }
`;

export const PokemonDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.375rem;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .titleContainer {
    color: rgba(0, 0, 0, 0.6);
    font-family: Poppins;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  .resultContainer {
    display: flex;
    width: 9.625rem;
    padding: 0.5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.9375rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.9);
    font-family: Poppins;
    font-size: 1.125rem;
    font-weight: 700;
    text-transform: capitalize;
  }
`;
