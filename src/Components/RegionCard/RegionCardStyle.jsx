import styled from "styled-components";
import { getRegionMap } from "../../Utils/getRegionMap";

export const RegionCardStyle = styled.div`
    display: flex;
    width: 25rem;
    height: 8rem;
    border-radius: 0.9375rem;
    justify-content: center;
    background-image: ${({ map }) => getRegionMap(map)};;
`
export const MapImage = styled.img`
    width: 75%;
    height: 100%;
    border-radius: 0.9375rem;
    cursor: pointer;
`

export const MapName = styled.p`
  color: #000;
  font-family: Poppins;
  font-size: 1.7rem;
  font-weight: 600;
  text-transform: capitalize;
  margin: 0.1rem;
`;

