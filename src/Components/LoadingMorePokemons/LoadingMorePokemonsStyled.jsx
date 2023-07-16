import styled from "styled-components";


export const ButtonLoadingMore = styled.button`
  border:1px solid #333;
  border-radius: 3rem;
  background: #fff;
  color: #000000;
  font-family: Poppins;
  font-weight: 700;
  order:1;

@media screen and (max-width: 600px) {
    width:10em;
    font-size:.75em;
    height: 2em;
    margin: 1em;
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
    width:10em;
    font-size:.75em;
    height: 2em;
    margin: 1em;
}

@media screen and (min-width: 1201px) and (max-width: 1600px) {
    width:12em;
    font-size:.8em;
    height: 2em;
    margin: 1em;
}

@media screen and (min-width: 1601px) and (max-width: 2000px){
    width:10em;
    font-size:.8em;
    height: 2.5em;
    margin: 1em;
}

@media screen and (min-width: 2001px){
    width:10em;
    font-size:.9em;
    height: 2.5em;
    margin: 1em;
}

`


