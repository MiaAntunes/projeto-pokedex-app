import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 20.5rem;
  height: 6.375rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: #edf6ec;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Id = styled.p`
  color: #333;
  font-family: Poppins;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const Name = styled.p`
  color: var(--escala-de-cinza-preto, #000);
  font-family: Poppins;
  font-size: 1.3rem;
  font-weight: 600;
`;
