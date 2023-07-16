import styled from "styled-components";
import { getColors, getColorsCard } from "../../Utils/getPokemonColor";

export const ContainerCard = styled.div`
  display: flex;
  box-shadow: 2px 2px 0px 3px #5c5c5cce;
  background: ${({ type }) => getColorsCard(type)};
  justify-content: space-between;

  @media screen and (max-width:450px)  {
    width:100%;
    height: 8rem;
    border-radius: 0.95rem;
  }

  @media screen and (min-width: 500px) and (max-width: 600px) {
    width: 60% ;
    height: 8rem;
    border-radius: 0.95rem;
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    width: 17em ;
    height: 8rem;
    border-radius: 0.95rem;
  }

  @media screen and (min-width: 1201px) and (max-width: 1600px) {
    width: 19em ;
    height: 8rem;
    border-radius: 0.95rem;
  }

  @media screen and (min-width: 1601px) {
    width: 20em ;
    height: 8rem;
    border-radius: 0.95rem;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    gap: 0.2em;
    padding: 1em;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px)  {
    gap: 0.25em;
    padding: 1em;
  }

  @media screen and (min-width: 1001px) {
    gap: 0.35em;
    padding: 1em;
  }

`;

export const Id = styled.p`
  color: #333;
  font-family: Poppins;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size: .75rem;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size: .8rem;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size: .85rem;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    font-size: .85rem;
  }

  @media screen and (min-width: 1201px) and (max-width: 1600px) {
    font-size: .8rem;
  }

  @media screen and (min-width: 1601px) and (max-width: 1800px) {
    font-size: .85rem;
  }

  @media screen and (min-width: 1801px) {
    font-size: .85rem;
  }
`;

export const Name = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 1.7rem;
  font-weight: 600;
  text-transform: capitalize;

  @media screen and (max-width: 600px) {
    font-size: 1em;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size: 1em;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size: 1.2em;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    font-size: 1.2em;
  }

  @media screen and (min-width: 1201px) and (max-width: 1600px) {
    font-size: 1.1em;
  }

  @media screen and (min-width: 1601px) {
    font-size: 1.2em;
  }
`;

export const TypeContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  @media screen and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px) {
    width: 100%;
  }

  @media screen and (min-width: 1401px) and (max-width: 1600px) {
    width: 100%;
  }

  @media screen and (min-width: 1601px) and (max-width: 1800px) {
    width: 100%;
  }

  @media screen and (min-width: 1801px) and (max-width: 2000px) {
    width: 100%;
  }

  @media screen and (min-width: 2001px) and (max-width: 2500px) {
    width: 100%;
  }

  @media screen and (min-width: 2501px) and (max-width: 3000px) {
    width: 100%;
  }

  @media screen and (min-width: 3000px) {
    width: 100%;
  }
`

export const TypeImage = styled.img`

  @media screen and (max-width: 600px) {
    width: 3em;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    width: 3.6em;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    width: 3.5em;
  }

  @media screen and (min-width: 1201px) and (max-width: 1600px) {
    width: 3.7em;
  }

  @media screen and (min-width: 1601px)  {
    width: 4em;
  }
`

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  background: ${({ type }) => getColors(type)};
  position: relative;

  @media screen and (max-width: 600px) {
    width: 7rem;
  }

  @media screen and (min-width: 601px) and (max-width: 1000px) {
    width: 7rem;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    width: 7rem;
  }

  @media screen and (min-width: 1201px) and (max-width: 1800px){
    width: 7.5rem;
  }

  @media screen and (min-width: 1801px) {
    width: 8rem;
  }

`;

export const PokemonImage = styled.img`
  position: absolute;
  /* z-index: 2; */

  @media screen and (max-width: 600px) {
    width: 7em;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    width: 7em;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    width: 7em;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    width: 6.5em;
  }

  @media screen and (min-width: 1201px)  {
    width: 7em;
  }

`;

export const VectorImage = styled.img`
  opacity: 0.2;
  position: absolute;
  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    width: 100%;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    width: 100%;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px) {
    width: 100%;
  }

  @media screen and (min-width: 1401px) and (max-width: 1600px) {
    width: 100%;
  }

  @media screen and (min-width: 1601px) and (max-width: 1800px) {
    width: 100%;
  }

  @media screen and (min-width: 1801px) and (max-width: 2000px) {
    width: 100%;
  }

  @media screen and (min-width: 2001px) and (max-width: 2500px) {
    width: 100%;
  }

  @media screen and (min-width: 2501px) and (max-width: 3000px) {
    width: 100%;
  }

  @media screen and (min-width: 3000px) {
    width: 100%;
  }
`;

export const LikeImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem;
  /* z-index: 3; */
  
  @media screen and (max-width: 600px) {
    width:1.3em;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    width:1.5em;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    width:1.5em;
  }

  @media screen and (min-width: 1001px) and (max-width: 2000px)  {
    width:1.6em;
  }

  @media screen and (min-width: 2001px) {
    width:1.9em;
  }
`;

