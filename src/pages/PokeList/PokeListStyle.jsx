import styled from "styled-components";

export const SectionPokeList = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  @media screen and (max-width: 600px) {
    padding:.5em;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    padding:.5em;
  }

  @media screen and (min-width: 1601px) {
    display: flex;
    flex-direction: column;
  }

`;

export const ContainerInputs = styled.div`
  display: flex;
  margin: 1rem;
  gap: 1rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    justify-content: center;
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px) {
    justify-content: center;
  }

  @media screen and (min-width: 1401px) and (max-width: 1600px) {
    justify-content: center;
  }

  @media screen and (min-width: 1601px) and (max-width: 1800px) {
    justify-content: center;
  }

  @media screen and (min-width: 1801px) and (max-width: 2000px) {
    justify-content: center;
  }

  @media screen and (min-width: 2001px) and (max-width: 2500px) {
    justify-content: center;
  }

  @media screen and (min-width: 2501px) and (max-width: 3000px) {
    justify-content: center;
  }

  @media screen and (min-width: 3000px) {
    justify-content: center;
  }
`;

export const Input = styled.input`
  border-radius: 1.8rem;
  border: 1.5px solid #ccc;
  color: #201f1f;
  font-family: Poppins;

  @media screen and (max-width: 600px) {
    width:100%;
    height:2em;
    font-size: .85em;
    padding: .75em ;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    height:2.5em;
    font-size: .85em;
    padding: 1em ;
    width:60%;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    height:2.8em;
    font-size: .9em;
    padding: 1em ;
    width:60%;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    height:2.3em;
    font-size: .85em;
    padding: 1em ;
    width:calc(100% - 50%);
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px) {
    height:2.45em;
    font-size: .9em;
    padding: 1em ;
    width:calc(100% - 70%);
  }

  @media screen and (min-width: 1401px) and (max-width: 1600px) {
    height:2.45em;
    font-size: .9em;
    padding: 1em ;
    width:calc(100% - 70%);
  }

  @media screen and (min-width: 1601px) and (max-width: 1800px) {
    height:2.5em;
    font-size: .9em;
    padding: 1em ;
    width:calc(100% - 70%);
  }

  @media screen and (min-width: 1801px) {
    height:3em;
    font-size: 1em;
    padding: 1em ;
    width:calc(100% - 70%);
  }
`;

export const ContainerSelect = styled.div`
   align-items:center;
   display:flex;

  @media screen and (max-width: 600px) {
    gap:.5em ;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    gap:.5em ;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    gap:.5em ;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    gap:.5em ;
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px) {
    gap:.5em ;
  }

  @media screen and (min-width: 1401px) and (max-width: 1600px) {
    gap:.5em ;
  }

  @media screen and (min-width: 1601px) and (max-width: 1800px) {
    gap:.5em ;
  }

  @media screen and (min-width: 1801px) and (max-width: 2000px) {
    gap:.5em ;
  }

  @media screen and (min-width: 2001px) and (max-width: 2500px) {
    gap:.5em ;
  }

  @media screen and (min-width: 2501px) and (max-width: 3000px) {
    gap:.5em ;
  }

  @media screen and (min-width: 3000px) {
    gap:.5em ;
  }
`

export const Select = styled.select`
  border-radius: 3rem;
  background: #333;
  color: #fff;
  font-family: Poppins;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size:.7em;
    width:50%;
    padding: .5em;
    height:2.5em;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    padding: .55em;
    height:2.75em;
    font-size:.75em;
    width:auto;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    padding: .55em;
    height:2.9em;
    font-size:.85em;
    width:auto;
  }

  @media screen and (min-width: 1001px) and (max-width: 1200px) {
    padding: .3em;
    height:2.2em;
    font-size:.85em;
    width:auto;
  }

  @media screen and (min-width: 1201px) and (max-width: 1400px) {
    padding: .3em;
    height:2.45em;
    font-size:.8em;
    width:10em;
  }

  @media screen and (min-width: 1401px) and (max-width: 1600px) {
    padding: .3em;
    height:2.45em;
    font-size:.85em;
    width:10em;
  }

  @media screen and (min-width: 1601px) and (max-width: 2000px) {
    padding: .3em;
    height:2.7em;
    font-size:.9em;
    width:10em;
  }

  @media screen and (min-width: 2001px) {
    padding: .3em;
    height:2.9em;
    font-size:.9em;
    width:10em;
  }

`;

export const Option = styled.option`

  @media screen and (max-width: 600px) {
    font-size:1.1em;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size:1.1em;
  }

  @media screen and (min-width: 801px) and (max-width: 1000px) {
    font-size:1em;
  }

  @media screen and (min-width: 1001px) {
    font-size:1em;
  }

`

export const ContainerButton = styled.div`
  display:flex;
  width: 100%;
  align-items:center;
  justify-content: center;
  order:1;
  margin:0.5em;
`

export const ContainerPokeList = styled.div`
  display: flex;
  justify-content: center;


  @media screen and (max-width: 600px) {
    align-items: center;
    flex-direction: column;
    gap: 1.5em;
    padding: 1rem;
    margin:0.5em;
  }

  @media screen and (min-width: 601px) and (max-width: 1600px) {
    flex-wrap: wrap;
    gap: 1.5em;
    padding: 1rem;
    margin:0.5em;
  }

  @media screen and (min-width: 1601px)  {
    align-self: center;
    flex-wrap: wrap;
    gap: 2em;
    padding: 1rem;
    width:80%;
    margin:1em;
  }
`;
