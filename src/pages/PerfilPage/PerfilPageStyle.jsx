import styled from "styled-components";
import { getColors, getColorsCard } from "../../Utils/getPokemonColor";

export const Container = styled.div`
  padding-top: 1.5rem;

  @media (min-width: 1024px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (min-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 480px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (max-width: 360px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: auto;
  margin-top: 4px;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  box-shadow: rgba(92, 92, 92, 0.808) 2px 2px 0px 3px;
  background: ${({ type }) => getColors(type)};

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const PokemonImageWrapper = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const ContainerId = styled.p`
  margin-top: 4px;
  color: white;
  font-weight: 600;
  font-family: "poppins", sans-serif;
`;

export const ContainerName = styled.h2`
  font-size: 1.5rem;
  font-family: "Poppins";

  @media (min-width: 768px) {
    font-size: 2rem; /* Tamanho para dispositivos médios */
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
  }

  color: white;
  font-weight: 600;
  padding-bottom: 6px;
  text-transform: capitalize;
`;

export const PokemonContainer = styled.div`
  position: relative;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 24rem;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    margin-top: 6rem;
  }
`;

export const PokemonImageCircle = styled.img`
  position: absolute;
  width: 15rem;
  height: 15rem;
  opacity: 0.4;
  background: ${({ type }) => getColors(type)};
  z-index: 1;
`;

export const PokemonImage = styled.img`
  position: relative;
  width: 16.25rem;
  height: 16.25rem;
  z-index: 2;
`;

export const InformationWrapper = styled.div`
  background: ${({ type }) => getColorsCard(type)};
  margin-top: 0;
  border-radius: 0;
  overflow: hidden;
  width: 100%;
  padding-top: 4rem;
  padding-left: 1.5rem;
  padding-left: 3rem;
  padding-left: 6rem;

  @media (min-width: 280px) {
    padding-top: 0.4rem;
    padding-left: 0.4rem;
  }

  @media (min-width: 360px) {
    padding-top: 0.5rem;
    padding-left: 0.5rem;
  }

  @media (min-width: 640px) {
    padding-top: 1rem;
    padding-left: 1rem;
  }

  @media (min-width: 768px) {
    padding-top: 2rem;
    padding-left: 2rem;
  }

  @media (min-width: 1024px) {
    border-radius: 0px 1.5rem 1.5rem 0px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 1.1rem;
  justify-content: space-around;
  width: 100%;
  gap: 1.5rem;

  @media (min-width: 280px) {
    gap: 0.1rem;
  }

  @media (min-width: 360px) {
    gap: 0.2rem;
  }

  @media (min-width: 640px) {
    gap: 0.6rem;
  }

  @media (min-width: 768px) {
    gap: 0.8rem;
  }

  @media (min-width: 1024px) {
    gap: 1rem;
  }
`;

export const TabButton = styled.button`
  color: #000;
  font-family: "Poppins";
  font-size: 1.1rem;
  font-weight: bold;
  background-color: transparent;
  border: none;
  outline: none;

  &.active {
    border-bottom: 4px solid ${({ type }) => getColors(type)};
  }

  @media (min-width: 280px) {
    font-size: 0.5rem;
  }

  @media (min-width: 360px) {
    font-size: 0.7rem;
  }

  @media (min-width: 640px) {
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.4rem;
  }
`;

export const DataWrapper = styled.div`
  position: relative;
  margin-top: 2rem;
`;

export const BiographyWrapper = styled.div`
  padding: 1rem;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const TitleData = styled.h1`
  font-family: "Poppins";
  font-size: 2.2rem;
  font-weight: 800;
  padding-bottom: 1rem;
`;

export const Description = styled.p`
  font-family: "Poppins";
  font-size: 1.2rem;
  padding-bottom: 1rem;
`;

export const ImageData = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  background-color: transparent;
`;

export const TitleDataPokemon = styled.h2`
  color: rgba(0, 0, 0, 0.6);
  font-family: "Poppins";
  font-size: 1.9rem;
  font-weight: 600;
`;

export const ResultDataPokemon = styled.div`
  display: flex;
  width: 9.625rem;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.9375rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ResultDataTitle = styled.p`
  color: rgba(0, 0, 0, 0.9);
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
