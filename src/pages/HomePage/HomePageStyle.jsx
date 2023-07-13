import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  min-height: 100vh ;
  overflow-x: hidden;

  @media screen and  (max-width: 800px){
    width:100%;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1200px){
    max-width:100vw;
    align-items: center;
    width: 99.9vw
  }
  
  @media screen and (min-width: 1201px) and (max-width:2000px){
    max-width:100vw;
    width: 100vw;
  }

  @media screen and (min-width: 2001px) {
    width: 100vw;
  }

`;

  export const SectionHomePage = styled.section`
    display: flex;
    width: 100vw;
  
  @media screen and  (max-width: 800px){
    flex-direction:column;
    width:100%;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    height: 45vh;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    height: 40vh;
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1800px){
    justify-content:space-between;
    height: 50%;
  }

  @media screen and (min-width: 1801px){
    justify-content:center;
    height: 50%;
  }
 

`

export const ArticleMain = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 40%; */
  /* padding-left: 4rem; */

  @media screen and (max-width: 600px){
    width:100%;
    align-items:center;
    gap:1.35em 0;
    padding:.5em;
  }
  
  @media screen and (min-width: 601px) and (max-width: 1000px){
    padding:.5em;
    align-items:center;
    gap:1.5em 0;
  }
  
  @media screen and (min-width: 1001px) and  (max-width: 1600px){
    padding:1em;
    align-items:center;
    gap:1.8em 0;
  }
  
  @media screen and (min-width: 1601px) and (max-width: 1800px){
    padding:2em;
    align-items:center;
    gap:1.8em 0;
    width:50%;
  }

  @media screen and (min-width: 1801px) and (max-width: 2000px){
    padding:2em;
    align-items:center;
    gap:1.8em 0;
    width:45%;
  }
 
 
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    padding:2em;
    align-items:center;
    gap:1.8em 0;
    width:40%;
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    padding:2em;
    align-items:center;
    gap:1.8em 0;
    width:35%;
  }
  
  @media screen and (min-width: 3000px) {
    padding:2em;
    align-items:center;
    gap:1.8em 0;
    width:30%;
  }
`;

export const BannerMobile = styled.img`

  @media screen and (max-width: 600px){
    order: -1;
    width: 100%;
    margin: .5em 0; 
  }
  
  @media screen and (min-width: 601px) and (max-width: 800px){
    order: -1;
    width: 100%;
    margin: .5em 0; 
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    width:50%;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    width: 55%;
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    width: 50%;
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    width: 40%;
  }
  
  @media screen and (min-width: 1601px) and (max-width: 1800px){
    width: 45%;
  }

  @media screen and (min-width: 1801px){
    display:none;
  }

`;

export const BannerDesktop = styled.img`

 @media screen and  (max-width: 1800px){
    display:none;
  }
 @media screen and (min-width: 1801px) and (max-width: 2000px){
    width:35%;
  }
 
  @media screen and (min-width: 2001px) and (max-width: 3000px){
    width:30%;
  }
  
  @media screen and (min-width: 3000px) {
    width:25%;
  }
`;

export const H1 = styled.p`
  color: #000;
  font-family: Karla;
  

  @media screen and (max-width: 600px){
    font-size: 1.8em;
    letter-spacing: 0.2rem;
    text-align: center;
  }
  
  @media screen and (min-width: 601px) and (max-width: 800px){
    font-size: 2.2em;
    letter-spacing: 0.2rem;
    text-align: center;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    font-size: 2em;
    letter-spacing: 0.2rem;
    text-align: center;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    font-size: 2.4em;
    letter-spacing: 0.25rem;
    text-align: center; 
    /* duvida no text center */
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    font-size: 2.2em;
    letter-spacing: 0.25rem;
    text-align: center; 
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    font-size: 2.2em;
    letter-spacing: 0.25rem;
    text-align: center; 
  }
  
  @media screen and (min-width: 1601px) and (max-width: 1800px){
    font-size: 2.25em;
    letter-spacing: 0.25rem;
    text-align: center;
  }

  @media screen and (min-width: 1801px) and (max-width: 2000px){
    font-size: 2.25em;
    letter-spacing: 0.3rem;
    text-align: center;
  }
 
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    font-size: 2.2em;
    letter-spacing: 0.3rem;
    text-align: center;
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    font-size: 2.1em;
    letter-spacing: 0.3rem;
    text-align: center;
  }
  
  @media screen and (min-width: 3000px) {
    font-size: 2.1em;
    letter-spacing: 0.3rem;
    text-align: center;
  }
`;

export const H2 = styled.p`
  color: #000;
  font-family: Karla;
  text-align:center;

  @media screen and (max-width: 600px){
    font-size: 1em;
  }
  
  @media screen and (min-width: 601px) and (max-width: 800px){
    font-size: 1.3em;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    font-size: 1.3em;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    font-size: 1.35em;
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    font-size: 1.3em;
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    font-size: 1.3em;
  }
  
  @media screen and (min-width: 1601px) and (max-width: 1800px){
    font-size: 1.35em;
  }

  @media screen and (min-width: 1801px) and (max-width: 2000px){
    font-size: 1.45em;
  }
 
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    font-size: 1.45em;
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    font-size: 1.45em;
  }
  
  @media screen and (min-width: 3000px) {
    font-size: 1.45em;
  }
`;

export const ButtonAllPokemons = styled.button`
    border-radius: 0.7rem;
    background: rgba(0, 0, 41, 0.29);
 

  @media screen and (max-width: 600px){
    width: 15em;
    height: 3.5rem;
    margin-bottom:1em;
    padding: 0;
    box-shadow: -4px -6px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }
  
  @media screen and (min-width: 601px) and (max-width: 800px){
    width: 20em;
    height: 3.5rem;
    margin-bottom:1em;
    padding: 0;
    box-shadow: -4px -7px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }
  
  @media screen and (min-width: 801px) and (max-width: 1000px){
    width: 15em;
    height: 3.5rem;
    margin-bottom:1em;
    box-shadow: -4px -7px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }
  
  @media screen and (min-width: 1001px) and (max-width: 1200px){
    width: 15em;
    height: 4em;
    font-size:1.05em;
    box-shadow: -4px -7px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }
  
  @media screen and (min-width: 1201px) and (max-width: 1400px){
    width: 14em;
    height: 3.5em;
    font-size:1em;
    box-shadow: -3px -5px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }
  
  @media screen and (min-width: 1401px) and (max-width: 1600px){
    width: 14em;
    height: 3em;
    font-size:1em;
    box-shadow: -3px -5px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }
  
  @media screen and (min-width: 1601px) and (max-width: 1800px){
    width: 14em;
    height: 3.5em;
    font-size:1em;
    box-shadow: -3px -5px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }

  @media screen and (min-width: 1801px) and (max-width: 2000px){
    width: 14em;
    height: 3.5em;
    font-size:1em;
    box-shadow: -3px -5px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }
 
  @media screen and (min-width: 2001px) and (max-width: 2500px){
    width: 14.5em;
    height: 3.5em;
    font-size:1em;
    box-shadow: -4px -6px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }
  
  @media screen and (min-width: 2501px) and (max-width: 3000px){
    width: 14.5em;
    height: 3.5em;
    font-size:1em;
    box-shadow: -4px -6px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }
  
  @media screen and (min-width: 3000px) {
    width: 14.5em;
    height: 3.5em;
    font-size:1em;
    box-shadow: -4px -6px 0px 0px rgba(0, 0, 0, 0.18) inset;
  }
`;
