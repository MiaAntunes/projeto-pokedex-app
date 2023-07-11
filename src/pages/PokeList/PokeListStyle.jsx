import styled from "styled-components";

export const ContainerInputs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 50%;
  height: 3rem;
  padding: 0.6rem 1rem;
  border-radius: 1.8rem;
  border: 1.5px solid #ccc;
  color: #999;
  font-family: Poppins;
  font-size: 1.25rem;
  font-weight: 400;
`;

export const Select = styled.select`
  width: 20%;
  height: 4rem;
  padding: 0.6rem 1rem;
  border-radius: 3rem;
  background: #333;
  color: #fff;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 600;
`;

export const ContainerPokeList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
`;
