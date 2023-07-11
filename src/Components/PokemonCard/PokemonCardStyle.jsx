import styled from "styled-components";
import { getColors, getColorsCard } from "../../Utils/getPokemonColor";

export const ContainerCard = styled.div`
  display: flex;
  width: 25rem;
  height: 8rem;
  border-radius: 0.9375rem;
  background: ${({ type }) => getColorsCard(type)};
  justify-content: space-between;
`;

export const InfoCard = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.25rem;
  padding: 1rem 0 1rem 1rem;
`;

export const Id = styled.p`
  color: #333;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 600;
  margin: 0.1rem;
`;

export const Name = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 1.7rem;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0.1rem;
`;

export const ContainerImage = styled.div`
  width: 7.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.9rem;
  background: ${({ type }) => getColors(type)};
  position: relative;
`;

export const PokemonImage = styled.img`
  width: 105%;
  position: absolute;
  z-index: 2;
`;

export const VectorImage = styled.img`
  width: 100%;
  opacity: 0.2;
  position: absolute;
  z-index: 1;
`;

export const LikeImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem;
  z-index: 3;
`;

export const Type = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
`